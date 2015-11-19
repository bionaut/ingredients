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
      controllerAs: 'iSelect',
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
        preventReadOnly: '@?',
        xid: '@?'
      },
      link: linkFn
    };


    function linkFn(s, e, a) {
      e.on('click mousedown', function (ev) {
        s.iSelect.blurred = false;
        ev.stopPropagation();
      });

      e.find('input').on('blur', function (ev) {
        s.iSelect.handleInputEvents();
      })
    }

    iSelectController.$inject = [
      '$scope',
      '$timeout',
      '$element',
      'iUtils',
      '$rootScope',
      '$q'
    ];
    function iSelectController($scope, $timeout, $element, iUtils, $rootScope, $q) {

      var iSelect = this;
      var s = $scope;

      // methods
      iSelect.getReadOnlyValue = getReadOnlyValue;
      iSelect.handleSelect = handleSelect;
      iSelect.handleReset = handleReset;
      iSelect.handleInputEvents = handleInputEvents;
      iSelect.openList = openList;
      iSelect.closeList = closeList;
      iSelect.toggleList = toggleList;
      iSelect.retrieveProperty = retrieveProperty;
      iSelect.emitEvent = emitEvent;


      // watch data property for changes
      s.$watch('iSelect.data', handleRefresh);

      // watch model
      s.$watch('iSelect.model', handleModelChange);

      // watch searchQuery
      s.$watch('iSelect.searchQuery', function () {
        iSelect.blurred = true;
      });

      // close list on 'closeContextual' event
      s.$on('closeContextual', closeList);

      // generate UID for iSelect
      iSelect.uid = iUtils.guid();

      //init
      init();

      function init() {
        iSelect.ready = false;

        if (!iSelect.data) return void 0;

        iSelect.items = {
          returns: [],
          views: []
        };

        var _deferred = $q.defer();
        var _promise = _deferred.promise;
        _promise
          .then(function () {
            if (typeof iSelect.data === 'object' &&
              (iSelect.data instanceof Array === false)) {
              iSelect.listData = iUtils.arrayify(iSelect.data);
            } else {
              iSelect.listData = iSelect.data;
            }
          })
          .then(function () {
            angular.forEach(iSelect.listData, function (item) {
              if (item) {
                iSelect.items.returns.push(retrieveProperty(item, iSelect.returnAs));
                iSelect.items.views.push(retrieveProperty(item, iSelect.viewAs).toString().toLowerCase());
              }
            });
          }).then(function () {
            initModel();
            setDefault();

            //decideReadOnly();

            // turn the component on
            iSelect.ready = true;
          });
        _deferred.resolve();
      }

      // DATA

      function initModel() {
        //check if in list
        var _index = iSelect.items.returns.indexOf(iSelect.model);
        if (_index === -1) {
          iSelect.model = undefined;
        } else {
          handleSelect(iSelect.listData[_index]);
        }
      }

      function getReadOnlyValue() {
        return retrieveProperty(iSelect.selected, iSelect.viewAs) || iSelect.placeholder;
      }

      function setDefault() {
        if (iSelect.default && iSelect.listData) {
          handleSelect(iSelect.listData[iSelect.default]);
        }
      }

      function decideReadOnly() {
        // if there is only one item in list and override===false make read-only
        if (iSelect.listData && iSelect.listData.length === 1) {
          handleSelect(iSelect.listData[0]);
          iSelect.readOnly = (iSelect.preventReadOnly) ?
            false : true;
        } else {
          iSelect.readOnly = ($element[0].attributes.readOnly) ?
            $element[0].attributes.readOnly : false;
        }
      }

      // HANDLERS
      function handleReset() {
        iSelect.selected = undefined;
        iSelect.model = undefined;
        iSelect.searchQuery = undefined;
        iSelect.listToggle = false;
      }

      function handleInputEvents() {
        var _lng = iSelect.listData.length;
        var _count = 0;
        iSelect.match = false;

        $timeout(function () {
          if (!iSelect.blurred) {
            return void 0;
          }
          angular.forEach(iSelect.listData, function (item) {
            var _item = retrieveProperty(item, iSelect.viewAs);
            if (iSelect.searchQuery &&
              _item.toString().toLowerCase() === iSelect.searchQuery.toString().toLowerCase()) {
              iSelect.match = true;
              handleSelect(item);
            }

            if (++_count === _lng && !iSelect.match && iSelect.blurred) {
              handleReset();
            }
          });
        })
      }

      function handleSelect(item) {
        if (angular.isUndefined(item)) return void 0;
        var _index = iSelect.listData.indexOf(item);
        iSelect.selected = item;
        iSelect.model = (iSelect.returnAs === '$index') ? _index : item[iSelect.returnAs];
        iSelect.searchQuery = (iSelect.searchable) ? retrieveProperty(iSelect.selected, iSelect.viewAs) : '';
        iSelect.listToggle = false;
      }

      function handleModelChange(nVal, oVal) {
        iSelect.blurred = true;

        while (iSelect.ready === false) {
          return void 0;
        }

        // check if value is in list
        var _indexOf = iSelect.items.returns.indexOf(nVal);
        if (_indexOf > -1) {
          handleSelect(iSelect.listData[_indexOf]);
          if (iSelect.change && nVal !== oVal) {
            iSelect.change(nVal);
          }
        }

        if (angular.isUndefined(nVal)) {
          handleReset();
        }
      }

      function handleRefresh(nVal, oVal) {
        if (nVal === oVal) return void 0;
        init();
      }

      // UI
      function openList() {
        // TODO //$rootScope.$broadcast('closeContextual');
        if (!iSelect.searchQuery) return void 0;
        generateList();
        iSelect.listToggle = true;
      }

      function closeList(event,data) {
        if (!data.id || data.id !== iSelect.uid){
          iSelect.listToggle = false;
          s.$applyAsync();
        }
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
        $rootScope.$broadcast('closeContextual', {id: iSelect.uid});
        generateList();
        iSelect.listToggle = !iSelect.listToggle;
      }

      // UTILS
      function retrieveProperty(obj, path) {
        if (!obj) return void 0;
        return objectPath.get(obj, path);
      }

      function emitEvent() {
        $rootScope.$broadcast('closeContextual', {id: iSelect.uid});
      }

    }

    return directive;
  }

})();
