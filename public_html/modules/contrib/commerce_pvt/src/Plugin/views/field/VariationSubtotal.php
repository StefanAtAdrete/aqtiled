<?php

namespace Drupal\commerce_pvt\Plugin\views\field;

use Drupal\commerce_pvt\Traits\CommercePVTCommonTrait;
use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\Plugin\views\field\UncacheableFieldHandlerTrait;
use Drupal\views\ResultRow;

/**
 * Defines a form element for order item subtotal inside cart.
 *
 * @ViewsField("commerce_pvt_variation_subtotal")
 */
class VariationSubtotal extends FieldPluginBase {
  use UncacheableFieldHandlerTrait;
  use CommercePVTCommonTrait;

  /**
   * {@inheritdoc}
   */
  public function clickSortable() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getValue(ResultRow $row, $field = NULL) {
    return '<!--form-item-' . $this->options['id'] . '--' . $row->index . '-->';
  }

  /**
   * {@inheritdoc}
   */
  public function query() {
    // Do nothing.
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();

    $options['strip_trailing_zeroes'] = ['default' => 1];
    $options['currency_display'] = ['default' => 'symbol'];
    $options['empty_markup'] = ['default' => ' - '];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    $form['currency_display'] = [
      '#type' => 'select',
      '#title' => $this->t('Subtotal currency display'),
      '#options' => [
        'symbol' => $this->t('Symbol (e.g. "$")'),
        'code' => $this->t('Currency code (e.g. "USD")'),
        'none' => $this->t('None'),
      ],
      '#default_value' => $this->options['currency_display'],
    ];

    $form['strip_trailing_zeroes'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Strip trailing zeroes after the decimal point.'),
      '#default_value' => $this->options['strip_trailing_zeroes'],
    ];

    $form['empty_markup'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Empty markup'),
      '#description' => $this->t('This is showed when quantity is Zero'),
      '#default_value' => $this->options['empty_markup'],
    ];

  }

  /**
   * Saves the Options form as plugin configurations.
   *
   * @param mixed $form
   *   The form array.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The form state object.
   */
  public function submitOptionsForm(&$form, FormStateInterface $form_state) {
    parent::submitOptionsForm($form, $form_state);

    $options = &$form_state->getValue('options');
    $this->options['currency_display'] = $options['currency_display'];
    $this->options['strip_trailing_zeroes'] = $options['strip_trailing_zeroes'];
    $this->options['empty_markup'] = $options['empty_markup'];
  }

  /**
   * Shows the element of the view as FormElement.
   *
   * @param array $form
   *   The view form being build.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The form state of the view Form being build.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function viewsForm(array &$form, FormStateInterface $form_state) {
    $current_product = $this->routeMatch->getParameter('commerce_product');
    if ($current_product) {
      // Make sure we do not accidentally cache this form.
      $form['#cache']['max-age'] = 0;

      $cart = NULL;
      $default_variation = $current_product->getDefaultVariation();
      if ($default_variation) {

        $order_type = $this->getOrderType($default_variation);
        /** @var \Drupal\commerce_order\Entity\OrderInterface $cart */
        if ($cart = $this->cartProvider->getCart($order_type, $this->currentStore)) {

          $form[$this->options['id']]['#tree'] = TRUE;
          foreach ($this->view->result as $row_index => $row) {
            $order_item = $this->getOrderItemFromCart($cart, $row->variation_id);
            $markup = $this->options['empty_markup'];
            if ($order_item) {
              $price = $order_item->getTotalPrice();
              $number = $price->getNumber();
              $currency_code = $price->getCurrencyCode();
              $options = $this->getFormatterOptions();

              $markup = $this->currencyFormatter->format($number, $currency_code, $options);
            }

            $form[$this->options['id']][$row_index] = [
              '#type' => 'item',
              '#markup' => $markup,
            ];
          }

        }
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function viewsFormSubmit(array &$form, FormStateInterface $form_state) {
    // Do nothing here ...
  }

  /**
   * Gets the formatter options configured inside view Field.
   *
   * @return array
   *   Options for the formatter to use.
   */
  private function getFormatterOptions() {
    $options = [
      'currency_display' => $this->options['currency_display'],
    ];
    if ($this->options['strip_trailing_zeroes']) {
      $options['minimum_fraction_digits'] = 0;
    }
    return $options;
  }

}
