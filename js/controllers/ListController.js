app.controller('ListController', ['$scope', 'yelp', function($scope, yelp) {
	$scope.myLat = myLat;
	$scope.myLong = myLong;
	
		$scope.yelpresults = [];
        yelp.retrieveYelp('', function(data) {
	        $scope.yelpresults = data.businesses;
	        $scope.Math = window.Math;
    	});


}]);