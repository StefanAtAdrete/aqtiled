<?php

/**
 * @file
 * Hooks provided by the Commerce PVT module.
 */

/**
 * @addtogroup hooks
 * @{
 */
function hook_commerce_pvt_view_area_table_summary_markup_alter(&$markup, $data) {
  $markup = new \Drupal\Component\Render\FormattableMarkup('Example alteration with @count_products and @total_summ and @currency_code and @formatter_options', [
    '@count_products' => $data['count_products'],
    '@total_summ' => $data['total_summ'],
    '@currency_code' => $data['currency_code'],
    '@formatter_options' => $data['options'],
  ]);
}

/**
 * @} End of "addtogroup hooks".
 */
