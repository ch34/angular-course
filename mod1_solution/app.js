(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = '';

  $scope.checkInput = function () {
    if($scope.menu == '') {
      printMessage('Please enter data first');
    } else {
      var input = $scope.menu;
      var inputArray = input.split(',');
      var numberOfItems = numItems(inputArray);

      if(numberOfItems == 0) {
        printMessage('Please enter data first');
      }else {
        if(numberOfItems > 3) {
          printMessage('Too much!');
        } else {
          printMessage('Enjoy!');
        }
      }
    }
  };

  function printMessage(message) {
    $scope.message = message;
  }

  function numItems(itemArray) {
    var newArray = itemArray.filter( function (i) {
      return i.trim() !== '';
    });
    return newArray.length;
  }
}
})();
