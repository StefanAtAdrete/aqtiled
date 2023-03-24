<?php

namespace Drupal\commerce_pvt\Plugin\views\area;

use Drupal\commerce_pvt\Traits\CommercePVTCommonTrait;
use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\RedirectCommand;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\views\Plugin\views\area\AreaPluginBase;

/**
 * Defines an area handler for the "GoTo cart" button.
 *
 * @ViewsArea("commerce_pvt_goto_cart_button")
 */
class GoToCartButton extends AreaPluginBase {
  use CommercePVTCommonTrait;

  /**
   * {@inheritdoc}
   */
  public function render($empty = FALSE) {
    return [];
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['button_label'] = ['default' => 'Go to cart'];
    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
    $form['button_label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Button label'),
      '#default_value' => $this->options['button_label'],
      '#required' => TRUE,
    ];
  }

  /**
   * Submits the configuration form and save options.
   *
   * @param mixed $form
   *   Settings form being submitted.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Settings form state being submitted.
   */
  public function submitOptionsForm(&$form, FormStateInterface $form_state) {
    parent::submitOptionsForm($form, $form_state);

    $options = &$form_state->getValue('options');
    $this->options['button_label'] = $options['button_label'];
  }

  /**
   * Gets whether the views form should be shown when the view has no results.
   *
   * @param bool $empty
   *   Whether the view has results.
   *
   * @return bool
   *   True if the views form should be shown, FALSE otherwise.
   */
  public function viewsFormEmpty($empty) {
    return $empty;
  }

  /**
   * Builds the views form.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function viewsForm(array &$form, FormStateInterface $form_state) {

    /** @var \Drupal\commerce_product\Entity\Product $current_product */
    $current_product = $this->routeMatch->getParameter('commerce_product');
    if ($current_product) {
      // Make sure we do not accidentally cache this form.
      $form['#cache']['max-age'] = 0;

      $form[$this->options['id']]['#tree'] = TRUE;

      $cart = NULL;
      $default_variation = $current_product->getDefaultVariation();
      $total_items = 0;

      if ($default_variation) {
        $order_type = $this->getOrderType($default_variation);

        /** @var \Drupal\commerce_order\Entity\OrderInterface $cart */
        $cart = $this->cartProvider->getCart($order_type, $this->currentStore);
        if ($cart) {
          foreach ($cart->getItems() as $orderItem) {
            $prod_variation = $orderItem->getPurchasedEntity();
            $prod = $prod_variation->getProduct();
            if ($prod->id() == $current_product->id()) {
              $total_items += (float) $orderItem->getQuantity();
            }
          }
        }
      }

      if ($cart && $total_items > 0) {
        $form['actions']['goto_cart'] = [
          '#type' => 'submit',
          '#value' => $this->options['button_label'],
          '#goto_cart_button' => TRUE,
          '#button_type' => 'primary',
          '#attributes' => [
            'class' => ['goto-cart-button'],
          ],
        ];

        if (isset($form['actions']['submit']) && !empty($form['actions']['submit']['#ajax'])) {
          $form['#prefix'] = '<div class="commerce-pvt-ajax-form-wrapper">';
          $form['#suffix'] = '</div>';

          $form['actions']['goto_cart']['#ajax'] = [
            'callback' => [get_class($this), 'viewsFormSubmitAjax'],
            'progress' => [
              'type' => 'throbber',
              'message' => $this->t('Redirecting to cart...'),
            ],
          ];
        }
      }
    }
  }

  /**
   * Submits the views form.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function viewsFormSubmit(array &$form, FormStateInterface $form_state) {
    $triggering_element = $form_state->getTriggeringElement();
    if (!empty($triggering_element['#goto_cart_button'])) {
      $form_state->setRedirect('commerce_cart.page');
    }
  }

  /**
   * Submits the views form via Ajax.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return \Drupal\Core\Ajax\AjaxResponse
   *   Ajax response.
   *
   * @throws \Exception
   */
  public static function viewsFormSubmitAjax(array &$form, FormStateInterface $form_state) {
    $triggering_element = $form_state->getTriggeringElement();
    if (!empty($triggering_element['#goto_cart_button'])) {
      $form_state->setRedirect('commerce_cart.page');
      if ($form_state->hasAnyErrors()) {
        $response = CommercePVTCommonTrait::updatePageElements($form, $form_state);
      }
      else {
        $response = new AjaxResponse();
        $url = Url::fromRoute('commerce_cart.page');
        $command = new RedirectCommand($url->toString());
        $response->addCommand($command);
      }

      return $response;
    }
  }

}
