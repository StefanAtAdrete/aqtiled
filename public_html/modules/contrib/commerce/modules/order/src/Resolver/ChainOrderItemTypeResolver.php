<?php

namespace Drupal\commerce_order\Resolver;

use Drupal\commerce\PurchasableEntityInterface;

/**
 * Default implementation of the chain order item type resolver.
 */
class ChainOrderItemTypeResolver implements ChainOrderItemTypeResolverInterface {

  /**
   * The resolvers.
   *
   * @var \Drupal\commerce_order\Resolver\OrderItemTypeResolverInterface[]
   */
  protected $resolvers = [];

  /**
   * Constructs a new ChainOrderItemTypeResolver object.
   *
   * @param \Drupal\commerce_order\Resolver\OrderItemTypeResolverInterface[] $resolvers
   *   The resolvers.
   */
  public function __construct(array $resolvers = []) {
    $this->resolvers = $resolvers;
  }

  /**
   * {@inheritdoc}
   */
  public function addResolver(OrderItemTypeResolverInterface $resolver) {
    $this->resolvers[] = $resolver;
  }

  /**
   * {@inheritdoc}
   */
  public function getResolvers() {
    return $this->resolvers;
  }

  /**
   * {@inheritdoc}
   */
  public function resolve(PurchasableEntityInterface $entity) {
    foreach ($this->resolvers as $resolver) {
      $result = $resolver->resolve($entity);
      if ($result) {
        return $result;
      }
    }
  }

}
