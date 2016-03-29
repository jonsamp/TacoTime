'use strict';

/**
 * @ngdoc overview
 * @name desktopApp
 * @description
 * # desktopApp
 *
 * Main module of the application.
 */
var app = angular.module('TacoTime', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngGeolocation',
    'angularReverseGeocode'
  ])
  .config(['$routeProvider',
    '$compileProvider',
    function($routeProvider, $compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(uber|https?|tel):/);

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })
        .when('/list', {
          templateUrl: 'views/list.html',
          controller: 'ListController',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });

    }
  ]);
