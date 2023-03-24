<?php

namespace Drupal\commerce_pvt;

use Drupal\Core\Render\RendererInterface;
use Drupal\Core\Security\TrustedCallbackInterface;

/**
 * Provides #lazy_builder callbacks.
 */
class LazyBuilders implements TrustedCallbackInterface {

  /**
   * The renderer service.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * Constructs a new CartLazyBuilders object.
   *
   * @param \Drupal\Core\Render\RendererInterface $renderer
   *   The renderer service.
   */
  public function __construct(RendererInterface $renderer) {
    $this->renderer = $renderer;
  }

  public static function trustedCallbacks() {
    return ['variationTableForProduct'];
  }

  /**
   * Builds the table of variation.
   *
   * @param int $product_id
   *   The id of commerce product being processed.
   *
   * @return array
   *   A renderable array containing the cart form.
   *
   * @throws \Exception
   */
  public function variationTableForProduct($product_id) {
    $view_build_array = views_embed_view('commerce_pvt_form', 'default', $product_id);
    return [
      '#theme' => 'commerce_pvt_contextual_links_wrapper',
      '#content' => [
        '#contextual_links' => [
          'commerce_pvt' => [
            'route_parameters' => ['view' => 'commerce_pvt_form'],
          ],
        ],
        '#markup' => $this->renderer->render($view_build_array),
      ],
    ];
  }

}
