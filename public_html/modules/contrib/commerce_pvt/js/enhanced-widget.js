/**
 * @file
 * Contains enhanced widget variation quantity JS logic.
 */

(function ($, Drupal, debounce, window) {
  'use strict';

  Drupal.behaviors.enhancedEditQuantityWidget = {
    attach: function (context, settings) {

      $(context).find('.commerce-pvt-enhanced-widget').each(
        function () {
          var $input = $(this).find('input.form-number');
          var min = $input.attr('min');
          var max = $input.attr('max');
          var $minus = $(this).find('.quantity-edit.decrease');
          var $plus = $(this).find('.quantity-edit.increase');
          var $update = $(this).find('.form-submit');
          var DELAY = drupalSettings.commerce_pvt.delay || 200;

          var decreaseInput = function () {
            if ($(this).hasClass('disabled')) {
              return;
            }
            var step = Number($input.attr('step'));
            var oldValue = Number($input.val());
            var newValue = (oldValue - step) < min ? min : (oldValue - step);
            $input.val(newValue);
          };

          var increaseInput = function () {
            if ($(this).hasClass('disabled')) {
              return;
            }
            var step = Number($input.attr('step'));
            var oldValue = Number($input.val());
            var newValue = (oldValue + step) > max ? max : (oldValue + step);
            $input.val(newValue);
          };

          var debouncedSubmit = debounce(function () {
            if ($(this).hasClass('disabled') || $(this).attr('disabled')) {
              // do nothing
            }
            else {
              $update.trigger('click');
            }
          }, DELAY);

          if ($input.attr('disabled')) {
            $minus.addClass('disabled');
            $plus.addClass('disabled');
          }
          else {
            if (min === $input.val()) {
              $minus.addClass('disabled');
            }

            if (max === $input.val()) {
              $plus.addClass('disabled');
            }

            $minus.once('commerce-pvt-enhanced')
              .on('click', decreaseInput)
              .on('click', debouncedSubmit);
            $plus.once('commerce-pvt-enhanced')
              .on('click', increaseInput)
              .on('click', debouncedSubmit);

            if (!$input.attr('readonly')) {
              $input.once('commerce-pvt-enhanced')
                .on('change', debouncedSubmit);
            }
          }
        }
      );
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        $(context).find('.commerce-pvt-plus-minus').each(
          function () {
            var $input = $(this).find('input.form-number');
            var $minus = $(this).find('.quantity-edit.decrease');
            var $plus = $(this).find('.quantity-edit.increase');
            $minus.removeOnce('commerce-pvt-enhanced').off('click');
            $plus.removeOnce('commerce-pvt-enhanced').off('click');
            $input.removeOnce('commerce-pvt-enhanced').off('change');
          }
        );
      }
    }
  };

}(jQuery, Drupal, Drupal.debounce, window));
