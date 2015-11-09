/**
 * Created by bionaut on 09/11/15.
 */

(function(){
  'use strict';
  angular.module('focusMe.component', [])
    .directive('focusMe', FocusMe);

  FocusMe.$inject = [];
  function FocusMe() {
    return {
      restrict: 'A',
      scope: true,
      bindToController: {
        focusMe: '=?'
      },
      controller: FocusMeController,
      controllerAs: 'focus'
    };
  }


  FocusMeController.$inject = ['$element', '$scope'];
  function FocusMeController($element, $scope) {
    var focus = this;
    $scope.$watch('focus.focusMe', function (nVal, oVal) {
      if (focus.focusMe){
        $element[0].focus()
      }
    });


  }



})();
