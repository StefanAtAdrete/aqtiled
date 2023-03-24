<?php

namespace Drupal\sharethis_block\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'ShareThis' block which just loads javascript for the widget.
 *
 * @Block(
 *  id = "sharethis",
 *  admin_label = @Translation("sharethis"),
 * )
 */
class ShareThis extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * A config object for the sharethis block configuration.
   *
   * @var \Drupal\Core\Config\Config
   */
  protected $config;

  public function __construct(array $configuration, $plugin_id, $plugin_definition, ConfigFactoryInterface $config_factory) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->config = $config_factory->get('sharethis_block.configuration');
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('config.factory')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    if ($this->config->get('sharethis_inline')) {
      $build['buttons'] = [
        '#markup' => '<div class="sharethis-inline-share-buttons"></div>',
      ];
    }
    $build['#attached']['library'][] = 'sharethis_block/sharethis.core';
    return $build;
  }

}
