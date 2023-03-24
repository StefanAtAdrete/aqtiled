<?php

namespace Drupal\commerce_order\Resolver;

use Drupal\commerce\PurchasableEntityInterface;

/**
 * Returns the order item type, based on purchasable entity configuration.
 */
class DefaultOrderItemTypeResolver implements OrderItemTypeResolverInterface {

  /**
   * {@inheritdoc}
   */
  public function resolve(PurchasableEntityInterface $entity) {
    return $entity->getOrderItemTypeId();
  }

}
