<?php

namespace Drupal\commerce_pvt\Plugin\views\field;

use Drupal\commerce_order\Entity\OrderInterface;
use Drupal\commerce_pvt\Traits\CommercePVTCommonTrait;
use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\field\FieldPluginBase;
use Drupal\views\Plugin\views\field\UncacheableFieldHandlerTrait;
use Drupal\views\ResultRow;

/**
 * Defines a form element for editing the order item quantity.
 *
 * @ViewsField("commerce_pvt_variation_edit_quantity")
 */
class EditVariationQuantity extends FieldPluginBase {
  use UncacheableFieldHandlerTrait;
  use CommercePVTCommonTrait;

  /**
   * {@inheritdoc}
   */
  public function clickSortable() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getValue(ResultRow $row, $field = NULL) {
    return '<!--form-item-' . $this->options['id'] . '--' . $row->index . '-->';
  }

  /**
   * {@inheritdoc}
   */
  public function query() {
    // Do nothing.
  }

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['combine'] = ['default' => 1];
    $options['allow_decimal'] = ['default' => 0];
    $options['step'] = ['default' => 1];

    $options['ajax'] = ['default' => 0];
    $options['enhance_widget'] = ['default' => 0];
    $options['enhance_widget_read_only'] = ['default' => 0];
    $options['enhance_widget_update_delay_enabled'] = ['default' => 0];
    $options['enhance_widget_update_delay'] = ['default' => 500];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    $form['qty_options'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Quantity settings'),
    ];

    $form['qty_options']['combine'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Combine'),
      '#description' => $this->t('Combine order items containing the same product variation.'),
      '#default_value' => $this->options['combine'],
    ];

    $form['qty_options']['allow_decimal'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Allow decimal quantities'),
      '#default_value' => $this->options['allow_decimal'],
    ];

    $form['qty_options']['step'] = [
      '#type' => 'select',
      '#title' => $this->t('Step'),
      '#description' => $this->t('Only quantities that are multiples of the selected step will be allowed.'),
      '#options' => [
        '0.01' => '0.01',
        '0.05' => '0.05',
        '0.1' => '0.1',
        '0.25' => '0.25',
        '0.5' => '0.5',
      ],
      '#default_value' => $this->options['step'],
      '#states' => [
        'visible' => [
          ':input[name="options[qty_options][allow_decimal]"]' => ['checked' => TRUE],
        ],
      ],
    ];

    $form['form_options'] = [
      '#type' => 'fieldset',
      '#title' => $this->t('Form options'),
    ];

    $form['form_options']['ajax'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Use AJAX'),
      '#default_value' => $this->options['ajax'],
    ];

    $form['form_options']['enhance_widget'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enhance widget'),
      '#description' => $this->t('Transforms the form elements number with +/- buttons around'),
      '#default_value' => $this->options['enhance_widget'],
      '#states' => [
        'visible' => [
          ':input[name="options[form_options][ajax]"]' => ['checked' => TRUE],
        ],
      ],
    ];

    $form['form_options']['enhance_widget_read_only'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Read only'),
      '#description' => $this->t('Transforms the number element into a Read-only, so only +/- can manipulate'),
      '#default_value' => $this->options['enhance_widget_read_only'],
      '#states' => [
        'visible' => [
          ':input[name="options[form_options][ajax]"]' => ['checked' => TRUE],
          ':input[name="options[form_options][enhance_widget]"]' => ['checked' => TRUE],
        ],
      ],
    ];

    $form['form_options']['enhance_widget_update_delay_enabled'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Delay the ajax calls'),
      '#description' => $this->t('This make the calls delayed so the widget can do clicks before submitting a change'),
      '#default_value' => $this->options['enhance_widget_update_delay_enabled'],
      '#states' => [
        'visible' => [
          ':input[name="options[form_options][ajax]"]' => ['checked' => TRUE],
          ':input[name="options[form_options][enhance_widget]"]' => ['checked' => TRUE],
        ],
      ],
    ];

    $form['form_options']['enhance_widget_update_delay'] = [
      '#type' => 'number',
      '#title' => $this->t('Update delay'),
      '#description' => $this->t('Milliseconds to wait before the update event is fired. 0 - instant'),
      '#default_value' => $this->options['enhance_widget_update_delay'],
      '#min' => 0,
      '#max' => 5000,
      '#states' => [
        'visible' => [
          ':input[name="options[form_options][ajax]"]' => ['checked' => TRUE],
          ':input[name="options[form_options][enhance_widget_update_delay_enabled]"]' => ['checked' => TRUE],
        ],
      ],
    ];

  }

  /**
   * Saves the configuration of the view field.
   *
   * @param mixed $form
   *   Settings form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   Settings Form state.
   */
  public function submitOptionsForm(&$form, FormStateInterface $form_state) {
    parent::submitOptionsForm($form, $form_state);

    $options = &$form_state->getValue('options');
    $qty_options = isset($options['qty_options']) ? $options['qty_options'] : [];
    foreach ($qty_options as $key => $value) {
      $this->options[$key] = $value;
    }

    $form_options = isset($options['form_options']) ? $options['form_options'] : [];
    foreach ($form_options as $key => $value) {
      $this->options[$key] = $value;
    }
  }

  /**
   * Form constructor for the views form.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function viewsForm(array &$form, FormStateInterface $form_state) {

    $current_product = $this->routeMatch->getParameter('commerce_product');
    if ($current_product) {
      // Make sure we do not accidentally cache this form.
      $form['#cache']['max-age'] = 0;

      // The view is empty, abort.
      if (empty($this->view->result)) {
        unset($form['actions']);
        return;
      }

      $cart = NULL;

      $default_variation = $current_product->getDefaultVariation();
      if ($default_variation) {
        $order_type = $this->getOrderType($default_variation);

        /** @var OrderInterface $cart */
        $cart = $this->cartProvider->getCart($order_type, $this->currentStore);
        $total_items = 0;
        $defaults = [];
        if ($cart) {
          foreach ($cart->getItems() as $orderItem) {
            /** @var \Drupal\commerce_product\Entity\ProductVariation $prod_variation */
            $prod_variation = $orderItem->getPurchasedEntity();
            $prod = $prod_variation->getProduct();
            if ($prod->id() == $current_product->id()) {
              $total_items += (int) $orderItem->getQuantity();

              $purchasable_item = $orderItem->getPurchasedEntity();
              $defaults[$purchasable_item->id()] = $orderItem->getQuantity();
            }
          }
        }

        $form[$this->options['id']]['#tree'] = TRUE;
        foreach ($this->view->result as $row_index => $row) {
          $step = 1;
          $precision = 0;

          if ($this->options['allow_decimal']) {
            $step = floatval($this->options['step']);
          }
          $default_value = isset($defaults[$row->variation_id]) ?
            round($defaults[$row->variation_id], $precision) : 0;

          $form[$this->options['id']][$row_index] = [
            '#type' => 'number',
            '#title' => $this->t('Quantity'),
            '#title_display' => 'invisible',
            '#default_value' => $default_value,
            '#name' => 'variation:' . $row->variation_id,
            '#size' => 4,
            '#min' => 0,
            '#max' => 9999,
            '#step' => $step,
          ];

          if ($this->options['enhance_widget']) {
            $saved_field = $form[$this->options['id']][$row_index];
            unset($form[$this->options['id']][$row_index]);
            if ($this->options['enhance_widget_read_only']) {
              $saved_field['#attributes']['readonly'] = TRUE;
            }

            $form[$this->options['id']][$row_index] = [
              '#type' => 'container',
            ];

            $form[$this->options['id']][$row_index]['minus'] = [
              '#prefix' => '<div class="quantity-edit decrease">',
              '#markup' => '<span class="number-action">-</span>',
              '#suffix' => '</div>',
            ];

            $form[$this->options['id']][$row_index]['number'] = $saved_field;

            $form[$this->options['id']][$row_index]['plus'] = [
              '#prefix' => '<div class="quantity-edit increase">',
              '#markup' => '<span class="number-action">+</span>',
              '#suffix' => '</div>',
            ];

            $form[$this->options['id']][$row_index]['update'] = [
              '#type' => 'submit',
              '#value' => 'Update',
              '#name' => 'variation:' . $row->variation_id . ':update',
              '#ajax' => [
                'callback' => [get_class($this), 'updatePageElements'],
                'event' => 'click',
                'progress' => [
                  'type' => 'throbber',
                  'message' => '',
                ],
              ],
              '#alter_variation' => TRUE,
              '#attributes' => [
                'class' => ['visually-hidden'],
              ],
            ];

            $form[$this->options['id']][$row_index]['#theme_wrappers'] = ['commerce_pvt_enhanced_widget'];
          }
        }

        if ($this->options['enhance_widget']) {
          $form['#attached']['library'][] = 'commerce_pvt/enhanced-widget';
          $form['#attached']['drupalSettings']['commerce_pvt'] = [
            'delay' => floatval($this->options['enhance_widget_update_delay']),
          ];
        }

        // Replace the form submit button label.
        if ($cart && $total_items > 0) {
          $form['actions']['submit']['#value'] = $this->t('Update variations quantitites');
          $form['actions']['submit']['#update_cart'] = TRUE;
        }
        else {
          $form['actions']['submit']['#value'] = $this->t('Add variations to cart');
        }
        $form['actions']['submit']['#manage_cart'] = TRUE;

        if ($this->options['ajax']) {
          $form['#prefix'] = '<div class="commerce-pvt-ajax-form-wrapper">';
          $form['#suffix'] = '</div>';

          $form['actions']['submit']['#ajax'] = [
            'callback' => [get_class($this), 'updatePageElements'],
            'progress' => [
              'type' => 'throbber',
              'message' => ($cart && $total_items > 0 ? $this->t('Updating cart') : $this->t('Adding to cart')) . '...',
            ],
          ];
        }

        if ($this->options['enhance_widget']) {
          $form['actions']['submit']['#access'] = FALSE;
        }
      }
    }
  }

  /**
   * Submit handler for the views form.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function viewsFormSubmit(array &$form, FormStateInterface $form_state) {
    $triggering_element = $form_state->getTriggeringElement();

    $update_cart = !empty($triggering_element['#update_cart']);

    $current_product = $this->routeMatch->getParameter('commerce_product');
    $default_variation = $current_product->getDefaultVariation();
    if ($default_variation) {
      $order_type = $this->getOrderType($default_variation);


      /**
       *
       *
       * @var OrderInterface $cart
       */
      $cart = $this->cartProvider->getCart($order_type, $this->currentStore);

      if (!empty($triggering_element['#manage_cart'])) {

        /** @var OrderInterface $cart */
        $quantities = [];
        foreach ($form_state->getUserInput() as $input_key => $value) {
          if (strpos($input_key, 'variation:') !== FALSE) {
            $variation_id = explode(":", $input_key)[1];
            $quantities[$variation_id] = floatval($value);
          }
        }
        $total_adding = array_sum($quantities);

        if ($total_adding > 0) {

          if (!$cart) {
            $cart = $this->cartProvider->createCart($order_type);
          }

          $variation_storage = $this->entityTypeManager->getStorage('commerce_product_variation');
          foreach ($quantities as $variation_id => $quantity) {
            if (!is_numeric($quantity)) {
              // The input might be invalid if the #required or #min attributes
              // were removed by an alter hook.
              continue;
            }

            /** @var \Drupal\commerce_order\Entity\OrderItemInterface $order_item */
            $order_item = $this->getOrderItemFromCart($cart, $variation_id);
            if ($update_cart) {
              if ($order_item) {
                if ($quantity == 0) {
                  $this->cartManager->removeOrderItem($cart, $order_item, $this->options['combine'], FALSE);
                  $save_cart = TRUE;
                }
                else {
                  $order_item->setQuantity($quantity);
                  $this->cartManager->updateOrderItem($cart, $order_item, FALSE);
                  $save_cart = TRUE;
                }
              }
              else {
                if ($quantity > 0) {
                  /** @var \Drupal\commerce_product\Entity\ProductVariation $variation */
                  $variation = $variation_storage->load($variation_id);
                  $order_item = $this->cartManager->createOrderItem($variation, $quantity);
                  $this->cartManager->addOrderItem($cart, $order_item, $this->options['combine'], FALSE);
                  $save_cart = TRUE;
                }
              }
            }
            else {
              if ($quantity > 0) {
                /** @var \Drupal\commerce_product\Entity\ProductVariation $variation */
                $variation = $variation_storage->load($variation_id);
                $order_item = $this->cartManager->createOrderItem($variation, $quantity);
                $this->cartManager->addOrderItem($cart, $order_item, $this->options['combine'], FALSE);
                $save_cart = TRUE;
              }
            }
          }

          $cart->save();
          $this->cartProvider->clearCaches();
          if ($this->options['ajax']) {
            $form_state->setRebuild();
          }
          else {
            $this->messenger->addMessage($this->t('Your shopping cart has been updated.'));
          }
        }
        else {
          $this->messenger->addMessage($this->t('Nothing added to cart.'));
        }
      }

      elseif (!empty($triggering_element['#alter_variation'])) {
        $variation_id = explode(":", $triggering_element['#name'])[1];

        if (!$cart) {
          $cart = $this->cartProvider->createCart($order_type);
        }

        $ui = $form_state->getUserInput();
        $new_quantity = $ui['variation:' . $variation_id];

        /** @var \Drupal\commerce_order\Entity\OrderItemInterface $order_item */
        $order_item = $this->getOrderItemFromCart($cart, $variation_id);
        if ($order_item) {

          if (intval($new_quantity) === 0) {
            $this->cartManager->removeOrderItem($cart, $order_item);
          }
          else {
            $order_item->setQuantity($new_quantity);
            $this->cartManager->updateOrderItem($cart, $order_item);
          }
        }
        else {
          if (intval($new_quantity) > 0) {
            $variation_storage = $this->entityTypeManager->getStorage('commerce_product_variation');
            $variation = $variation_storage->load($variation_id);
            $order_item = $this->cartManager->createOrderItem($variation, $new_quantity);
            $this->cartManager->addOrderItem($cart, $order_item, $this->options['combine']);
          }
        }

        $this->cartProvider->clearCaches();

        if ($this->options['ajax']) {
          $form_state->setRebuild();
        }
      }
    }
  }

}
