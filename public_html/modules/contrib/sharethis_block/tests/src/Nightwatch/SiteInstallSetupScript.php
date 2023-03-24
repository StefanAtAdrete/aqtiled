<?php

namespace Drupal\sharethis_block;

use Drupal\TestSite\TestSetupInterface;

/**
 * Setup file used by responsive_menu module Nightwatch tests.
 */
class SiteInstallSetupScript implements TestSetupInterface {

  /**
   * {@inheritdoc}
   */
  public function setup() {
    \Drupal::service('module_installer')->install(['sharethis_block_test']);
  }

}
