var app = angular.module("TacoTime", ['ngRoute']);
// When ready...
window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);
});
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
