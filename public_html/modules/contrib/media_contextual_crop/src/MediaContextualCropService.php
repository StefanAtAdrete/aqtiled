<?php

declare(strict_types=1);

namespace Drupal\media_contextual_crop;

use Drupal\Component\Utility\Html;
use Drupal\Core\Entity\EntityRepositoryInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\File\Exception\FileException;
use Drupal\Core\File\FileSystem;
use Drupal\Core\File\FileSystemInterface;
use Drupal\Core\StreamWrapper\StreamWrapperInterface;
use Drupal\Core\StreamWrapper\StreamWrapperManagerInterface;

/**
 * Service description.
 */
class MediaContextualCropService {

  /**
   * The plugin.manager.media_contextual_crop service.
   *
   * @var \Drupal\media_contextual_crop\MediaContextualCropPluginManager
   */
  protected $contextualCropManager;

  /**
   * The FileSystem service.
   *
   * @var \Drupal\Core\File\FileSystem
   */
  protected $fileSystem;

  /**
   * The Stream Wrapper Service.
   *
   * @var \Drupal\Core\StreamWrapper\StreamWrapperManagerInterface
   */
  protected $streamWrapperManager;

  /**
   * The Get EntityTypeManagerInterface.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The entity repository.
   *
   * @var \Drupal\Core\Entity\EntityRepositoryInterface
   */
  protected $entityRepository;

  /**
   * Constructs a ContextualCropService object.
   *
   * @param \Drupal\media_contextual_crop\MediaContextualCropPluginManager $contextualCrop_manager
   *   The plugin.manager.media_contextual_crop service.
   * @param \Drupal\Core\File\FileSystem $file_system
   *   The FileSystem service.
   * @param \Drupal\Core\StreamWrapper\StreamWrapperManagerInterface $streamWrapperManager
   *   The Stream Wrapper Service.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   Get entity_type_manager.
   * @param \Drupal\Core\Entity\EntityRepositoryInterface $entity_repository
   *   The entity repository.
   */
  public function __construct(MediaContextualCropPluginManager $contextualCrop_manager, FileSystem $file_system, StreamWrapperManagerInterface $streamWrapperManager, EntityTypeManagerInterface $entity_type_manager, EntityRepositoryInterface $entity_repository,) {
    $this->contextualCropManager = $contextualCrop_manager;
    $this->fileSystem = $file_system;
    $this->streamWrapperManager = $streamWrapperManager;
    $this->entityTypeManager = $entity_type_manager;
    $this->entityRepository = $entity_repository;
  }

  /**
   * Undocumented function.
   *
   * @param array $old_image
   *   An image render array containing (at least):
   *   - #uri: the image uri
   *   - #width: the image width
   *   - #height: the image heigh.
   * @param array $settings
   *   The render array use for cropping with :
   *   - [Crop settings] (from the crop widget)
   *   - context : the media field identifier context
   *   - image_style : image style needed
   *   - base_crop_folder : folder to store cropped image.
   *
   * @return string
   *   The URI of cropped image.
   */
  public function prepareCropImage(array $old_image, array $settings) {

    $media_contextual_crop_folder = $settings['base_crop_folder'] ?? NULL;

    // Copy source image.
    $new_uri = $this->multiCropTransformImageUri($old_image['#uri'], $settings, $media_contextual_crop_folder);

    // Load dedicated multi crop plugin.
    $crop_type = $settings['plugin_id'];
    $plugin = $this->contextualCropManager->createInstance($crop_type);

    // Create custom crop.
    $crop_created = $plugin->saveCrop(
      $settings['crop_setting'],
      $settings['image_style'],
      $old_image['#uri'],
      $new_uri,
      (int) $old_image['#width'],
      (int) $old_image['#height'],
    );

    return ($crop_created === TRUE) ? $new_uri : $old_image['#uri'];

  }

  /**
   * Copy source image to dedicated place.
   *
   * @param string $image_uri
   *   Source image URI.
   * @param array $crop_data
   *   Crop elements.
   * @param string $folder_name
   *   Name of media_contextual_crop_folder in public paths.
   *
   * @return string
   *   New image source.
   */
  private function multiCropTransformImageUri($image_uri, array $crop_data, $folder_name = 'media_contextual_crop') {

    $context = Html::cleanCssIdentifier($crop_data['context']);

    // Prepare URI fragments.
    $scheme = $this->streamWrapperManager->getScheme($image_uri);
    $target = $this->streamWrapperManager->getTarget($image_uri);
    $path_fragment = explode('/', $target);
    $file_name = array_pop($path_fragment);

    // Transform $scheme://$target
    // to $scheme://[folder_name]/[context]/$scheme/$target.
    $base_directory_path = $scheme . '://' . $folder_name;
    $context_folder_path = $base_directory_path . '/' . $context;
    $new_uri = $context_folder_path . '/' . $target;

    // Prepare directory tree.
    $this->fileSystem->prepareDirectory($base_directory_path, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);
    $this->fileSystem->prepareDirectory($context_folder_path, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);
    $directory = $context_folder_path;
    foreach ($path_fragment as $fragment) {
      $directory .= '/' . $fragment;
      $this->fileSystem->prepareDirectory($directory, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS);

    }

    // If contextual image exist, delete it.
    if (!$this->fileSystem->getDestinationFilename($new_uri, FileSystemInterface::EXISTS_ERROR)) {
      $this->fileSystem->unlink($new_uri);
    }

    // Create contextual image.
    $this->fileSystem->copy($image_uri, $new_uri, FileSystemInterface::EXISTS_REPLACE);

    // Detect if the style change extension.
    $image_style = $crop_data['image_style'];

    $styles = $this->entityTypeManager->getStorage('image_style')->load($image_style);
    $effects = $styles->getEffects();
    $extension = '';
    foreach ($effects as $effect) {
      if ($effect->getPluginId() == 'image_convert') {
        $config = $effect->getConfiguration();
        $extension = $config['data']['extension'];
      }
    }

    // Calculate possible derivative.
    if ($extension == '') {
      $derivative = $scheme . '://styles/' . $image_style . '/' . $scheme . '/' . $folder_name . '/' . $context . '/' . $target;
    }
    else {
      $convert_target_path = str_replace($file_name, '', $target);
      $derivative_path = $scheme . '://styles/' . $image_style . '/' . $scheme . '/' . $folder_name . '/' . $context . '/' . $convert_target_path;
      $info = pathinfo($file_name);
      $new_file = $info['filename'] . '.' . $extension;
      $derivative = $derivative_path . $new_file;
    }

    $real_path = $this->fileSystem->realpath($derivative);
    // If derivativ existe remove file if exist.
    if ($real_path != FALSE  && file_exists($real_path)) {
      unlink($this->fileSystem->realpath($derivative));
    }

    // Return contextual image URI.
    return $new_uri;
  }

  /**
   * Flush contextual images repository.
   *
   * @param string $folder_name
   *   Contextual Folder.
   */
  public function flushCopies(string $folder_name) {
    $wrappers = $this->streamWrapperManager->getWrappers(StreamWrapperInterface::WRITE_VISIBLE);
    foreach ($wrappers as $wrapper => $wrapper_data) {
      // Manage new file tree.
      if (file_exists($directory = $wrapper . '://' . $folder_name)) {
        try {
          $this->fileSystem->deleteRecursive($directory);
        }
        catch (FileException $e) {
          // Ignore failed deletes.
        }
      }
    }
  }

  /**
   * Check if style use a crop manage by MCC.
   *
   * @param string $style_name
   *   Image style name.
   *
   * @return bool
   *   Check if style use a crop manage by MCC.
   */
  public function styleUseMultiCrop($style_name) {

    static $styles = [];

    if (!isset($styles[$style_name])) {
      $image_style = $this->entityRepository->loadEntityByConfigTarget('image_style', $style_name);
      $effects = $image_style->getEffects()->getConfiguration();
      $plugins = $this->contextualCropManager->getDefinitions();
      // Find crops used in image style.
      $styles[$style_name] = FALSE;
      foreach ($effects as $effect) {
        foreach ($plugins as $plugin) {
          if (in_array($effect['id'], $plugin['image_style_effect'])) {
            $styles[$style_name] = TRUE;
          }
        }
      }
    }

    return $styles[$style_name];

  }

}
