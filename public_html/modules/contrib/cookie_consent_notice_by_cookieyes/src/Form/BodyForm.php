<?php

namespace Drupal\cookieyes_scripts\Form;

use Drupal\Core\Form\ConfigFormBase;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Form\FormStateInterface;


class BodyForm extends ConfigFormBase {

  /**
   * Implements FormBuilder::getFormId.
   */
  public function getFormId() {
    return 'cookieyes_settings';
  }

  /**
   * Implements ConfigFormBase::getEditableConfigNames.
   */
  protected function getEditableConfigNames() {
    return ['cookieyes_scripts.body.settings'];
  }

  /**
   * Implements FormBuilder::buildForm.
   */
  public function buildForm(array $form, FormStateInterface $form_state, Request $request = NULL) {
    $body_section = $this->config('cookieyes_scripts.body.settings')->get();

    $form['cookieyes'] = [
      '#type'        => 'fieldset',
      '#title'       => $this->t('Add CookieYes Script'),
      '#description' => $this->t('All the defined scripts in this section would be added next to <strong>body</strong> tag.'),
    ];

    $form['cookieyes']['enable'] = [
      '#type'          => 'checkbox',
      '#title'         => $this->t('Enable CookieYes'),
      '#default_value' => isset($body_section['enable']) ? $body_section['enable'] : true
    ];

    $form['cookieyes']['scripts'] = [
      '#type'          => 'textarea',
      '#title'         => $this->t('GDPR Script'),
      '#default_value' => isset($body_section['scripts']) ? $body_section['scripts'] : '',
      '#rows'          => 10,
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * Implements FormBuilder::submitForm().
   *
   * Serialize the user's settings and save it to the Drupal's config Table.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $values = $form_state->getValues();

    $this->configFactory()
      ->getEditable('cookieyes_scripts.body.settings')
      ->set('scripts', $values['scripts'])
      ->set('enable', $values['enable'])
      ->save();

    $this->messenger()->addStatus($this->t('Your Settings have been saved.'));
  }

}
