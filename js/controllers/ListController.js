app.controller('ListController', ['$scope', 'yelp', function($scope, yelp) {
		$scope.yelpresults = [];
        yelp.retrieveYelp('', function(data) {
	        $scope.yelpresults = data.businesses;
    	});


}]);