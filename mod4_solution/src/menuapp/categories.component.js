(function () {
'use strict';

angular.module('data ')
.component('categories', {
  templateUrl: 'src/shoppinglist/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
