(function(){
  'use strict';
  angular.module('button.component', [])
    .directive('iButton', iButton);

  iButton.$inject = [];
  function iButton() {
    return {
      priority: 1,
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/button/button.template.html',
      replace: true,
      require: '?^^form',
      scope:{
        title:'@?',
        type: '@?',
        name: '@?',
        xid: '@?',
        iDisabled: '=?'
      },
      controller: iButtonController,
      controllerAs: 'iButton',
      link: {
        pre: function(scope, element, attrs, form) {
          if (attrs.type){
            element[0].setAttribute('type', attrs.type);
          }else{
            element[0].setAttribute('type', 'button');
          }
          element.on('click', function(event) {
            if (scope.iDisabled) {
              event.preventDefault();
              event.stopImmediatePropagation();
              if (form) {
                form.$setSubmitted(true);
                scope.$evalAsync();
              }
            }
          });
        }
      }
    };
  }

  iButtonController.$inject = ['$scope'];
  function iButtonController($scope) {
    var iButton = this;

    iButton.type = $scope.type || 'button';

  }

})();
