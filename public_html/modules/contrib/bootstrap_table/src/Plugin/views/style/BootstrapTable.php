<?php

namespace Drupal\bootstrap_table\Plugin\views\style;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views\Plugin\views\style\Table;

/**
 * BootstrapTable style plugin to render a table as a Bootstrap table.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "bootstraptable",
 *   title = @Translation("Bootstrap Table"),
 *   help = @Translation("Render a table as a Bootstrap-Table"),
 *   theme = "views_view_bootstraptable",
 *   display_types = {"normal"}
 * )
 */
class BootstrapTable extends Table {

  /**
   * {@inheritdoc}
   */
  protected $usesFields = TRUE;

  /**
   * {@inheritdoc}
   */
  protected $usesRowPlugin = FALSE;

  /**
   * {@inheritdoc}
   */
  protected $usesRowClass = TRUE;

  /**
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();

    unset($options['sticky']);
    unset($options['override']);

    $options['elements'] = [
      'default' => [
        'search_box' => TRUE,
        'table_info' => TRUE,
        'save_state' => FALSE,
        'show-refresh' => FALSE,
        'show-columns-toggle-all' => FALSE,
        'show-pagination-switch' => FALSE,
        'show-toggle' => FALSE,
        'show-fullscreen=' => FALSE,
        'cache' => FALSE,
        'card-view' => FALSE,
        'height' => 0,
      ],
    ];

    $options['extension'] = [
      'default' => [
        'auto-refresh' => FALSE,
        'cookie' => FALSE,
        'show-copy-rows' => TRUE,
        'show-print' => TRUE,
        'show-export' => TRUE,
        'filter-control' => FALSE,
        'group-by' => FALSE,
        'show-multi-sort' => FALSE,
        'show-jump-to' => FALSE,
        'reorderable-columns' => FALSE,
        'reorderable-rows' => FALSE,
        'resizable' => FALSE,
        'sticky-header' => FALSE,
        'defer-url' => FALSE,
      ],
    ];

    $options['pages'] = [
      'default' => [
        'pagination_style' => 0,
        'length_change' => 0,
        'display_length' => 10,
      ],
    ];

    $options['bootstrap_styles'] = ['default' => []];
    $options['footer'] = [
      'default' => [
        'sum-title' => $this->t('Total'),
        'sum-field' => '',
        'sum-title-field' => '',
        'show-footer' => FALSE,
      ],
    ];

    return $options;
  }

  /**
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);

    unset($form['sticky']);
    unset($form['override']);

    $form['description_markup']['#markup'] = '<div class="description form-item">' . $this->t('Tables works best if you set the pager to display all items, since DataTabels contains its own pager implementation.<br/><br/>Place fields into columns; you may combine multiple fields into the same column. If you do, the separator in the column specified will be used to separate the fields. Check the sortable box to make that column click sortable, and check the default sort radio to determine which column will be sorted by default, if any. You may control column order and field labels in the fields section.') . '</div>';

    $form['elements'] = [
      '#type' => 'details',
      '#title' => $this->t('Widgets & Elements'),
      '#open' => FALSE,
    ];

    $form['elements']['search_box'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable the search filter box.'),
      '#description' => $this->t('The search filter box allows users to dynamically filter the results in the table.  Disabling this option will hide the search filter box from users.'),
      '#default_value' => $this->options['elements']['search_box'] ?? FALSE,
    ];

    $form['elements']['table_info'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable the table information display.'),
      '#description' => $this->t('This shows information about the data that is currently visible on the page, including information about filtered data if that action is being performed.'),
      '#default_value' => $this->options['elements']['table_info'] ?? FALSE,
    ];

    $form['elements']['save_state'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Save State'),
      '#description' => $this->t("Tables can use cookies in the end user's web-browser in order to store it's state after each change in drawing. What this means is that if the user were to reload the page, the table should remain exactly as it was (length, filtering, pagination and sorting)"),
      '#default_value' => $this->options['elements']['save_state'] ?? FALSE,
    ];

    $form['elements']['table_tools'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Table Tools'),
      '#description' => $this->t('Table Tools is a plugin that adds a powerful button toolbar with copy, save, and print capabilities.'),
      '#default_value' => $this->options['elements']['table_tools'] ?? FALSE,
    ];

    $form['elements']['show-refresh'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show Refresh'),
      '#description' => $this->t('Table Tools show the refresh button'),
      '#default_value' => $this->options['elements']['show-refresh'] ?? FALSE,
    ];

    $form['elements']['show-columns-toggle-all'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Columns Toggle All'),
      '#description' => $this->t('Table Tools to show a toggle all checkbox for the columns option'),
      '#default_value' => $this->options['elements']['show-columns-toggle-all'] ?? FALSE,
    ];

    $form['elements']['show-pagination-switch'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Pagination switch'),
      '#description' => $this->t('Table Tools option to show the pagination switch button'),
      '#default_value' => $this->options['elements']['show-pagination-switch'] ?? FALSE,
    ];

    $form['elements']['show-toggle'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show Toggle'),
      '#description' => $this->t('Table Tools option to show the toggle button to toggle table / card view'),
      '#default_value' => $this->options['elements']['show-toggle'] ?? FALSE,
    ];

    $form['elements']['show-fullscreen'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Show Fullscreen'),
      '#description' => $this->t('Table Tools option to show the fullscreen button'),
      '#default_value' => $this->options['elements']['show-fullscreen'] ?? FALSE,
    ];

    $form['elements']['card-view'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Card View'),
      '#description' => $this->t('Table Tools option to show card view table, for example mobile view'),
      '#default_value' => $this->options['elements']['card-view'] ?? FALSE,
    ];

    $form['elements']['height'] = [
      '#type' => 'number',
      '#title' => $this->t('Height'),
      '#description' => $this->t('Empty is remove height table'),
      '#default_value' => $this->options['elements']['height'],
    ];

    $form['extension'] = [
      '#type' => 'details',
      '#title' => $this->t('Extension'),
      '#open' => FALSE,
    ];
    $form['extension']['auto-refresh'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Auto Refresh'),
      '#description' => $this->t("See the <a href='@exemple'>Tables Auto Refresh</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/auto-refresh.html']),
      '#default_value' => $this->options['extension']['auto-refresh'] ?? FALSE,
    ];

    $form['extension']['show-copy-rows'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Copy Rows'),
      '#description' => $this->t("See the <a href='@exemple'>Copy Rows for copying selected rows to the clipboard</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/copy-rows.html']),
      '#default_value' => $this->options['extension']['show-copy-rows'] ?? FALSE,
    ];

    $form['extension']['show-print'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Copy Rows'),
      '#description' => $this->t("See the <a href='@exemple'>print</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/print.html']),
      '#default_value' => $this->options['extension']['show-print'] ?? FALSE,
    ];

    $form['extension']['show-export'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Export'),
      '#description' => $this->t("See the <a href='@exemple'>Export</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/export.html']),
      '#default_value' => $this->options['extension']['show-export'] ?? FALSE,
    ];
    $form['extension']['filter-control'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Filter Control'),
      '#description' => $this->t("See the <a href='@exemple'>Filter Control</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/filter-control.html']),
      '#default_value' => $this->options['extension']['filter-control'] ?? FALSE,
    ];
    $form['extension']['group-by'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Group By'),
      '#description' => $this->t("See the <a href='@exemple'>Group By</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/group-by-v2.html']),
      '#default_value' => $this->options['extension']['group-by'] ?? FALSE,
    ];

    $form['extension']['show-multi-sort'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Multiple Sort'),
      '#description' => $this->t("See the <a href='@exemple'>Group By</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/multiple-sort.html']),
      '#default_value' => $this->options['extension']['show-multi-sort'] ?? FALSE,
    ];

    $form['extension']['show-jump-to'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Page Jump To'),
      '#description' => $this->t("See the <a href='@exemple'>Page Jump To</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/page-jump-to.html']),
      '#default_value' => $this->options['extension']['show-jump-to'] ?? FALSE,
    ];

    $form['extension']['reorderable-rows'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Reorder Rows'),
      '#description' => $this->t("See the <a href='@exemple'>Reorder Rows</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/reorder-rows.html']),
      '#default_value' => $this->options['extension']['reorderable-rows'] ?? FALSE,
    ];
    $form['extension']['resizable'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Resizable'),
      '#description' => $this->t("See the <a href='@exemple'>Resizable</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/resizable.html']),
      '#default_value' => $this->options['extension']['resizable'] ?? FALSE,
    ];
    $form['extension']['resizable']['#description'] .= "Don't use 'cos jquery-resizable-columns lib is not working with Bootstrap Table, wait until fixed";

    $form['extension']['sticky_header'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Sticky Header'),
      '#description' => $this->t("See the <a href='@exemple'>Sticky Header provides a sticky header for the table when scrolling</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/sticky-header.html']),
      '#default_value' => $this->options['extension']['sticky_header'] ?? FALSE,
    ];

    $form['extension']['defer_url'] = [
      '#type' => 'url',
      '#title' => $this->t('Defer URL'),
      '#description' => $this->t("See the <a href='@exemple'>Defer URL</a> for details on how to use this feature", ['@exemple' => 'https://examples.bootstrap-table.com/index.html#extensions/defer-url.html']),
      '#default_value' => $this->options['extension']['defer_url'] ?? '',
    ];

    $form['pages'] = [
      '#type' => 'details',
      '#title' => $this->t('Pagination and Page Length'),
      '#open' => FALSE,
    ];

    $form['pages']['pagination_style'] = [
      '#type' => 'select',
      '#title' => $this->t('Pagination Style'),
      '#description' => $this->t('Selects which pagination style should be used.'),
      '#options' => [
        0 => $this->t('Two-Button (Default)'),
        'full_numbers' => $this->t('Full Numbers'),
        'no_pagination' => $this->t('No Pagination'),
      ],
      '#default_value' => $this->options['pages']['pagination_style'],
    ];

    $form['pages']['length_change'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable Length Change Selection Box'),
      '#description' => $this->t('Enable or page length selection menu'),
      '#default_value' => $this->options['pages']['length_change'] ?? FALSE,
    ];

    $form['pages']['display_length'] = [
      '#type' => 'number',
      '#title' => $this->t('Default Page Length'),
      '#description' => $this->t('Default number of records to show per page. May be adjusted by users if Length Selection is enabled'),
      '#min' => 1,
      '#default_value' => $this->options['pages']['display_length'],
    ];

    $form['bootstrap_styles'] = [
      '#title' => $this->t('Bootstrap styles'),
      '#type' => 'checkboxes',
      '#default_value' => $this->options['bootstrap_styles'] ?? [],
      '#options' => [
        'striped' => $this->t('Striped'),
        'bordered' => $this->t('Bordered'),
        'hover' => $this->t('Hover'),
        'sm' => $this->t('Condensed'),
      ],
    ];

    $form['footer'] = [
      '#type' => 'details',
      '#title' => $this->t('Sum on footer'),
      '#open' => FALSE,
    ];

    $form['footer']['show-footer'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable footer'),
      '#description' => $this->t('User for sum footer'),
      '#default_value' => $this->options['footer']['show-footer'] ?? FALSE,
    ];

    $optionField = [];
    $fields = $this->displayHandler->getHandlers('field');
    $labels = $this->displayHandler->getFieldLabels();
    foreach ($fields as $field_name => $field) {
      if (!empty($field->options["type"]) && in_array($field->options["type"], [
        'number_integer',
        'number_decimal',
        'bigint_item_default',
        'list_default',
      ])) {
        $optionField[$field_name] = $labels[$field_name];
      }
    }
    // @todo It must filter numeric field for sum.
    $form['footer']['sum-field'] = [
      '#title' => $this->t('Numeric field to sum'),
      '#type' => 'checkboxes',
      '#description' => $this->t('Must be numeric field'),
      '#default_value' => $this->options['footer']['sum-field'] ?? [],
      '#options' => $optionField,
    ];

    $form['footer']['sum-title'] = [
      '#title' => $this->t('Title to sum'),
      '#type' => 'textfield',
      '#default_value' => $this->options['footer']['sum-title'] ?? '',
    ];
    foreach ($form["columns"] as $field_name => $field) {
      if ($field_name == 'views_bulk_operations_bulk_form') {
        continue;
      }
      $optionField[$field_name] = $field["#options"][$field_name];
    }
    $form['footer']['sum-title-field'] = [
      '#title' => $this->t('Field to put sum title'),
      '#type' => 'select',
      '#default_value' => $this->options['footer']['sum-field-field'] ?? '',
      '#options' => $optionField,
      '#empty_option' => $this->t('- None -'),
    ];
  }

}
