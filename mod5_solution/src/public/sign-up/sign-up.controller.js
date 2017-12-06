(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
  // var $ctrl = this;
  // $ctrl.menuCategories = menuCategories;

  var reg = this;

  reg.validFavDish = false;
  reg.errorMessage = "";

  reg.submit = function () {
    console.log("IN SUBMIT: ");
    reg.completed = true;

  };

  reg.checkFavDish = function () {
    var promise = MenuService.getFavoriteDish(reg.user.favoritedish);
    promise.then(function (response) {
      console.log("RESPONSE" + response.data);
      reg.validFavDish = true;
    })
    .catch(function (error) {
      reg.errorMessage = "No such menu number exists";
      console.log("Something went terribly wrong.");
      reg.validFavDish = false;
    });
  }

  reg.setUser = function () {
    UserService.setUser(reg.user);
  }
}


})();
