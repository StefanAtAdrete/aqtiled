<?php

namespace Drupal\custom_checkout_quotation\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for Custom Checkout Quotation routes.
 */
class CustomCheckoutQuotationController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
