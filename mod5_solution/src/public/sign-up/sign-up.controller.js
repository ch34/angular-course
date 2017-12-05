(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  // var $ctrl = this;
  // $ctrl.menuCategories = menuCategories;

  var reg = this;

  reg.submit = function () {
    console.log("IN SUBMIT: ");
    reg.completed = true;
    var promise = MenuService.getFavoriteDish(reg.user.favoritedish);
    promise.then(function (response) {
      console.log("RESPONSE" + response.data);
    })
    .catch(function (error) {
      reg.errorMessage = "No such menu number exists";
      console.log("Something went terribly wrong.");
    });
  };
}


})();
