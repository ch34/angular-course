(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCtrl = this;

  buyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

  buyCtrl.boughtItem = function (itemIndex) {
    ShoppingListCheckOffService.boughtItem(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;

  boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var toBuyItems = [
    { name: "cookies", quantity: 2, pricePerItem: 2 },
    { name: "chips", quantity: 4, pricePerItem: 5 },
    { name: "candies", quantity: 10, pricePerItem: 1 },
    { name: "soda", quantity: 1, pricePerItem: 4 },
    { name: "apples", quantity: 5, pricePerItem: 3 }
  ];

  // List of bought items
  var boughtItems = [];

  service.boughtItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
