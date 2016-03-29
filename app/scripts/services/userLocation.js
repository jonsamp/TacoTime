'use strict';
angular.module('TacoTime')
  .factory('userLocation', ['$geolocation', function($geolocation) {

    var getLocation = function() {
      return $geolocation.getCurrentPosition({

      }).then(function(position) {
        return{
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        };
      });
    };

    return {
      getLocation: getLocation,
    };

  }]);
