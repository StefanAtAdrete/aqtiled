/**
 * @file
 * Prepare and send data to augmentor execute functions and handle the response.
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.augmentor_library = {
    attach: function attach(context, settings) {
      var isLoading = false;

      $('.augmentor-cta-link').each(function () {
        $(this).click(function (event) {
          event.preventDefault();

          if (!isLoading) {
            isLoading = true;

            $(this).before(Drupal.theme.ajaxProgressIndicatorFullscreen());
            var field = $(this).attr('name');
            var data = settings['augmentor'][field]['data'];
            var targets = data['targets'];
            var action = data['action'];
            var type = data['type'];
            var explode = data['explode_separator'];
            var button = $(this);

            $.ajax({
              url: settings['augmentor'][field]['url'],
              type: 'POST',
              data: JSON.stringify(data),
              dataType: 'json',
              beforeSend: function (x) {
                if (x && x.overrideMimeType) {
                  x.overrideMimeType('application/json;charset=UTF-8');
                }
              },
              success: function (result) {
                $('.ajax-progress--fullscreen').remove();
                var parsed_result = JSON.parse(result);
                Object.keys(targets).forEach(index => {
                  var targetFieldName = targets[index].target_field;
                  var targetField = $("[name^='" + targetFieldName + "']");
                  var responseKey = targets[index].key;
                  var result = parsed_result[responseKey];

                  if (type == 'file' && responseKey != 'url') {
                    updateFileField(targetFieldName, result, responseKey);
                  }
                  else {
                    targetField.each(function () {
                      switch (type) {
                        case 'tags':
                          updateTagsField($(this), result, explode, button);
                          break;

                        case 'select':
                          updateSelectField($(this), action, result, button);
                          break;

                        default:
                          updateCkeditorField($(this), action, result[0]);
                          updateSimpleField($(this), action, result[0]);
                      }
                    });
                  }
                });
                isLoading = false;
              },
              error: function (result) {
                $('.ajax-progress--fullscreen').remove();
                var parsed_result = JSON.parse(result.responseJSON);
                const messages = new Drupal.Message();
                messages.clear();
                messages.add(parsed_result, { type: 'error' });
                $("html, body").animate({ scrollTop: 0 }, "slow");
                isLoading = false;
              }
            });
          }

          return false;
        });
      });
    }
  };

  // Handle CKEditor fields updates.
  function updateCkeditorField(targetField, action, value) {
    var targetField = targetField.attr('id');
    var targetFieldEditor = CKEDITOR.instances[targetField];

    if (typeof targetFieldEditor != 'undefined') {
      value = transformValue(action, targetFieldEditor.getData(), value, '\n');
      targetFieldEditor.setData(value);
    }
  }

  // Handle simple input, texarea, hidden, etc. fields updates.
  function updateSimpleField(targetField, action, value) {
    if (!targetField.hasClass('form-autocomplete')) {
      value = transformValue(action, targetField.val(), value, '');
      targetField.val(value);
    }
  }

  // Handle File fields updates.
  function updateFileField(targetFieldName, value, key) {
    switch (key) {
      case 'mid':
        $('input[name="' + targetFieldName + '[media_library_selection]"]').val(value);
        $('input[name="' + targetFieldName + '-media-library-update"]').trigger('mousedown');
        break;

      case 'fid':
        $('input[name="' + targetFieldName + '[0][fids]"]').val(value);
        $('input[name="' + targetFieldName + '[0][fids]"]').closest('.js-form-managed-file').find('.js-form-submit').trigger('mousedown');
        break;
    }
  }

  // Handle taxonomy term autocomplete fields updates.
  function updateTagsField(targetField, value, explode, button) {
    if (typeof value === 'object') {
      value = Object.values(value);
    }

    if (targetField.hasClass('form-autocomplete')) {
      button.closest('.form-wrapper').find('.augmentor-tags').remove();
      button.closest('.form-wrapper').append('<div class="augmentor-tags"></div>');
      var augmentorTags = button.closest('.form-wrapper').find('.augmentor-tags');
      if (explode) {
        for (let i = 0; i < value.length; i++) {
          var tags = value[i].split(explode);
          for (let j = 0; j < tags.length; j++) {
            var tag = stripHtml(tags[j]);
            generateTag(targetField, augmentorTags, tag);
          }
        }
      }
      else {
        for (let i = 0; i < value.length; i++) {
          var tag = stripHtml(value[i]);
          generateTag(targetField, augmentorTags, tag);
        }
      }
    }
  }

  // Helper to generate an input tag.
  function generateTag(targetField, augmentorTags, value) {
    var tag = stripHtml(value);
    if (!augmentorTags.find('input[value="' + tag.trim() + '"]').length) {
      var button = $('<input type="button" class="augmentor-tag" value= "' + tag.trim() + '">').click(function () {
        var existing_tags = [];

        if (targetField.val() != '') {
          existing_tags = targetField.val().split(',');
        }

        existing_tags.push(tag);
        targetField.val(stripHtml(existing_tags.join()));
        $(this).remove();
      });

      augmentorTags.append(button);
    }
  }

    // Handle select fields updates.
  function updateSelectField(targetField, action, value, button) {
    if (typeof value === 'object') {
      value = Object.values(value);
    }

    var $formWrapper = button.closest('.form-wrapper');
    $formWrapper.find('.augmentor-select').remove();
    $formWrapper.append('<select class="form-element form-element--type-select augmentor-select"></select>');

    var $augmentorSelect = $formWrapper.find('.augmentor-select');

    for (let i = 0; i < value.length; i++) {
      var option = stripHtml(value[i]);
      generateOption($augmentorSelect, option);
    }

    $augmentorSelect.on('change', function () {
      updateCkeditorField(targetField, action, this.value);
      updateSimpleField(targetField, action, this.value);
    });

    $augmentorSelect.trigger('change');
    $augmentorSelect.focus();
  }

  // Helper to generate an option element.
  function generateOption(augmentorSelect, option) {
    option = stripHtml(option).trim();

    augmentorSelect.append($('<option>', {
      value: option,
      text : option.substring(0, 80) + '...',
    }));
  }

  // Helper to append, prepend or replace a value to a string.
  function transformValue(action, originalValue, valueToInsert, separator) {
    valueToInsert = stripHtml(valueToInsert);

    if (originalValue) {
      if (action == 'preppend') {
        valueToInsert = valueToInsert + separator + originalValue;
      }

      if (action == 'append') {
        valueToInsert = originalValue + separator + valueToInsert;
      }
    }

    return valueToInsert;
  }

  // Helper to strip HTML from given text.
  function stripHtml(text) {
    var txt = document.createElement("div");
    txt.innerHTML = text;
    return txt.textContent || txt.innerText || "";
  }
})(jQuery, Drupal, drupalSettings);
