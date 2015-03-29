app.factory('yelp', ['$http', function($http) {
  return $http.get('****API LINK HERE****')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
