<?php

namespace Drupal\commerce_order\Resolver;

/**
 * Runs resolvers one by one until one of them returns the order item type.
 *
 * Each resolver in the chain can be another chain, which is why this interface
 * extends the order item type resolver one.
 */
interface ChainOrderItemTypeResolverInterface extends OrderItemTypeResolverInterface {

  /**
   * Adds a resolver.
   *
   * @param \Drupal\commerce_order\Resolver\OrderItemTypeResolverInterface $resolver
   *   The resolver.
   */
  public function addResolver(OrderItemTypeResolverInterface $resolver);

  /**
   * Gets all added resolvers.
   *
   * @return \Drupal\commerce_order\Resolver\OrderItemTypeResolverInterface[]
   *   The resolvers.
   */
  public function getResolvers();

}
