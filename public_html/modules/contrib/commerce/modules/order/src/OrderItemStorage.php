<?php

namespace Drupal\commerce_order;

use Drupal\commerce\CommerceContentEntityStorage;
use Drupal\commerce\PurchasableEntityInterface;
use Drupal\Core\Entity\EntityTypeInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Defines the order item storage.
 */
class OrderItemStorage extends CommerceContentEntityStorage implements OrderItemStorageInterface {

  /**
   * Order Item Type Chain Resolver.
   *
   * @var \Drupal\commerce_order\Resolver\ChainOrderItemTypeResolverInterface
   */
  protected $orderItemTypeResolver;

  /**
   * {@inheritdoc}
   */
  public static function createInstance(ContainerInterface $container, EntityTypeInterface $entity_type) {
    $instance = parent::createInstance($container, $entity_type);
    $instance->orderItemTypeResolver = $container->get('commerce_order.chain_order_item_type_resolver');
    return $instance;
  }

  /**
   * {@inheritdoc}
   */
  public function createFromPurchasableEntity(PurchasableEntityInterface $entity, array $values = []) {
    $values += [
      'type' => $this->orderItemTypeResolver->resolve($entity),
      'title' => $entity->getOrderItemTitle(),
      'purchased_entity' => $entity,
      'unit_price' => $entity->getPrice(),
    ];
    return self::create($values);
  }

}
