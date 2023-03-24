<?php

namespace Drupal\commerce_order_item_type_custom_test\Resolver;

use Drupal\commerce_order\Resolver\DefaultOrderItemTypeResolver;
use Drupal\commerce\PurchasableEntityInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;

/**
 * Creates the custom resolver for Order Item Type based on user's roles array.
 *
 * @package Drupal\commerce_order_item_type_custom_test\Resolver
 */
class CustomRoleBasedOrderItemTypeResolver extends DefaultOrderItemTypeResolver {

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
    $user = \Drupal::currentUser();
    $account = $user->getAccount();

    if (in_array('custom_role', $account->getRoles())) {
      if ($order_item_type = $this->orderItemTypeStorage->load('custom')) {
        return $order_item_type->id();
      }
    }

    return parent::resolve($entity);
  }

}
