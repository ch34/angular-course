describe('menuService', function () {

  var menuService;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiBasePath = $injector.get('ApiPath');
    });
  });

  it('should return favorite dish', function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items/L2.json').respond(['L2']);
    menuService.getFavoriteDish('L2').then(function(response) {
      expect(response).toEqual(['L2']);
    });
    $httpBackend.flush();
  });

});
