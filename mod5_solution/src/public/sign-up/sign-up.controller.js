(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {

  var reg = this;
  reg.validDishMenu = false;
  reg.errorMessage = "";
  reg.submitMessage = "";
  reg.isUserSignedUp = UserService.getUserSignedUp();

  reg.submit = function () {

    reg.completed = true;
    reg.setUser();
    reg.submitMessage = "Your information has been saved.";
  };

  reg.checkFavDish = function () {
    var promise = MenuService.getFavoriteDish(reg.user.favoritedish);
    promise.then(function (response) {

      reg.user.favoritedishobj = response;
      reg.errorMessage = "";
      reg.validDishMenu = true;
    })
    .catch(function (error) {
      reg.errorMessage = "No such menu number exists";
      reg.validDishMenu = false;
    });
  }

  reg.setUser = function () {
    UserService.setUser(reg.user);
  }
}


})();
