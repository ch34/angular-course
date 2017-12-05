(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuCategories'];
function SignUpController(menuCategories) {
  // var $ctrl = this;
  // $ctrl.menuCategories = menuCategories;

  var reg = this;

  reg.submit = function () {
    reg.completed = true;
  };
}


})();
