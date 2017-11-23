(function () {
'use strict';

angular.module('data ')
.component('items', {
  templateUrl: 'src/shoppinglist/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
