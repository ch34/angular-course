(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo','ApiPath', 'UserService'];
function MyInfoController(userInfo, ApiPath, UserService) {
  var myInfo = this;

  myInfo.user = userInfo;
  myInfo.basePath = ApiPath;

  if(myInfo.user != null) {
    UserService.setUserSignedUp(true);
  }

}

})();
