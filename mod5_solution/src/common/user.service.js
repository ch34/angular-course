(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;

  var user;

  var userSignedUp;

  service.setUser = function (userInfo) {
    user = userInfo;
  };

  service.getUser = function () {
    return user;
  };

  service.setUserSignedUp = function (userStatus) {
    userSignedUp = userStatus;
  };

  service.getUserSignedUp = function () {
    return userSignedUp;
  };
}



})();
