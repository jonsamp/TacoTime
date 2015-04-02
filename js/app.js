var app = angular.module("TacoTime", ['ngRoute']);

app.config(['$routeProvider',
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
