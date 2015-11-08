/**
 * Created by bionaut on 30/10/15.
 */


(function () {
  'use strict';
  angular.module('iMaxLength.component', [])
    .directive('iMaxLength', IMaxLength);

  IMaxLength.$inject = [
    'iUtils'
  ];
  function IMaxLength(iUtils) {
    return function (s, e, a) {
      var _conf = a.iMaxLength.trim().split(':');
      var _max = (_conf) ? parseInt(_conf[0]) : undefined;
      var _maxDecimals =  (_conf[1]) ? parseInt(_conf[1]) : undefined;

      if (isNaN(_max) || _max === undefined || _max === null) return void 0;

      e.on('keypress', function (ev) {

        if (ev.which < 0x20) {
          return;
        }

        var _currentValue = e[0].value;

        var isDecimal =
          _conf[1] &&
          _currentValue &&
          (_currentValue.indexOf(',') > -1 ||
          _currentValue.indexOf('.') > -1);

        // prevent another dot, comma - only one of those this time :)
        if (isDecimal && (ev.which === 44 || ev.which === 46)){
          ev.preventDefault();
          return void 0;
        }

        if(_conf[1] && !isDecimal && _currentValue.length === _max && (ev.which === 44 || ev.which === 46)) {
          return void 0;
        }

        // is decimal number
        if (isDecimal && _currentValue.length >= (_max + _maxDecimals + 1)) {
          if (!isTextSelected(e[0])) ev.preventDefault();
        }

        // no decimal number
        if (!isDecimal && _currentValue.length >= _max) {
          // only preventDefault when text is not selected
          if (!isTextSelected(e[0])) ev.preventDefault();
        }



      });
    };
  }

  // function that check if the text is selected in the input
  function isTextSelected(input) {
    if (typeof input.selectionStart == "number") {
      return input.selectionStart == 0 && input.selectionEnd == input.value.length;
    } else if (typeof document.selection != "undefined") {
      input.focus();
      return document.selection.createRange().text == input.value;
    }
  }

})();
