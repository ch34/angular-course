(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('catList', {
    url: '/cat-list',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as catList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  //
  // Item detail
  .state('catList.itemList', {
    // url: '/cat-list',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        console.log($stateParams.shortName);
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    },
    params: {
      shortName: null
    }
  });

}

})();
