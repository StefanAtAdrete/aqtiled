<?php

namespace Drupal\Tests\commerce_order\Functional;

use Drupal\commerce_order\Entity\OrderItemType;
use Drupal\user\Entity\Role;

/**
 * Functional test that checks order item type returned by new resolvers based on user's roles
 *
 * @group commerce
 */
class ChainOrderItemTypeUserRoleBasedResolverTest extends OrderBrowserTestBase {

  /**
   * A test user without custom_role.
   *
   * @var \Drupal\user\UserInterface
   */
  protected $userA;

  /**
   * A test user with custom_role.
   *
   * @var \Drupal\user\UserInterface
   */
  protected $userB;

  /**
   * OrderItem storage interface.
   *
   * @var \Drupal\commerce_order\OrderItemStorageInterface
   */
  protected $orderItemStorage;

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = [
    'commerce_product',
    'commerce_order',
    'commerce_order_item_type_custom_test',
  ];

  /**
   * {@inheritdoc}
   */
  public function setUp(): void {
    parent::setUp();

    $this->orderItemStorage = \Drupal::entityTypeManager()
      ->getStorage('commerce_order_item');

    $this->userA = $this->createUser();
    $this->userA->save();

    Role::create([
      'id' => 'custom_role',
      'label' => 'Custom role',
    ])->save();

    $this->userB = $this->createUser();
    $this->userB->addRole('custom_role');
    $this->userB->save();

    OrderItemType::create([
      'id' => 'custom',
      'label' => 'Custom',
      'orderType' => 'default',
    ])->save();
  }

  /**
   * Tests userA creating an order item type is 'default' vs userB is 'custom'.
   */
  public function testOrderItemTypes() {
    $this->drupalLogin($this->userA);

    $order_item = $this->orderItemStorage->createFromPurchasableEntity($this->variation);
    $this->assertEquals('default', $order_item->bundle());

    $this->drupalLogin($this->userB);
    $order_item = $this->orderItemStorage->createFromPurchasableEntity($this->variation);
    $this->assertEquals('custom', $order_item->bundle());
  }

}
