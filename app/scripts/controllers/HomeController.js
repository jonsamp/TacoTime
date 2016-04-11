angular.module('TacoTime')
    .controller('HomeController', ['userLocation', function(userLocation) {
        'use strict';
        var vm = this;
        vm.gettingUserLocation = false;

        vm.getUserLocation = function() {
            vm.gettingUserLocation = true;
            userLocation.getLocation()
                .then(function(data) {
                    vm.longitude = data.longitude;
                    vm.latitude = data.latitude;
                    vm.gettingUserLocation = false;
                });
        };

    }]);
