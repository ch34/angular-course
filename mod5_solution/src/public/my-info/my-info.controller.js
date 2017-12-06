(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo'];
function MyInfoController(userInfo) {
  var myInfo = this;

  myInfo.user = userInfo;

}

})();
