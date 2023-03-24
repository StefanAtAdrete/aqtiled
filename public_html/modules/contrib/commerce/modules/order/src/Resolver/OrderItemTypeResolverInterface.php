<?php

namespace Drupal\commerce_order\Resolver;

use Drupal\commerce\PurchasableEntityInterface;

/**
 * Defines the interface for order type resolvers.
 */
interface OrderItemTypeResolverInterface {

  /**
   * Resolves the order item type.
   *
   * @param \Drupal\commerce\PurchasableEntityInterface $entity
   *   The entity being used as Purchasable.
   *
   * @return string|null
   *   The order type ID, if resolved. Otherwise NULL, indicating that the
   *   next resolver in the chain should be called.
   */
  public function resolve(PurchasableEntityInterface $entity);

}
