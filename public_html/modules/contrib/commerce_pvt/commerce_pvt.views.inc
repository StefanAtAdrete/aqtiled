<?php

/**
 * @file
 * Contains view hooks module logic.
 */

/**
 * Implements hook_views_data_alter().
 */
function commerce_pvt_views_data_alter(array &$data) {
  if (isset($data['commerce_product_variation'])) {
    $data['commerce_product_variation']['commerce_pvt_variation_edit_quantity'] = [
      'field' => [
        'title' => t('Edit Quantity'),
        'help' => t('Product variation quantity management field'),
        'id' => 'commerce_pvt_variation_edit_quantity',
      ],
    ];

    $data['commerce_product_variation']['commerce_pvt_variation_subtotal'] = [
      'field' => [
        'title' => t('Variation subtotal'),
        'help' => t('Variation subtotal price for given quantity'),
        'id' => 'commerce_pvt_variation_subtotal',
      ],
    ];

    $data['commerce_product_variation']['commerce_pvt_table_summary'] = [
      'title' => t('Commerce PVT table summary'),
      'help' => t('Adds information about subtotal of variations inside cart.'),
      'area' => [
        'id' => 'commerce_pvt_table_summary',
      ],
    ];

    $data['commerce_product_variation']['commerce_pvt_empty_cart_button'] = [
      'title' => t('Empty cart button'),
      'help' => t('Adds a button for emptying the car, on the Product variations table'),
      'area' => [
        'id' => 'commerce_pvt_empty_cart_button',
      ],
    ];

    $data['commerce_product_variation']['commerce_pvt_goto_cart_button'] = [
      'title' => t('GoTo cart button'),
      'help' => t('Adds a button to redirect to cart page.'),
      'area' => [
        'id' => 'commerce_pvt_goto_cart_button',
      ],
    ];
  }
}
