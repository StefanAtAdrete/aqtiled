<?php

namespace Drupal\cookiebot\Form;

use Drupal\Core\Cache\CacheTagsInvalidatorInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\path_alias\AliasManagerInterface;
use Drupal\filter\Entity\FilterFormat;

/**
 * Cookiebot settings form.
 */
class CookiebotForm extends ConfigFormBase {

  /**
   * Entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Alias manager.
   *
   * @var \Drupal\path_alias\AliasManagerInterface
   */
  protected $aliasManager;

  /**
   * The cache tag invalidator service.
   *
   * @var \Drupal\Core\Cache\CacheTagsInvalidatorInterface
   */
  private $cacheTagsInvalidator;

  /**
   * Constructs a object.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The factory for configuration objects.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_manager
   *   The entity type manager.
   * @param \Drupal\path_alias\AliasManagerInterface $alias_manager
   *   The alias manager.
   * @param \Drupal\Core\Cache\CacheTagsInvalidatorInterface $cache_tags_invalidator
   *   The cache tag invalidator service.
   */
  public function __construct(ConfigFactoryInterface $config_factory, EntityTypeManagerInterface $entity_manager, AliasManagerInterface $alias_manager, CacheTagsInvalidatorInterface $cache_tags_invalidator) {
    parent::__construct($config_factory);
    $this->setConfigFactory($config_factory);
    $this->entityTypeManager = $entity_manager;
    $this->aliasManager = $alias_manager;
    $this->cacheTagsInvalidator = $cache_tags_invalidator;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory'),
      $container->get('entity_type.manager'),
      $container->get('path_alias.manager'),
      $container->get('cache_tags.invalidator')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'cookiebot.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'cookiebot_settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('cookiebot.settings');

    if (empty($config->get('cookiebot_cbid'))) {
      $this->messenger()->addWarning($this->t('Cookiebot functionality is disabled until you enter a valid CBID.'));
    }

    $default_filter_format = filter_default_format();
    $full_html_format = FilterFormat::load('full_html');
    if ($default_filter_format == 'restricted_html' && !empty($full_html_format) && $full_html_format->get('status')) {
      $default_filter_format = 'full_html';
    }

    $form['cookiebot_cbid'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Your cookiebot Domain Group ID (CBID)'),
      '#description' => $this->t("This ID looks like 00000000-0000-0000-0000-000000000000. You can find it in the <a href='https://www.cookiebot.com/en/manage'>Cookiebot Manager</a> on the 'Your scripts' tab."),
      '#default_value' => $config->get('cookiebot_cbid'),
    ];

    $form['cookiebot_block_cookies'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Automatically block all cookies'),
      '#description' => $this->t('Defines if Cookiebot should <a href=":automatic_url">automatically block all cookies</a> until a user has consented. If not set, cookie-setting scripts should manually be marked up as described in the <a href=":manual_url">manual implementation guide</a>.', [
        ':automatic_url' => 'https://www.cookiebot.com/en/automatic-cookie-control/',
        ':manual_url' => 'https://www.cookiebot.com/en/manual-implementation/',
      ]),
      '#default_value' => $config->get('cookiebot_block_cookies'),
    ];

    $form['cookiebot_iab_enabled'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enabling IAB framework'),
      '#description' => $this->t('IAB (Interactive Advertising Bureau) model puts scripts control in the hands of advertisers and vendors by only signaling consent to vendors. More information about <a href="https://support.cookiebot.com/hc/en-us/articles/360007652694-Cookiebot-and-the-IAB-Consent-Framework">Cookiebot and the IAB Consent Framework</a>.'),
      '#default_value' => $config->get('cookiebot_iab_enabled'),
    ];

    $form['cookiebot_drupal_culture'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Use the current Drupal language'),
      '#description' => $this->t("Use the current Drupal language for the cookie popup. If not set Cookiebot will autodetect the language from the user's browser."),
      '#default_value' => $config->get('cookiebot_drupal_culture'),
    ];

    $form['cookiebot_disable_async_loading'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Disable async loading'),
      '#description' => $this->t("It is recomended to only disable async loading when your website encounters issues with Cookiebot not being loaded properly.<br>This is a known issue with Safari's automatic content blocker."),
      '#default_value' => $config->get('cookiebot_disable_async_loading'),
    ];

    $form['cookiebot_declaration'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Cookie declaration'),
    ];

    $form['cookiebot_declaration']['cookiebot_show_declaration'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show the Cookiebot cookie declaration'),
      '#description' => $this->t('Automatically show the full Cookiebot cookie declaration on the given page.'),
      '#default_value' => $config->get('cookiebot_show_declaration'),
    ];

    $form['visibility'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Cookiebot visibility'),
    ];

    $form['visibility']['exclude_paths'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Exclude paths'),
      '#default_value' => !empty($config->get('exclude_paths')) ? $config->get('exclude_paths') : '',
      '#description' => $this->t("Specify pages by using their paths. Enter one path per line. The '*' character is a wildcard. Example paths are %blog for the blog page and %blog-wildcard for every personal blog. %front is the front page.", [
        '%blog' => '/blog',
        '%blog-wildcard' => '/blog/*',
        '%front' => '<front>',
      ]),
    ];

    $form['visibility']['exclude_admin_theme'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Exclude admin pages'),
      '#default_value' => $config->get('exclude_admin_theme'),
    ];

    $form['visibility']['exclude_uid_1'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Don’t show the Cookiebot for UID 1.'),
      '#default_value' => $config->get('exclude_uid_1'),
    ];

    $declaration_node = '';
    if ($config->get('cookiebot_show_declaration_node') !== NULL) {
      $declaration_node = $this->entityTypeManager->getStorage('node')->load($config->get('cookiebot_show_declaration_node'));
    }

    $description = $this->t('Show the full cookie declaration on the node page with the given node ID.');
    $description .= '<br />';
    $description .= $this->t("Note that custom templates and modules like Panels and Display Suite can prevent the declaration from showing up.
    You can always place our block or manually place Cookiebot's declaration script found in their manager if your input filters allow it.");

    $form['cookiebot_declaration']['cookiebot_show_declaration_node'] = [
      '#type' => 'entity_autocomplete',
      '#target_type' => 'node',
      '#title' => $this->t('Node page title'),
      '#description' => $description,
      '#default_value' => $declaration_node,
      '#states' => [
        'visible' => [
          ':input[name="cookiebot_show_declaration"]' => [
            'checked' => TRUE,
          ],
        ],
      ],
    ];

    $form['placeholders'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Placeholders for blocked elements with src attribute (iframe, etc.)'),
      '#description' => $this->t('Define placeholders for blocked ´src´ elements like iframe, img, audio, video, embed, picture, source. In automatic mode some sources like YouTube iFrames are blocked automatically. In manual mode you have to add the markup yourself. See Cookiebot support <a href=":url1" target="_blank">here</a> and <a href=":url2" target="_blank">here</a> for details.', [':url1' => 'https://support.cookiebot.com/hc/en-us/articles/360003790854-Iframe-cookie-consent-with-YouTube-example', ':url2' => 'https://support.cookiebot.com/hc/en-us/articles/360003812053-Hide-and-show-content-based-on-the-visitor-s-consent']),
    ];
    $form['placeholders']['marketing'] = [
      '#type' => 'details',
      '#title' => $this->t('Marketing') . ' ' . '([data-src][data-cookieconsent="marketing"])',
      '#description' => $this->t('Blocked elements with [data-src][data-cookieconsent="marketing"] attributes. This is typically automatically added by Cookiebot in automatic mode.'),
    ];
    $form['placeholders']['marketing']['message_placeholder_cookieconsent_optout_marketing_show'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show placeholder message for blocked marketing elements'),
      '#description' => $this->t('Select if you want to show a message for blocked elements like iframes, hidden by cookiebot until marketing consent is given.'),
      '#default_value' => $config->get('message_placeholder_cookieconsent_optout_marketing_show'),
    ];

    $message_placeholder_cookieconsent_optout_marketing_format = $config->get('message_placeholder_cookieconsent_optout_marketing.format');
    if (!empty($message_placeholder_cookieconsent_optout_marketing_format)) {
      $filter_format = FilterFormat::load($message_placeholder_cookieconsent_optout_marketing_format);
      if (empty($filter_format) || !$filter_format->get('status')) {
        $message_placeholder_cookieconsent_optout_marketing_format = $default_filter_format;
      }
    }
    $form['placeholders']['marketing']['message_placeholder_cookieconsent_optout_marketing'] = [
      '#type' => 'text_format',
      '#title' => $this->t('Placebolder message for blocked marketing elements'),
      '#default_value' => !empty($config->get('message_placeholder_cookieconsent_optout_marketing.value')) ? $config->get('message_placeholder_cookieconsent_optout_marketing.value') : 'Please <a href="!cookiebot_renew" class="cookieconsent-optout-marketing__cookiebot-renew">accept marketing-cookies</a> to view this embedded content from <a href="!cookiebot_from_src_url" target="_blank" class="cookieconsent-optout-marketing__from-src-url">!cookiebot_from_src_url</a>',
      '#required' => FALSE,
      '#description' => $this->t(
        "Add this placeholder below the blocked marketing element, if the user has not consented to marketing cookies.<br />Clear to use the default markup.<br />You may use these dynamical placeholders: <ul><li><em>!cookiebot_renew</em> = javascript:Cookiebot.renew()</li><li><em>!cookiebot_from_src_url</em> = iframe data-src attribute value</li></ul>"
      ),
      '#format' => $message_placeholder_cookieconsent_optout_marketing_format,
      '#states' => [
        'visible' => [
          ':input[name="message_placeholder_cookieconsent_optout_marketing_show"]' => [
            'checked' => TRUE,
          ],
        ],
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    $cbid_trimmed = trim($form_state->getValue('cookiebot_cbid'));
    $form_state->setValue('cookiebot_cbid', $cbid_trimmed);

    if (!empty($cbid_trimmed) && !preg_match('/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/', $cbid_trimmed)) {
      $form_state->setErrorByName('cookiebot_cbid', $this->t('The entered Domain Group ID is not formatted correctly.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->cacheTagsInvalidator->invalidateTags([
      'cookiebot:cbid',
      'cookiebot:show_declaration',
      'cookiebot:iab_enabled',
    ]);

    $this->config('cookiebot.settings')
      ->set('cookiebot_cbid', $form_state->getValue('cookiebot_cbid'))
      ->set('cookiebot_block_cookies', $form_state->getValue('cookiebot_block_cookies'))
      ->set('cookiebot_iab_enabled', $form_state->getValue('cookiebot_iab_enabled'))
      ->set('cookiebot_drupal_culture', $form_state->getValue('cookiebot_drupal_culture'))
      ->set('cookiebot_disable_async_loading', $form_state->getValue('cookiebot_disable_async_loading'))
      ->set('cookiebot_show_declaration', $form_state->getValue('cookiebot_show_declaration'))
      ->set('cookiebot_show_declaration_node', $form_state->getValue('cookiebot_show_declaration_node'))
      ->set('exclude_paths', $form_state->getValue('exclude_paths'))
      ->set('exclude_admin_theme', $form_state->getValue('exclude_admin_theme'))
      ->set('exclude_uid_1', $form_state->getValue('exclude_uid_1'))
      ->set('message_placeholder_cookieconsent_optout_marketing_show', $form_state->getValue('message_placeholder_cookieconsent_optout_marketing_show'))
      ->set('message_placeholder_cookieconsent_optout_marketing', $form_state->getValue('message_placeholder_cookieconsent_optout_marketing'))
      ->save();
  }

}
