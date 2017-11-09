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
      foundItems: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}


function FoundItemsDirectiveController() {
  // var list = this;
  //
  // list.cookiesInList = function () {
  //   for (var i = 0; i < list.items.length; i++) {
  //     var name = list.items[i].name;
  //     if (name.toLowerCase().indexOf("cookie") !== -1) {
  //       return true;
  //     }
  //   }
  //
  //   return false;
  // };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

  var list = this;
  // controller.searchTerm =
  // controller.getMatchedMenuItems



  list.narrowItDown = function () {
    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
    promise.then(function (response) {
      list.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
  //
  // var promise = MenuSearchService.getMenuCategories();
  //
  // promise.then(function (response) {
  //   menu.categories = response.data;
  // })
  // .catch(function (error) {
  //   console.log("Something went terribly wrong.");
  // });
  //
  // menu.logMenuItems = function (shortName) {
  //   var promise = MenuSearchService.getMenuForCategory(shortName);
  //
  //   promise.then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })
  // };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  var found = [];

  service.getMatchedMenuItems = function(searchTerm) {
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


  // service.getMenuCategories = function () {
  //   var response = $http({
  //     method: "GET",
  //     url: (ApiBasePath + "/categories.json")
  //   });
  //
  //   return response;
  // };
  //
  //
  // service.getMenuForCategory = function (shortName) {
  //   var response = $http({
  //     method: "GET",
  //     url: (ApiBasePath + "/menu_items.json"),
  //     params: {
  //       category: shortName
  //     }
  //   });
  //
  //   return response;
  // };

}

})();
