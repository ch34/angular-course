(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['$stateParams', 'items'];
function ItemsController($stateParams, items) {
  var itemList = this;

  var item = items[$stateParams.shortName];
  console.log("Inside Items Controller - shortName: ");
  console.log($stateParams.shortName);
  // itemList.name = item.name;
  // itemList.quantity = item.quantity;
  // itemList.description = item.description;
}

})();
