(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);


// UserService.$inject = ['$http', 'ApiPath'];
function UserService() {
  var service = this;

  var user;

  service.setUser = function (userInfo) {
    user = userInfo;
  };

  service.getUser = function () {
    return user;
  };

}



})();
