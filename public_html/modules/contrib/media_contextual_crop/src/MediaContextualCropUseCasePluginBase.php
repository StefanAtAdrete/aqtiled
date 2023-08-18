<?php

declare(strict_types=1);

namespace Drupal\media_contextual_crop;

use Drupal\Component\Plugin\PluginBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\image\Plugin\Field\FieldType\ImageItem;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Base class for media_contextual_crop_use_case plugins.
 */
abstract class MediaContextualCropUseCasePluginBase extends PluginBase implements MediaContextualCropUseCaseInterface, ContainerFactoryPluginInterface {

  /**
   * Media_contextual_crop Plugin Manager.
   *
   * @var \Drupal\media_contextual_crop\MediaContextualCropPluginManager
   */
  protected $mccPluginManager;

  /**
   * Media_contextual_crop Main service.
   *
   * @var \Drupal\media_contextual_crop\MediaContextualCropService
   */
  protected $mccService;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration,
                                    $plugin_id,
                                    $plugin_definition,
                              MediaContextualCropPluginManager $mccPluginManager,
                              MediaContextualCropService $mccService
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->mccService = $mccService;
    $this->mccPluginManager = $mccPluginManager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('plugin.manager.media_contextual_crop'),
      $container->get('media_contextual_crop.service')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function label() {
    // Cast the label to a string since it is a TranslatableMarkup object.
    return (string) $this->pluginDefinition['label'];
  }

  /**
   * {@inheritdoc}
   */
  public function isCompetent(ImageItem $item) {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getCropSettings(ImageItem $item) {
    // Provide 1.2 to 1.3 soft compatibility.
    \Drupal::logger('MCC compatibility')->warning('Please update your Media Contextual Crop Use-Cases Modules.');

    return NULL;
  }

}
