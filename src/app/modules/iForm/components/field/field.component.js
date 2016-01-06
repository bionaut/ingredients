(function(){
  'use strict';
  angular.module('field.component', [])
    .directive('iField', iField);

  iField.$inject=['$compile'];
  function iField($compile) {
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

            var getMaxLengthAttr = function(maxLength){
              var out =  ' i-max-length="'.concat(maxLength, '"');
              if(maxlength.indefOf(':') < 0){
                return out.concat(' maxlength="', maxLength,'"');
              }
              return out;
            }

            var debounce = (a.debounce) ? ' ng-model-options="{debounce: '+ a.debounce +'}"': '';
            var fieldClasses = ' class="i-field ' + (a.classes || '') + ' " ng-class="{error: checkErrors()}"';
            var inputClasses = ' class="i-field-input' +( (a.inline) ? ' inline' : '') +( (a.label) ? '' : ' nolabel') + '"';
            var labelClasses = ' class="i-field-label' +( (a.inline) ? ' inline' : '') +( (a.required) ? ' required' : '') + '"';
            var ui_mask = (a.mask) ? ' ui-mask="' + a.mask + '"':'';
            var inputName = (a.name) ? ' name="' + a.name + '"': '';
            var disabled = (a.disabled) ? ' ng-disabled="'+ a.disabled + '"' : '';
            var model = (a.model) ? ' ng-model="'+ a.model +'"' : '';
            var labelAttr = (a.label) ? ' label="' + a.label + '"' : '';
            var kind = (a.type) ? ' type="' + a.type + '"' : 'type="text"';
            var id = (a.id) ? ' id="'+ a.id || a.name +'"' : '';
            var placeholder = (a.placeholder) ? ' placeholder="'+ a.placeholder +'"' : '';
            var regex = (a.regex) ? ' pattern="'+ a.regex +'"' : '';
            var focus = (a.focus) ? ' autofocus' : '';
            var tooltip = (a.tooltip) ? ' <rb-helper tooltip="'+ a.tooltip +'"></rb-helper>' : '';
            var onEnter = (a.onEnter) ? ' on-enter="'+ a.onEnter +'"' : '';
            var xid = (a.xid) ? ' xid="'+ a.xid +'"' : '';

            var maxLength= (a.maxLength) ? getMaxLengthAttr(a.maxLength) : '';
            var required = (a.required) ? ' ng-required="'+a.required+'"' : '';

            var label = (a.label) ? '<label ' + labelClasses + ' for="'+ id +'">'+a.label+'</label>' : '';
            var focusMe = (a.focusMe) ? ' focus-me="'+ a.focusMe+'"' : '';
            var noAutocomplete = (a.noAutocomplete) ? ' autocomplete="off"' : '';

            // custom directives
            var iFormat = (a.format) ? ' i-format="'+ a.format+'"' : '';
            var iValid = (a.validate) ? ' i-valid = "'+ a.validate + '"' : '';


            var html =
              '<div' + fieldClasses + '>' +
                label + tooltip +
                '<input ng-hide="' + a.readOnly + '" ' +
                  onEnter +
                  inputClasses +
                  id +
                  xid +
                  kind +
                  model +
                  labelAttr +
                  debounce +
                  inputName+
                  ui_mask +
                  disabled +
                  placeholder +
                  regex +
                  iFormat +
                  iValid +
                  required +
                  focus +
                  maxLength +
                  focusMe +
                  noAutocomplete +
                '/>' +
                '<div class="read-only" ng-show="'+ a.readOnly+'" ng-bind="'+ a.model +'"></div>' +
                '<div class="fieldErrorMessages" ng-if="!form.$globalErrors" ng-show="form.$submitted">' +
                    '<div class="fieldErrorMessage" ng-repeat="(key,error) in errors track by $index">{{ overrideMessage || getErrorMessage(key) }}</div>'+
                '</div>'+
              '</div>' ;

            var elementToInject = angular.element(html);
            iElement.replaceWith(elementToInject);
            $compile(elementToInject)(scope);
          }
      };
    }
  }

})();
