<?php

namespace Drupal\commerce_license\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\system\SystemManager;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Form controller for License dashboard form.
 *
 * @ingroup commerce_license
 */
class LicenseDashboardForm extends FormBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The trait manager.
   *
   * @var \Drupal\commerce\EntityTraitManagerInterface
   */
  protected $traitManager;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container): LicenseDashboardForm {
    $instance = parent::create($container);
    $instance->entityTypeManager = $container->get('entity_type.manager');
    $instance->traitManager = $container->get('plugin.manager.commerce_entity_trait');
    return $instance;
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state): array {
    // Get implementations in the .install files as well.
    include_once './core/includes/install.inc';

    $requirements = [];

    // Checkout flow.
    /** @var \Drupal\commerce_checkout\Entity\CheckoutFlowInterface[] $checkout_flows */
    $checkout_flows = $this->entityTypeManager->getStorage('commerce_checkout_flow')->loadMultiple();
    $valid_checkout_flows = [];
    foreach ($checkout_flows as $checkout_flow) {
      $checkout_flow_plugin = $checkout_flow->getPlugin();
      $configuration = $checkout_flow_plugin->getConfiguration();
      $panes = $configuration['panes'] ?? [];
      $login_pane = $panes['login'] ?? [];
      $allow_guest_checkout = $login_pane['allow_guest_checkout'] ?? TRUE;
      if (!$allow_guest_checkout) {
        $valid_checkout_flows[$checkout_flow->id()] = $checkout_flow;
      }
    }
    if (!empty($valid_checkout_flows)) {
      $i = 0;
      foreach ($valid_checkout_flows as $valid_checkout_flow) {
        $requirements['commerce_license_checkout_flow_' . $i++] = [
          'title' => $this->t('Checkout flow'),
          'value' => $this->t('<a href="@url">@label</a>', [
            '@url' => $valid_checkout_flow->toUrl('edit-form')->toString(),
            '@label' => $valid_checkout_flow->label(),
          ]),
          'description' => $this->t('Checkout flow is defined with a login pane setting of <strong>Guest checkout: Not allowed</strong>.'),
          'severity' => SystemManager::REQUIREMENT_OK,
        ];
      }
    }
    else {
      $requirements['commerce_license_checkout_flow'] = [
        'title' => $this->t('Checkout flow'),
        'description' => $this->t('A <a href="@url">checkout flow</a> must be defined with a login pane setting of <strong>Guest checkout: Not allowed</strong>.', [
          '@url' => Url::fromRoute('entity.commerce_checkout_flow.collection')->toString(),
        ]),
        'severity' => SystemManager::REQUIREMENT_ERROR,
      ];
    }

    // Order type.
    /** @var \Drupal\commerce_order\Entity\OrderTypeInterface[] $order_types */
    $order_types = $this->entityTypeManager->getStorage('commerce_order_type')->loadMultiple();
    $valid_order_types = [];
    foreach ($order_types as $order_type) {
      $order_type_checkout_flow_id = $order_type->getThirdPartySetting('commerce_checkout', 'checkout_flow');
      if (array_key_exists($order_type_checkout_flow_id, $valid_checkout_flows)) {
        $valid_order_types[$order_type->id()] = $order_type;
      }
    }
    if (!empty($valid_order_types)) {
      $i = 0;
      foreach ($valid_order_types as $valid_order_type) {
        $order_type_checkout_flow_id = $valid_order_type->getThirdPartySetting('commerce_checkout', 'checkout_flow');
        $order_type_checkout_flow = $valid_checkout_flows[$order_type_checkout_flow_id];
        $requirements['commerce_license_order_type_' . $i++] = [
          'title' => $this->t('Order type'),
          'value' => $this->t('<a href="@url">@label</a><br/>Checkout flow: @checkout_flow', [
            '@url' => $valid_order_type->toUrl('edit-form')->toString(),
            '@label' => $valid_order_type->label(),
            '@checkout_flow' => $order_type_checkout_flow->label(),
          ]),
          'description' => $this->t('Order type is defined using a valid checkout flow.'),
          'severity' => SystemManager::REQUIREMENT_OK,
        ];
      }
    }
    else {
      $requirements['commerce_license_order_type'] = [
        'title' => $this->t('Order type'),
        'description' => $this->t('An <a href="@url">order type</a> must be defined using a valid checkout flow.', [
          '@url' => Url::fromRoute('entity.commerce_order_type.collection')->toString(),
        ]),
        'severity' => SystemManager::REQUIREMENT_ERROR,
      ];
    }

    /** @var \Drupal\commerce\Plugin\Commerce\EntityTrait\EntityTraitInterface $order_item_type_trait */
    $order_item_type_trait = $this->traitManager->createInstance('commerce_license_order_item_type');
    /** @var \Drupal\commerce_order\Entity\OrderItemTypeInterface[] $order_item_types */
    $order_item_types = $this->entityTypeManager->getStorage('commerce_order_item_type')->loadMultiple();
    $valid_order_item_types = [];
    foreach ($order_item_types as $order_item_type) {
      if ($order_item_type->hasTrait('commerce_license_order_item_type') && array_key_exists($order_item_type->getOrderTypeId(), $valid_order_types)) {
        $valid_order_item_types[$order_item_type->id()] = $order_item_type;
      }
    }
    if (!empty($valid_order_item_types)) {
      $i = 0;
      foreach ($valid_order_item_types as $valid_order_item_type) {
        $order_type = $valid_order_types[$valid_order_item_type->getOrderTypeId()];
        $requirements['commerce_license_order_item_type_' . $i++] = [
          'title' => $this->t('Order item type'),
          'value' => $this->t('<a href="@url">@label</a><br/>Order type: @order_type', [
            '@url' => $valid_order_item_type->toUrl('edit-form')->toString(),
            '@label' => $valid_order_item_type->label(),
            '@order_type' => $order_type->label(),
          ]),
          'description' => $this->t('Order item type is defined using a valid order type and has the trait: <strong>"@trait_label"</strong>.', [
            '@trait_label' => $order_item_type_trait->getLabel(),
          ]),
          'severity' => SystemManager::REQUIREMENT_OK,
        ];
      }
    }
    else {
      $requirements['commerce_license_order_item_type'] = [
        'title' => $this->t('Order item type'),
        'description' => $this->t('An <a href="@url">order item type</a> must be defined with the trait: <strong>"@trait_label"</strong>.<br/>Note: unless you will only be selling licenses, you should create a new order item type specifically for licenses.', [
          '@url' => Url::fromRoute('entity.commerce_order_type.collection')->toString(),
          '@trait_label' => $order_item_type_trait->getLabel(),
        ]),
        'severity' => SystemManager::REQUIREMENT_ERROR,
      ];
    }

    // Product variation type.
    /** @var \Drupal\commerce\Plugin\Commerce\EntityTrait\EntityTraitInterface $product_variation_type_trait */
    $product_variation_type_trait = $this->traitManager->createInstance('commerce_license');
    /** @var \Drupal\commerce_product\Entity\ProductVariationTypeInterface[] $product_variation_types */
    $product_variation_types = $this->entityTypeManager->getStorage('commerce_product_variation_type')->loadMultiple();
    $valid_product_variation_types = [];
    foreach ($product_variation_types as $product_variation_type) {
      if ($product_variation_type->hasTrait('commerce_license') && array_key_exists($product_variation_type->getOrderItemTypeId(), $valid_order_types)) {
        $valid_product_variation_types[$product_variation_type->id()] = $product_variation_type;
      }
    }
    if (!empty($valid_product_variation_types)) {
      $i = 0;
      foreach ($valid_product_variation_types as $valid_product_variation_type) {
        $order_item_type = $valid_order_item_types[$valid_product_variation_type->getOrderItemTypeId()];
        $requirements['commerce_license_product_variation_type_' . $i++] = [
          'title' => $this->t('Product variation type'),
          'value' => $this->t('<a href="@url">@label</a><br/>Order item type: @order_item_type', [
            '@url' => $valid_product_variation_type->toUrl('edit-form')->toString(),
            '@label' => $valid_product_variation_type->label(),
            '@order_item_type' => $order_item_type->label(),
          ]),
          'description' => $this->t('Product variation type is defined using a valid order item type and has the trait: <strong>"@trait_label"</strong>.', [
            '@trait_label' => $product_variation_type_trait->getLabel(),
          ]),
          'severity' => SystemManager::REQUIREMENT_OK,
        ];
      }
    }
    else {
      $requirements['commerce_license_product_variation_type'] = [
        'title' => $this->t('Product variation type'),
        'description' => $this->t('A <a href="@url">product variation type</a> must be defined with the trait: <strong>"@trait_label"</strong>.<br/>Note: unless you will only be selling licenses, you should create a new product variation type specifically for licenses.', [
          '@url' => Url::fromRoute('entity.commerce_product_variation_type.collection')->toString(),
          '@trait_label' => $product_variation_type_trait->getLabel(),
        ]),
        'severity' => SystemManager::REQUIREMENT_ERROR,
      ];
    }

    // Product type.
    /** @var \Drupal\commerce_product\Entity\ProductTypeInterface[] $product_types */
    $product_types = $this->entityTypeManager->getStorage('commerce_product_type')->loadMultiple();
    $valid_product_types = [];
    foreach ($product_types as $product_type) {
      if (array_intersect($product_type->getVariationTypeIds(), array_keys($valid_product_variation_types))) {
        $valid_product_types[$product_type->id()] = $product_type;
      }
    }
    if (!empty($valid_product_types)) {
      $i = 0;
      foreach ($valid_product_types as $valid_product_type) {
        $product_variation_type_ids = $valid_product_type->getVariationTypeIds();
        $product_variation_type_labels = [];
        foreach ($valid_product_variation_types as $valid_product_variation_type) {
          if (in_array($valid_product_variation_type->id(), $product_variation_type_ids, TRUE)) {
            $product_variation_type_labels[] = $valid_product_variation_type->label();
          }
        }
        $requirements['commerce_license_product_type_' . $i++] = [
          'title' => $this->t('Product type'),
          'value' => $this->formatPlural(count($product_variation_type_labels), '<a href="@url">@label</a><br/>Product variation type: @product_variation_types', '<a href="@url">@label</a><br/>Product variation types: @product_variation_types', [
            '@url' => $valid_product_type->toUrl('edit-form')->toString(),
            '@label' => $valid_product_type->label(),
            '@product_variation_types' => implode(', ', $product_variation_type_labels),
          ]),
          'description' => $this->t('Product type is defined using valid product variation type(s).'),
          'severity' => SystemManager::REQUIREMENT_OK,
        ];
      }
    }
    else {
      $requirements['commerce_license_product_type'] = [
        'title' => $this->t('Product type'),
        'description' => $this->t('A <a href="@url">product type</a> must be defined with a valid product variation.', [
          '@url' => Url::fromRoute('entity.commerce_product_type.collection')->toString(),
        ]),
        'severity' => SystemManager::REQUIREMENT_ERROR,
      ];
    }

    // Products.
    $commerce_product_storage = $this->entityTypeManager->getStorage('commerce_product');
    $count = $commerce_product_storage->getQuery()->accessCheck(TRUE)->condition('type', array_keys($valid_product_types), 'IN')->count()->execute();
    $valid_product_ids = $commerce_product_storage->getQuery()->accessCheck(TRUE)->condition('type', array_keys($valid_product_types), 'IN')->range(0, 10)->execute();
    /** @var \Drupal\commerce_product\Entity\ProductInterface[] $valid_products */
    $valid_products = $commerce_product_storage->loadMultiple($valid_product_ids);
    if (!empty($valid_products)) {
      $requirements['commerce_license_product'] = [
        'title' => $this->t('Product'),
        'value' => $this->formatPlural($count, '@count license product.', '@count license products. Up to 10 are listed below'),
        'description' => $this->t('Products are defined using a valid product type.'),
        'severity' => SystemManager::REQUIREMENT_OK,
      ];
      $i = 0;
      foreach ($valid_products as $valid_product) {
        $requirements['commerce_license_product_' . $i++] = [
          'title' => $this->t('Product'),
          'value' => $this->t('<a href="@url">@label</a><br/>Product type: @product_type', [
            '@url' => $valid_product->toUrl('canonical')->toString(),
            '@label' => $valid_product->label(),
            '@product_type' => $valid_product->bundle(),
          ]),
          'description' => $this->t('Product is defined using a valid product type.'),
          'severity' => SystemManager::REQUIREMENT_OK,
        ];
      }
    }
    else {
      $requirements['commerce_license_product'] = [
        'title' => $this->t('Product'),
        'description' => $this->t('A <a href="@url">product</a> must be defined with a valid product type.', [
          '@url' => Url::fromRoute('entity.commerce_product.collection')->toString(),
        ]),
        'severity' => SystemManager::REQUIREMENT_ERROR,
      ];
    }

    $form['status_report'] = [
      '#type' => 'status_report',
      '#requirements' => $requirements,
    ];

    return $form;
  }

  /**
   * {@inheritDoc}
   */
  public function getFormId(): string {
    return 'commerce_license_dashboard_form';
  }

  /**
   * {@inheritDoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state): void {

  }

}
