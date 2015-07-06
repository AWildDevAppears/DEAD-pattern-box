angular.module('pattern-box')
  .directive('heading', function () {
      return {
        restrict: 'E',
        templateUrl: 'shared/directives/header.html'
      };
  });
