<?php

namespace Drupal\commerce_pvt\Plugin\views\area;

use Drupal\commerce_pvt\Traits\CommercePVTCommonTrait;
use Drupal\Component\Render\FormattableMarkup;
use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\area\AreaPluginBase;

/**
 * Defines an area handler for the "Summary information" button.
 *
 * @ViewsArea("commerce_pvt_table_summary")
 */
class TableSummary extends AreaPluginBase {
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

    $options['strip_trailing_zeroes'] = ['default' => 1];
    $options['currency_display'] = ['default' => 'symbol'];

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
    $this->options['currency_display'] = $options['currency_display'];
    $this->options['strip_trailing_zeroes'] = $options['strip_trailing_zeroes'];
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

      $cart = NULL;
      $count_products = 0;
      $total_summ = 0;
      $currency_code = NULL;
      $options = $this->getFormatterOptions();
      $markup = '';
      $default_variation = $current_product->getDefaultVariation();
      if ($default_variation) {
        $order_type = $this->getOrderType($default_variation);
        $currency_code = $default_variation->getPrice()->getCurrencyCode();

        /** @var \Drupal\commerce_order\Entity\OrderInterface $cart */
        if ($cart = $this->cartProvider->getCart($order_type, $this->currentStore)) {

          foreach ($cart->getItems() as $order_item) {
            $price = $order_item->getTotalPrice();
            if ($current_product->id() == $order_item->getPurchasedEntity()->getProduct()->id()) {
              $count_products += (float) $order_item->getQuantity();
              $total_summ += (float) $price->getNumber();
            }
          }
        }

        $markup = new FormattableMarkup('<span class="products-count">@label</span><br> <span class="label value">@value</span>', [
          '@label' => $this->t('@total products', ['@total' => $count_products]),
          '@value' => $this->currencyFormatter->format($total_summ, $currency_code, $options),
        ]);

        // Invoke hook_commerce_inline_form_alter().
        $context = [
          'count_products' => $count_products,
          'total_summ' => $total_summ,
          'currency_code' => $currency_code,
          'formatter_options' => $options,
        ];
        $this->moduleHandler->alter('commerce_pvt_view_area_table_summary_markup', $markup, $context);
        $this->themeManager->alter('commerce_pvt_view_area_table_summary_markup', $markup, $context);
      }

      $form['#attached']['library'][] = 'commerce_order/total_summary';
      $form['footer'] = [
        '#type' => 'container',
        '#weight' => 100,
      ];

      $form['footer']['summary'] = [
        '#type' => 'item',
        '#markup' => $markup,
        '#prefix' => '<div class="order-total-line">',
        '#suffix' => '</div>',
      ];

      if (isset($form['actions'])) {
        $form['actions']['#weight'] = 200;
      }
    }
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
