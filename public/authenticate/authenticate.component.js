'use strict';

angular.
  module('authenticate').
  component('authenticate', {
    templateUrl: 'authenticate/authenticate.template.html',
    controller: ['$http', 
    function AuthenticateController($http){
      var self = this;

      self.runAuth = function runAuth(){

      };
    }]
  });