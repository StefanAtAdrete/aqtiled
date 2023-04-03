<?php

namespace Drupal\media_thumbnails_video\Plugin\MediaThumbnail;

use Drupal\Core\Entity\EntityStorageException;
use Drupal\file\Entity\File;
use Drupal\media_thumbnails\Plugin\MediaThumbnailBase;
use FFMpeg\Coordinate\TimeCode;
use FFMpeg\Exception\ExecutableNotFoundException;
use FFMpeg\FFMpeg;
use function imagepng;

/**
 * Media thumbnail plugin for videos.
 *
 * @MediaThumbnail(
 *   id = "media_thumbnail_video",
 *   label = @Translation("Media Thumbnail Video"),
 *   mime = {
 *     "video/mp4",
 *   }
 * )
 */
class MediaThumbnailVideo extends MediaThumbnailBase {

  /**
   * {@inheritdoc}
   */
  public function createThumbnail($sourceUri) {
    $config = $this->config->getEditable('media_thumbnails_video.settings');

    $path = $this->fileSystem->realpath($sourceUri);
    try {
      // Create ffmpeg container.
      $ffmpeg = FFMpeg::create([
        'ffmpeg.binaries' => $config->get('ffmpeg'),
        'ffprobe.binaries' => $config->get('ffprobe'),
        'timeout' => $config->get('timeout'),
        'ffmpeg.threads' => $config->get('threads'),
      ]);

      try {
        // Try open file form real path.
        $video = $ffmpeg->open($path);
        $thumbnail_path = $path . '.png';
        $width = $this->configuration['width'];

        $video->frame(TimeCode::fromSeconds(1))->save($thumbnail_path);

        if (!empty($width)) {
          $image = imagecreatefrompng($thumbnail_path);
          $image = imagescale($image, $width);
          imagepng($image, $thumbnail_path);
        }

        // Create a managed file object.
        $file = File::create([
          'uri' => $sourceUri . '.png',
          'status' => 1,
        ]);

        try {
          $file->save();
          return $file;
        }
        catch (EntityStorageException $e) {
          $this->logger->warning(t('Could not create thumbnail file entity.'));
          return NULL;
        }
      }
      catch (\Exception $e) {
        $this->logger->warning($e->getMessage());
        return NULL;
      }
    }
    catch (ExecutableNotFoundException $e) {
      $this->logger->warning($e->getMessage());
      return NULL;
    }
  }

}
