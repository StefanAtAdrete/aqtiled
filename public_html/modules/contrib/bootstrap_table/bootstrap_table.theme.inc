<?php

/**
 * @file
 * Theme for views bootstrap table.
 */

/**
 * Display a view as a Bootstrap table style.
 *
 * @see template_preprocess_views_view_table()
 */
function template_preprocess_views_view_bootstraptable(&$variables) {
  template_preprocess_views_view_table($variables);
  $view = $variables['view'];
  $style = $view->style_plugin;
  $viewId = $view->id();
  $displayObj = $view->getDisplay();
  $displayId = $displayObj->display['id'];
  $options = $style->options;
  $variables['view']->element['#attached']['library'][] = 'bootstrap_table/bootstrapTable';
  $is_live_preview = \Drupal::request()->request->get('live_preview');
  $variables["attributes"]['data-toggle'] = "table";
  foreach ($options["extension"] as $extension => $val) {
    if ($val) {
      if ($extension == 'auto-refresh') {
        $variables["attributes"]['data-show-refresh'] = "true";
      }
      $variables["attributes"]['data-' . $extension] = $val;
      $variables['view']->element['#attached']['library'][] = 'bootstrap_table/' . $extension;
    }
  }
  $mapOption = [
    'search_box' => 'search',
    'save_state' => 'cookie',
    'table_info' => 'show-columns',
    'table_tools' => 'advanced-search',
  ];
  foreach ($options["elements"] as $extension => $val) {
    if ($val && empty($is_live_preview)) {
      if (!empty($mapOption[$extension])) {
        $extension = $mapOption[$extension];
      }
      $extension = str_replace('_', '-', $extension);
      if ($extension == 'cookie') {
        $variables["attributes"]['data-cookie-id-table'] = $viewId . $displayId;
        $variables['view']->element['#attached']['library'][] = 'bootstrap_table/' . $extension;
      }
      if ($extension == 'search') {
        $variables["attributes"]['data-search-accent-neutralise'] = 'true';
        $variables["attributes"]['data-search-align'] = 'left';
        $variables["attributes"]['data-search-highlight'] = 'true';
      }
      if ($extension == 'advanced-search') {
        $variables["attributes"]['data-id-table'] = $viewId . $displayId;
        $variables["attributes"]['data-regex-search'] = "true";
        $variables['view']->element['#attached']['library'][] = 'bootstrap_table/toolbar';
      }
      $variables["attributes"]['data-' . $extension] = "true";
      $variables['view']->element['#attached']['library'][] = 'bootstrap_table/' . $extension;
    }
  }

  foreach ($options["bootstrap_styles"] as $style) {
    if (!empty($style)) {
      $variables['attributes']['class'][] = 'table-' . $style;
    }
  }
  // Header Sort.
  $fieldSum = !empty($options["footer"]["sum-field"]) ? array_filter($options["footer"]["sum-field"]) : [];
  foreach ($variables["header"] as $field_name => $field_header) {
    if ($field_name == 'views_bulk_operations_bulk_form') {
      $variables["header"][$field_name]["attributes"]['data-checkbox'] = "true";
      continue;
    }
    $variables["header"][$field_name]["attributes"]['data-field'] = $field_name;
    if (!empty($options["extension"]['filter-control'])) {
      $variables["header"][$field_name]["attributes"]['data-filter-control'] = "input";
    }
    $remember_order = FALSE;
    if (!empty($options["info"][$field_name]["sortable"])) {
      $variables["header"][$field_name]["attributes"]['data-sortable'] = "true";
      $remember_order = TRUE;
    }
    if ($remember_order) {
      $variables["attributes"]['data-remember-order'] = "true";
    }
    if (!empty($options["info"][$field_name]["align"])) {
      $align = explode('-', $options["info"][$field_name]["align"]);
      $variables["header"][$field_name]["attributes"]['data-align'] = end($align);
    }
    // Sum to footer.
    if (!empty($options["footer"]["show-footer"]) || !empty($fieldSum)) {
      $variables["attributes"]['data-show-footer'] = "true";
      if (in_array($field_name, $fieldSum)) {
        $variables["header"][$field_name]["attributes"]['data-footer-formatter'] = $field_name . "Formatter";
      }
      if ($options["footer"]["sum-title-field"] == $field_name) {
        $variables["header"][$field_name]["attributes"]['data-footer-formatter'] = $field_name . "Formatter";
      }
    }
  }

  // Field Sum footer. send to twig add custom function js.
  if (!empty($fieldSum)) {
    $variables["sumFooter"] = [
      'sum-field' => $fieldSum,
      'sum-title' => $options["footer"]["sum-title"],
      'sum-title-field' => $options["footer"]["sum-title-field"] . "Formatter",
    ];
  }

  // Pagination.
  if ($options["pages"]["pagination_style"] != 'no_pagination') {
    if (!empty($options["pages"]["display_length"])) {
      $variables["attributes"]['data-pagination'] = "true";
      $variables["attributes"]['data-page-size'] = $options["pages"]["display_length"];
    }
    if (!empty($options["pages"]["pagination_style"]) == 0) {
      $variables["attributes"]['data-pagination-pre-text'] = t("Previous");
      $variables["attributes"]['data-pagination-next-text'] = t("Next");
    }
  }

}
