(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
   var categories = [];

  service.getAllCategories  = function() {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    }).then(function (result) {

      var categoriesData = result.data;

      categories = categoriesData

      console.log("List of Categories: ");
      console.log(categoriesData);
      return categoriesData;
    });
  };

  service.getItemsForCategory  = function(categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    }).then(function (result) {

      var categoryItems = result.data;
      console.log("Short_Name: ");
      console.log(categoryShortName);
      console.log("List of Category Items: ");
      console.log(categoryItems);
      return categoryItems;
    });
  };

}

})();
