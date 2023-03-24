<?php

namespace Drupal\commerce_pvt\Plugin\Block;

use Drupal\commerce_pvt\Traits\CommercePVTCommonTrait;
use Drupal\Component\Render\FormattableMarkup;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Cache\Cache;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;

/**
 * Defines a generic custom block type.
 *
 * @Block(
 *  id = "pvt_table_summary_block",
 *  admin_label = @Translation("Commerce PVT summary"),
 *  category = @Translation("Commerce PVT"),
 * )
 */
class PvtTableSummaryBlock extends BlockBase implements ContainerFactoryPluginInterface {

  use CommercePVTCommonTrait;

  /**
   * Commerce PVT summary block machine name.
   *
   * @var string
   */
  public static $pvtBlockMachineName = 'commercepvtsummary';

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'currency_display' => 'symbol',
      'minimum_fraction_digits' => 0,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {

    $form['currency_display'] = [
      '#type' => 'select',
      '#title' => $this->t('Subtotal currency display'),
      '#options' => [
        'symbol' => $this->t('Symbol (e.g. "$")'),
        'code' => $this->t('Currency code (e.g. "USD")'),
        'none' => $this->t('None'),
      ],
      '#default_value' => $this->configuration['currency_display'],
    ];

    $form['minimum_fraction_digits'] = [
      '#type' => 'select',
      '#options' => [
        0 => $this->t('None'),
        1 => $this->t('1'),
        2 => $this->t('2'),
      ],
      '#title' => $this->t('Minimum fraction digits'),
      '#default_value' => (int) $this->configuration['minimum_fraction_digits'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['currency_display'] = $form_state->getValue('currency_display');
    $this->configuration['minimum_fraction_digits'] = (int) $form_state->getValue('minimum_fraction_digits');
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = [];
    $build['#cache']['max-age'] = 0;
    $build['#cache']['contexts'] = ['user', 'session', 'cart'];

    /** @var \Drupal\commerce_product\Entity\Product $current_product */
    $current_product = $this->routeMatch->getParameter('commerce_product');
    if ($current_product) {

      $cart = NULL;
      $count_products = 0;
      $total_sum = 0;
      $currency_code = NULL;

      $options = [
        'currency_display' => $this->configuration['currency_display'],
        'minimum_fraction_digits' => $this->configuration['minimum_fraction_digits'],
      ];

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
              $total_sum += (float) $price->getNumber();
            }
          }
        }

        $markup = new FormattableMarkup('<span class="products-count">@label</span><br> <span class="label value">@value</span>', [
          '@label' => $this->t('@total products', ['@total' => $count_products]),
          '@value' => $this->currencyFormatter->format($total_sum, $currency_code, $options),
        ]);

        // Invoke hook_commerce_inline_form_alter().
        $context = [
          'count_products' => $count_products,
          'total_sum' => $total_sum,
          'currency_code' => $currency_code,
          'formatter_options' => $options,
        ];
        $this->moduleHandler->alter('commerce_pvt_table_summary_block_markup', $markup, $context);
        $this->themeManager->alter('commerce_pvt_table_summary_block_markup', $markup, $context);
      }

      $build['#attached']['library'][] = 'commerce_order/total_summary';
      $build['summary'] = [
        '#type' => 'item',
        '#markup' => $markup,
        '#prefix' => '<div class="order-total-line block-pvt-table-summary">',
        '#suffix' => '</div>',
      ];
    }

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    return Cache::mergeContexts(parent::getCacheContexts(), ['cart']);
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
    $cache_tags = parent::getCacheTags();
    $cart_cache_tags = [];

    /** @var \Drupal\commerce_order\Entity\OrderInterface[] $carts */
    $carts = $this->cartProvider->getCarts();
    foreach ($carts as $cart) {
      // Add tags for all carts regardless items or cart flag.
      $cart_cache_tags = Cache::mergeTags($cart_cache_tags, $cart->getCacheTags());
    }
    return Cache::mergeTags($cache_tags, $cart_cache_tags);
  }

}
