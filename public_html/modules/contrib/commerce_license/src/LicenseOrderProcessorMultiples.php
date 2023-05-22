<?php

namespace Drupal\commerce_license;

use Drupal\commerce_order\Entity\OrderInterface;
use Drupal\commerce_order\OrderProcessorInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Messenger\MessengerTrait;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Order processor that ensures only 1 of each license may be added to the cart.
 *
 * This is an order processor rather than an availability checker, as
 * \Drupal\commerce_order\AvailabilityOrderProcessor::check() removes the
 * entire order item if availability fails, whereas we only want to keep the
 * quantity at 1.
 *
 * @todo Figure out if the cart event subscriber covers all cases already.
 *
 * @see \Drupal\commerce_license\EventSubscriber\LicenseMultiplesCartEventSubscriber
 */
class LicenseOrderProcessorMultiples implements OrderProcessorInterface {

  use MessengerTrait;
  use StringTranslationTrait;

  /**
   * Constructs a new LicenseOrderProcessorMultiples object.
   *
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   *   The messenger.
   */
  public function __construct(MessengerInterface $messenger) {
    $this->setMessenger($messenger);
  }

  /**
   * {@inheritdoc}
   */
  public function process(OrderInterface $order) {
    // Collect licenses by types and configurations. Granting the same license
    // type with the same configuration should be avoided.
    /** @var \Drupal\commerce_product\Entity\ProductVariationInterface[] $purchased_entities_by_license_hash */
    $purchased_entities_by_license_hash = [];

    foreach ($order->getItems() as $order_item) {
      // Skip order items that do not have a license reference field.
      if (!$order_item->hasField('license')) {
        continue;
      }

      $purchased_entity = $order_item->getPurchasedEntity();

      if ($purchased_entity && $purchased_entity->hasField('license_type') && !$purchased_entity->get('license_type')->isEmpty()) {
        // Force the quantity to 1.
        if ($order_item->getQuantity() > 1) {
          $order_item->setQuantity(1);
          $this->messenger()->addWarning($this->t('You may only have a single %product-label in your cart.', [
            '%product-label' => $purchased_entity->label(),
          ]));
        }

        /** @var \Drupal\commerce\Plugin\Field\FieldType\PluginItem $license_type */
        $license_type = $purchased_entity->get('license_type')->first();
        $license_hash = \hash('sha256', \serialize($license_type->getValue()));

        // Check if this $purchased_entity is already in the cart.
        if (in_array($purchased_entity, $purchased_entities_by_license_hash)) {
          $order->removeItem($order_item);
          // Remove success message from user facing messages.
          $this->messenger()->deleteByType($this->messenger()::TYPE_STATUS);
          $this->messenger()->addError($this->t('You may only have one of %product-label in your cart.', [
            '%product-label' => $purchased_entity->label(),
          ]));
        }
        // If another $order_item resolves to the same license.
        elseif (array_key_exists($license_hash, $purchased_entities_by_license_hash)) {
          $order->removeItem($order_item);
          // Remove success message from user facing messages.
          $this->messenger()->deleteByType($this->messenger()::TYPE_STATUS);
          $this->messenger()->addError($this->t('Removed %removed-product-label as %product-label in your cart already grants the same license.', [
            '%product-label' => $purchased_entities_by_license_hash[$license_hash]->label(),
            '%removed-product-label' => $purchased_entity->label(),
          ]));
        }
        // Add this to the array to check against.
        else {
          $purchased_entities_by_license_hash[$license_hash] = $purchased_entity;
        }
      }
    }
  }

}
