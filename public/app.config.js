'use strict';

angular.
  module('bootstrapApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/authenticate', {
          template: '<authenticate></authenticate>'
        }).
        otherwise('/authenticate');
    }
  ]);