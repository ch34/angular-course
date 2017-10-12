(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.menu = '';

  $scope.checkInput = function () {
    if($scope.menu == '') {
      printMessage('Please enter data first', 'red');
    } else {
      var input = $scope.menu;
      var inputArray = input.split(',');
      var numberOfItems = numItems(inputArray);

      if(numberOfItems == 0) {
        printMessage('Please enter data first', 'red');
      }else {
        if(numberOfItems > 3) {
          printMessage('Too much!', 'green');
        } else {
          printMessage('Enjoy!', 'green');
        }
      }
    }
  };

  function printMessage(message, color) {
    $scope.message = message;
    $scope.fontStyle = {
      'color': color
    };
    $scope.inputBoxStyle = {
      'border-color': color,
      'border-style': 'solid'

    };
  }

  function numItems(itemArray) {
    var newArray = itemArray.filter( function (i) {
      return i.trim() !== '';
    });
    return newArray.length;
  }
}
})();
