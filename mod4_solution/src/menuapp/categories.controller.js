(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories) {
  var catList = this;
  console.log("Inside CategoriesController: ");

  catList.categories = categories;
  console.log(catList.categories);
}

})();
