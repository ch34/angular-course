(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = '';

  $scope.sayMessage = function() {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.checkInput = function () {
    if($scope.menu == '') {
      printMessage('Please enter data first');
    } else {
      var input = $scope.menu;
      var inputArray = input.split(',');
      numItems(inputArray);
    }
  };

  function printMessage(message) {
    $scope.message = message;
  }

  function numItems(itemArray) {
    alert("ItemArray Length: " + itemArray.length);
    var newArray = itemArray.filter( function (i) {
      return i.trim() !== '';
    });
    alert("NewArray Length: " + newArray.length);
  }
}


})();
