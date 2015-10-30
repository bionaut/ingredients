/**
 * Created by bionaut on 30/10/15.
 */


(function () {
  'use strict';
  angular.module('iMaxLength.component', [])
    .directive('iMaxLength', IMaxLength);

  function IMaxLength() {
    return function (s, e, a) {
      var _max = parseInt(a.iMaxLength);
      if (isNaN(_max) || _max === undefined || _max === null) return void 0;
      e.on('keypress', function (ev) {

        if (ev.which < 0x20) {
          return;
        }

        if (e[0].value.length == _max) {
          ev.preventDefault();
        } else if (e[0].value > _max) {
          e[0].value.substring(0, _max);
        }
      });
    };
  }
})();
