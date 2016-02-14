'use strict';

/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */
var app = angular
  .module('TacoTime', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider',
    function($routeProvider) { 
    $routeProvider
          // route for the home page
          .when('/', {
              templateUrl : 'views/home.html',
              controller  : 'HomeController'
          })

          // route for the directions page
          .when('/list', {
              templateUrl : 'views/list.html',
              controller  : 'ListController'
          })
          .otherwise({ 
            redirectTo: '/' 
          });

  }]);
