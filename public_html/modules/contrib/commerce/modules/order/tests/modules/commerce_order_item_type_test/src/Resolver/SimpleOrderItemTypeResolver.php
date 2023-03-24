<?php

namespace Drupal\commerce_order_item_type_test\Resolver;

use Drupal\commerce_order\Resolver\DefaultOrderItemTypeResolver;
use Drupal\commerce\PurchasableEntityInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;

/**
 * Creates the Simple resolver for Order Item Type returning the type id.
 *
 * @package Drupal\commerce_order_item_type_test\Resolver
 */
class SimpleOrderItemTypeResolver extends DefaultOrderItemTypeResolver {

  /**
   * The Order item type storage.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $orderItemTypeStorage;

  /**
   * Constructs a new DefaultOrderTypeResolver object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->orderItemTypeStorage = $entity_type_manager->getStorage('commerce_order_item_type');
  }

  /**
   * Resolves the order item type based on user roles.
   *
   * @param \Drupal\commerce\PurchasableEntityInterface $entity
   *   the Entity being purchased.
   *
   * @return string|null
   *   the Order Item Type machine name or NULL.
   */
  public function resolve(PurchasableEntityInterface $entity) {
    if ($order_item_type = $this->orderItemTypeStorage->load('simple')) {
      return $order_item_type->id();
    }

    return parent::resolve($entity);
  }

}
