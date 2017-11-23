(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];

  service.getAllCategories  = function() {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {

      var categories = result.data;

      // process result and only keep items that match
      // for(var item in menuItems) {
      //   var description = menuItems[item].description;
      //   var foundTerm = description.includes(searchTerm);
      //   if(foundTerm) {
      //     found.push(menuItems[item]);
      //   }
      // }

      // return processed items
      return categories;
    });
  };

  service.getItemsForCategory  = function(categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    }).then(function (result) {

      var categoryItems = result.data;
      
      return categoryItems;
    });
  };

  // // Pre-populate a no cookie list
  // items.push({
  //   name: "Sugar",
  //   quantity: "2 bags",
  //   description: "Sugar used for baking delicious umm... baked goods."
  // });
  // items.push({
  //   name: "flour",
  //   quantity: "1 bags",
  //   description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  // });
  // items.push({
  //   name: "Chocolate Chips",
  //   quantity: "3 bags",
  //   description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  // });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // service.getItems = function () {
  //   var deferred = $q.defer();
  //
  //   // Wait 2 seconds before returning
  //   $timeout(function () {
  //     // deferred.reject(items);
  //     deferred.resolve(items);
  //   }, 800);
  //
  //   return deferred.promise;
  // };
}

})();
