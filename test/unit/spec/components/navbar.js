'use strict';

describe('Component: navbarComponent', function () {

  describe('Directive: navbarComponent', function () {
    var element, scope, $compile;

    beforeEach(function () {

      module('ndc');

      inject(function ($rootScope, _$compile_) {
        scope = $rootScope.$new();
        $compile = _$compile_;
      });

    });

    xit('should have the component class', function () {
      element = angular.element('<navbar-component></navbar-component>');
      element = $compile(element)(scope);
      scope.$digest();
      expect(element).toHaveClass('navbar-component');
    });

  });

  describe('Controller: navbarComponentCtrl', function () {

    var Ctrl, scope, element;

    beforeEach(function () {

      module('ndc');

      inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        element = angular.element('<navbar-component></navbar-component>');
        Ctrl = $controller('navbarComponentCtrl', {
          $scope: scope,
          $element: element
        });
      });
    });

    it('should expose the users auth state');

  });

});