angular.module('TacoTime')
  .controller('HomeController', ['userLocation', function(userLocation) {
    'use strict';
    var vm = this;
    vm.getUserLocation = function() {
      userLocation.getLocation()
        .then(function(data) {
          vm.longitude = data.longitude;
          vm.latitude = data.latitude;
        });
    };
  }]);
