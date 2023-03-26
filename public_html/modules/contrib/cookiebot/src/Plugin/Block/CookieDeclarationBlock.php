<?php

namespace Drupal\cookiebot\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Cache\Cache;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'CookieDeclarationBlock' block.
 *
 * @Block(
 *  id = "cookie_declaration_block",
 *  admin_label = @Translation("Cookie declaration block"),
 * )
 */
class CookieDeclarationBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * The config factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;

  /**
   * The language manager service.
   *
   * @var \Drupal\Core\Language\LanguageManagerInterface
   */
  protected $languageManager;

  /**
   * Constructs a new Block object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param string $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory.
   * @param \Drupal\Core\Language\LanguageManagerInterface $language_manager
   *   The language manager service.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, ConfigFactoryInterface $config_factory, LanguageManagerInterface $language_manager) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->configFactory = $config_factory;
    $this->languageManager = $language_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('config.factory'),
      $container->get('language_manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $config = $this->configFactory->get('cookiebot.settings');
    $cbid = $config->get('cookiebot_cbid');

    if (empty($cbid)) {
      return $build;
    }

    $build['cookie_declaration_block'] = [
      '#theme' => 'cookiebot_declaration',
      '#cookiebot_src' => 'https://consent.cookiebot.com/' . $cbid . '/cd.js',
    ];

    $culture = $config->get('cookiebot_drupal_culture');
    if ($culture) {
      $cookiebot_culture = \Drupal::languageManager()->getCurrentLanguage()->getId();
      \Drupal::moduleHandler()->alter('cookiebot_culture', $cookiebot_culture);
      $build['cookie_declaration_block']['#cookiebot_culture'] = $cookiebot_culture;
    }

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
    return Cache::mergeTags(parent::getCacheTags(), ['cookiebot:cbid']);
  }

}
