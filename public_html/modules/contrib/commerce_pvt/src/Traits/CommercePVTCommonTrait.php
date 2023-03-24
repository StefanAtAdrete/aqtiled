<?php

namespace Drupal\commerce_pvt\Traits;

use Drupal\commerce\PurchasableEntityInterface;
use Drupal\commerce_cart\CartManagerInterface;
use Drupal\commerce_cart\CartProviderInterface;
use Drupal\commerce_order\Entity\OrderInterface;
use Drupal\commerce_order\Resolver\ChainOrderTypeResolverInterface;
use Drupal\commerce_order\Resolver\ChainOrderItemTypeResolverInterface;
use Drupal\commerce_price\CurrencyFormatter;
use Drupal\commerce_store\CurrentStoreInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Theme\ThemeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Trait CommercePVTCommonTrait.
 *
 * @package Drupal\commerce_pvt\Traits
 */
trait CommercePVTCommonTrait {

  /**
   * The Order Type Chain resolver.
   *
   * @var \Drupal\commerce_order\Resolver\ChainOrderTypeResolverInterface
   */
  protected $chainOrderTypeResolver;

  /**
   * The Order Item Type Chain resolver.
   *
   * @var \Drupal\commerce_order\Resolver\ChainOrderItemTypeResolverInterface
   */
  protected $chainOrderItemTypeResolver;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The Cart provider.
   *
   * @var \Drupal\commerce_cart\CartProviderInterface
   */
  protected $cartProvider;

  /**
   * The Current store resolved.
   *
   * @var \Drupal\commerce_store\Entity\StoreInterface
   */
  protected $currentStore;

  /**
   * The currency formatter for this class.
   *
   * @var \Drupal\commerce_price\CurrencyFormatter
   */
  protected $currencyFormatter;

  /**
   * The messenger.
   *
   * @var \Drupal\Core\Messenger\MessengerInterface
   */
  protected $messenger;

  /**
   * The Cart manager plutin.
   *
   * @var \Drupal\commerce_cart\CartManagerInterface
   */
  protected $cartManager;

  /**
   * The current Route match.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  protected $routeMatch;

  /**
   * The Module handler.
   *
   * @var \Drupal\Core\Extension\ModuleHandlerInterface
   */
  protected $moduleHandler;

  /**
   * The Theme manager.
   *
   * @var \Drupal\Core\Theme\ThemeManagerInterface
   */
  protected $themeManager;

  /**
   * Constructs a new EditQuantity object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin ID for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\commerce_order\Resolver\ChainOrderTypeResolverInterface $chain_order_type_resolver
   *   The chain resolver for product order type.
   * @param \Drupal\commerce_order\Resolver\ChainOrderItemTypeResolverInterface $chain_order_item_type_resolver
   *   The chain resolver for product order item type.
   * @param \Drupal\commerce_cart\CartManagerInterface $cart_manager
   *   The cart manager.
   * @param \Drupal\commerce_cart\CartProviderInterface $cart_provider
   *   The cart provider.
   * @param \Drupal\commerce_store\CurrentStoreInterface $current_store
   *   The current store resolver.
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The route match object.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\commerce_price\CurrencyFormatter $currency_formatter
   *   The currency formatter.
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   *   The messenger.
   * @param \Drupal\Core\Extension\ModuleHandlerInterface $module_handler
   *   The Module handler.
   * @param \Drupal\Core\Theme\ThemeManagerInterface $theme_manager
   *   Theme manager.
   */
  public function __construct(array $configuration,
                              $plugin_id,
                              $plugin_definition,
                              ChainOrderTypeResolverInterface $chain_order_type_resolver,
                              ChainOrderItemTypeResolverInterface $chain_order_item_type_resolver,
                              CartManagerInterface $cart_manager,
                              CartProviderInterface $cart_provider,
                              CurrentStoreInterface $current_store,
                              RouteMatchInterface $route_match,
                              EntityTypeManagerInterface $entity_type_manager,
                              CurrencyFormatter $currency_formatter,
                              MessengerInterface $messenger,
                              ModuleHandlerInterface $module_handler,
                              ThemeManagerInterface $theme_manager
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);

    $this->chainOrderTypeResolver = $chain_order_type_resolver;
    $this->chainOrderItemTypeResolver = $chain_order_item_type_resolver;
    $this->cartManager = $cart_manager;
    $this->cartProvider = $cart_provider;
    $this->currentStore = $current_store->getStore();
    $this->routeMatch = $route_match;
    $this->entityTypeManager = $entity_type_manager;
    $this->currencyFormatter = $currency_formatter;
    $this->messenger = $messenger;
    $this->moduleHandler = $module_handler;
    $this->themeManager = $theme_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('commerce_order.chain_order_type_resolver'),
      $container->get('commerce_order.chain_order_item_type_resolver'),
      $container->get('commerce_cart.cart_manager'),
      $container->get('commerce_cart.cart_provider'),
      $container->get('commerce_store.current_store'),
      $container->get('current_route_match'),
      $container->get('entity_type.manager'),
      $container->get('commerce_price.currency_formatter'),
      $container->get('messenger'),
      $container->get('module_handler'),
      $container->get('theme.manager')
    );
  }

  /**
   * Gets the order Item from cart based on reference on variation's id.
   *
   * @param \Drupal\commerce_order\Entity\OrderInterface $cart
   *   Current cart.
   * @param int $variation_id
   *   ProductVariation id.
   *
   * @return \Drupal\commerce_order\Entity\OrderItemInterface|null
   *   Searched Order item.
   */
  private function getOrderItemFromCart(OrderInterface $cart, $variation_id) {
    if (!$cart) {
      return NULL;
    }
    foreach ($cart->getItems() as $orderItem) {
      if ($orderItem->getPurchasedEntityId() == $variation_id) {
        return $orderItem;
      }
    }
    return NULL;
  }

  /**
   * Gets the Order Type for which we could take action.
   *
   * @param \Drupal\commerce\PurchasableEntityInterface $purchasable_entity
   *   Product variation instance.
   *
   * @return string
   *   the type of Order Item.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  private function getOrderType(PurchasableEntityInterface $purchasable_entity) {
    $order_item_type = $this->chainOrderItemTypeResolver->resolve($purchasable_entity);
    /** @var \Drupal\commerce_order\Entity\OrderItemInterface $order_item */
    $order_item = $this->entityTypeManager->getStorage('commerce_order_item')
      ->create(['type' => $order_item_type]);
    return $this->chainOrderTypeResolver->resolve($order_item);
  }

  /**
   * Static Ajax callback for updating the form.
   *
   * @param array $form
   *   Form being build.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Form state being submitted.
   *
   * @return \Drupal\Core\Ajax\AjaxResponse
   *   The response.
   *
   * @throws \Exception
   */
  public static function updatePageElements(array &$form, FormStateInterface $form_state) {
    /** @var \Drupal\commerce_pvt\RefreshPageElementsHelper $refresher */
    $refresher = \Drupal::service('commerce_pvt.refresh_page_elements_helper');
    return $refresher->updatePageElements($form)->getResponse();
  }

}
