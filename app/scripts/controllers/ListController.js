angular.module('TacoTime')
	.controller('ListController', [
		'$scope',
		'yelpAPI',
		'userLocation',
		'UBER_CONFIG',
		'YELP_CONFIG',

		function($scope, yelpAPI, userLocation, UBER_CONFIG, YELP_CONFIG) {
			'use strict';
			var vm = this;

			vm.getTacoResults = function() {

				userLocation.getLocation()
					.then(function(data) {
						vm.longitude = data.longitude;
						vm.latitude = data.latitude;

						$scope.yelpresults = [];
						yelpAPI.retrieveYelp(vm.longitude, vm.latitude, YELP_CONFIG, function(data) {

							console.log(data);

							var businesses = data.businesses.map(function(business) {

								var googleDirectionsUrl = "http://maps.google.com/?saddr=" + vm.latitude + "," + vm.longitude + "&daddr=" + business.location.coordinate.latitude + "," + business.location.coordinate.longitude + "&dirflg=w";
								var addressUrl = business.location.address[0] + ", " + business.location.city + ", " + business.location.state_code + " " + business.location.postal_code;
								var uberUrl = "uber://?client_id=" + UBER_CONFIG.clientId + "&action=setPickup&pickup=my_location&dropoff[latitude]=" + business.location.coordinate.latitude + "&dropoff[longitude]=" + business.location.coordinate.longitude + "&dropoff[formatted_address]=" + encodeURIComponent(addressUrl) + "&dropoff[nickname]=" + business.name;
								return {
									distance: Math.round((business.distance * 0.000621371) * 27),
									is_closed: business.is_closed,
									mobile_url: business.mobile_url,
									name: business.name,
									phone: business.phone,
									formatted_address: business.location.address[0] + " " + business.location.city + ", " + business.location.state_code,
									snippet_text: business.snippet_text,
									image_url: business.image_url,
									snippet_image_url: business.snippet_image_url,
									rating_img_url: business.rating_img_url,
									url: business.url,
									latitude: business.location.coordinate.latitude,
									longitude: business.location.coordinate.longitude,
									googleDirectionsUrl: googleDirectionsUrl,
									uberUrl: uberUrl,
								};
							});
							vm.yelpresults = businesses;
						});
					});
			};
		}
	]);
