/**
 * Created by bionaut on 14/06/15.
 */


(function () {
  'use strict';
  angular.module('select.component', [])
    .directive('iSelect', iSelect);

  function iSelect() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/modules/iForm/components/select/select.template.html',
      scope: {},
      controller: iSelectController,
      controllerAs: 'vm',
      bindToController: {
        data: '=',
        returnAs: '@',
        viewAs: '@',
        searchable: '@?',
        placeholder: '@?',
        size: '@?',
        template: '@?',
        default: '@?',
        name: '@?',
        label: '@?',
        inline: '@?',
        model: '=',
        change: '=?',
        tooltip: '@?',
        readOnly: '=?',
        validate: '@?',
        format: '@?',
        maxLength: '@?',
        xid: '@?'
      },
      link: linkFn
    };


    function linkFn(s, e, a) {
      e.on('click', function (ev) {
        ev.stopPropagation();
      })
    }

    iSelectController.$inject = [
      '$scope',
      '$timeout',
      '$element',
      'iUtils',
      '$rootScope'
    ];
    function iSelectController($scope, $timeout, $element, iUtils, $rootScope) {

      var vm = this;
      var s = $scope;

      // methods
      vm.handleSelect = handleSelect;
      vm.toggleList = toggleList;
      vm.retrieveProperty = retrieveProperty;
      vm.reset = reset;
      vm.openList = openList;
      vm.handleInputEvents = handleInputEvents;



      // convert source data
      dataTypeConverse();

      // set default value
      $timeout(function () {
        setDefault();
      });

      // watch data property for changes
      s.$watch('vm.data', handleRefresh);

      // watch model
      s.$watch('vm.model', handleModelChange);

      s.$on('closeContextual', function () {
        vm.listToggle = false;
        s.$applyAsync();
      });

      function handleRefresh(nVal, oVal) {
        if (nVal === oVal) return;
        dataTypeConverse();
        setDefault();
      }

      function setDefault() {
        vm.model = (vm.model===null || vm.model===undefined)? '': vm.model;
        if (vm.default && vm.data) {
          handleSelect(vm.data[vm.default]);
        }
      }

      function openList() {
        if (!vm.searchQuery) return void 0;
        generateList();
        vm.listToggle = true;
      }

      function generateList() {
        var width = $element[0].children[0].clientWidth;
        var height = $element[0].children[0].clientHeight;
        var list = $element[0].getElementsByClassName('i-select-list');
        list[0].style.minWidth = width + 'px';
        list[0].style.top = height + 'px';
        list[0].style.minHeight = height / 2 + 'px';
      }

      function toggleList() {
        $rootScope.$broadcast('closeContextual');
        generateList();
        vm.listToggle = !vm.listToggle;
      }

      function handleSelect(item) {
        var index = iUtils.getIndex(item, vm.data);
        vm.selected = item;
        vm.model = (vm.returnAs === '$index') ? index : item[vm.returnAs];
        vm.searchQuery = (vm.searchable) ? retrieveProperty(vm.selected, vm.viewAs) : '';
        vm.listToggle = false;
      }

      function handleModelChange(nVal, oVal) {
        vm.searchQuery = nVal;
        if (angular.isUndefined(nVal)) return void 0;

        angular.forEach(vm.data, function (item, index) {
          if (item[vm.returnAs] === nVal) {
            if (typeof vm.change !== 'undefined' && (nVal !== oVal) && (typeof oVal !== 'undefined')) {
              vm.change(nVal);
            }
            handleSelect(item);
          }
        });
      }


      function retrieveProperty(obj, path) {
        if (!obj) return void 0;
        return objectPath.get(obj, path);
      }

      function dataTypeConverse() {
        if (!vm.data) return;
        if (vm.data.constructor === Array) {
          vm.isArray = true;
          vm.isObject = false;
        } else if (typeof vm.data === 'object' && (vm.data instanceof Array === false)) {
          vm.isObject = true;
          vm.isArray = false;
        }
      }

      function reset() {
        vm.selected = undefined;
        vm.model = undefined;
        vm.searchQuery = undefined;
        vm.listToggle = false;
      }

      function handleInputEvents() {
        var _lng = (vm.isObject) ? Object.keys(vm.data).length : vm.data.length;
        var _count = 0;
        var _debounce = 100;
        vm.match = false;

        $timeout(function () {
          angular.forEach(vm.data, function (item) {
            var _item = retrieveProperty(item, vm.viewAs);
            if (vm.searchQuery && _item.toString().toLowerCase() === vm.searchQuery.toString().toLowerCase()) {
              vm.match = true;
              handleSelect(item);
            }

            if (++_count === _lng && !vm.match) {
              vm.searchQuery = undefined;
              vm.model = undefined;
              vm.selected = undefined;
            }
          });
        }, _debounce)
      }
    }

    return directive;
  }

})();
