var app = angular.module("TacoTime", ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/list', {
    	controller: 'ListController', 
      templateUrl: 'views/list.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});