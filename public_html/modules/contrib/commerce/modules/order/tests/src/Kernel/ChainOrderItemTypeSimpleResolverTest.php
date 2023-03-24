<?php

namespace Drupal\Tests\commerce_order\Kernel;

use Drupal\commerce_order\Entity\OrderItemType;
use Drupal\commerce_product\Entity\ProductVariationType;
use Drupal\Tests\commerce\Kernel\CommerceKernelTestBase;
use Drupal\commerce_product\Entity\ProductVariation;

/**
 * Tests the chain order type resolver.
 *
 * @group commerce
 */
class ChainOrderItemTypeSimpleResolverTest extends CommerceKernelTestBase {

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = [
    'entity_reference_revisions',
    'profile',
    'state_machine',
    'commerce_product',
    'commerce_order',
    'commerce_order_item_type_test',
  ];

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();

    $this->installEntitySchema('commerce_product');
    $this->installEntitySchema('commerce_product_variation');
    $this->installEntitySchema('commerce_order_item');

    OrderItemType::create([
      'id' => 'default',
      'label' => 'Default',
      'orderType' => 'default',
    ])->save();

    OrderItemType::create([
      'id' => 'simple',
      'label' => 'Simple',
      'orderType' => 'default',
    ])->save();

    ProductVariationType::create([
      'id' => 'default',
      'label' => 'Default',
      'orderItemType' => 'default',
    ])->save();
  }

  /**
   * Tests resolving the order item type.
   */
  public function testOrderItemTypeSimpleResolution() {
    /** @var \Drupal\commerce_product\Entity\ProductVariation $product_variation */
    $product_variation = ProductVariation::create([
      'type' => 'default',
    ]);
    $product_variation->save();

    /** @var \Drupal\commerce_order\Resolver\ChainOrderItemTypeResolverInterface $resolver */
    $resolver = $this->container->get('commerce_order.chain_order_item_type_resolver');
    $order_item_type = $resolver->resolve($product_variation);

    $this->assertEquals('simple', $order_item_type);
  }

}
