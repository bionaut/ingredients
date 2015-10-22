(function(){

  'use strict';

  angular
    .module('checkbox.component', [])
    .directive('iCheckbox', iCheckbox);

  iCheckbox.$inject = [
    '$compile'
  ];
  function iCheckbox($compile) {
    return{
      restrict: 'E',
      replace: true,
      scope: true,
      compile: compileFn
    };

    function compileFn() {
      return {
        pre:
          function (scope, iElement, attrs) {

            var a = attrs;

            var inputName = (a.name) ? ' name="' + (a.name || a.id) + '"': '';
            var disabled = (a.disabled) ? ' ng-disabled="'+ a.disabled + '"' : '';
            var model = (a.model) ? ' ng-model="'+ a.model +'"' : '';
            var id = (a.id) ? ' id="'+ a.id +'"' : ' id="' +  a.name + '"';
            var validate = (a.validate) ? ' i-valid = "'+ a.validate + '"' : '';

            var xId = (a.xId) ? ' x-id="'+ a.xId +'"' : '';
            var label = '<label class="checkboxlabel" for="'+ (a.id || a.name) +'">' + (a.label || '') + '</label>';

            var html =
              '<div' + '>' +
                '<input' +
                  id + xId +
                  ' type="checkbox"' +
                  model +
                  inputName +
                  disabled +
                  validate +
                '/>' +
                label +
              '</div>';

            var elementToInject = angular.element(html);
            iElement.replaceWith(elementToInject);
            $compile(elementToInject)(scope);
          }
      };
    }
  }

})();
