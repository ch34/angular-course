(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  var list = this;

  list.nothingFound = function () {
    if(list.items != null) {
      if(list.items.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var list = this;

  list.narrowItDown = function () {
    list.items = [];
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
    promise.then(function (response) {
      list.items = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var found = [];

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {

      var menuItems = result.data.menu_items;

      // process result and only keep items that match
      for(var item in menuItems) {
        var description = menuItems[item].description;
        var foundTerm = description.includes(searchTerm);
        if(foundTerm) {
          found.push(menuItems[item]);
        }
      }
      
      // return processed items
      return found;
    });
  };

  service.removeItem = function (itemIndex) {
    found.splice(itemIndex, 1);
  };

}

})();
