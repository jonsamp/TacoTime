var x = "";
var myLat = "";
var myLong = "";

function randomString(length, chars) {
                var result = '';
                for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
                return result;
            }

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    x = position.coords.latitude + "," + position.coords.longitude;  

    myLat = position.coords.latitude;
    myLong = position.coords.longitude;
  }

app.factory('yelp', ['$http', function($http) {
  return {
      "retrieveYelp": function(name, callback) {
          var method = 'GET';
          var url = 'https://api.yelp.com/v2/search';
          var params = {
                  callback: 'angular.callbacks._0',
                  ll: x,
                  oauth_consumer_key: 'UeU0Qb0VntPjI8dA0XKqQw', //Consumer Key
                  oauth_token: 'M76_axaNseACrPZ6kjQofWM8Zl4QXotk', //Token
                  oauth_signature_method: "HMAC-SHA1",
                  oauth_timestamp: new Date().getTime(),
                  oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                  term: 'tacos',
                  sort: 1,
                  limit: 10
              };
          var consumerSecret = 'Jl7fibrfIw9H7DuUFcZpAyXsVb0'; //Consumer Secret
          var tokenSecret = 'jX4MjWLLuEnm50vzF6S-2T8D1nc'; //Token Secret
          var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
          params['oauth_signature'] = signature;
          $http.jsonp(url, {params: params}).success(callback);
      }
    }
}]);

$(document).ready(getLocation);
