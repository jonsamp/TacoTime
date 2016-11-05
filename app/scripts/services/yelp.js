angular.module('TacoTime')
    .factory("yelpAPI", function($http) {
        'use strict';

        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) {
                result += chars[Math.round(Math.random() * (chars.length - 1))];
                return result;
            }
        }
        return {
            "retrieveYelp": function(longitude, latitude, YELP_CONFIG, callback) {
                var method = 'GET';
                var url = 'http://api.yelp.com/v2/search';
                var params = {
                    callback: 'angular.callbacks._0',
                    ll: latitude + ", " + longitude,
                    oauth_consumer_key: YELP_CONFIG.consumerKey,
                    oauth_token: YELP_CONFIG.consumerToken,
                    oauth_signature_method: "HMAC-SHA1",
                    oauth_timestamp: new Date().getTime(),
                    oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                    term: 'taco',
                    limit: 10
                };
                var consumerSecret = YELP_CONFIG.consumerSecret;
                var tokenSecret = YELP_CONFIG.tokenSecret;
                var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, {
                    encodeSignature: false
                });
                params.oauth_signature = signature;
                $http.jsonp(url, {
                    params: params
                }).success(callback).error(function(err) {
                    window.location.reload();
                });
            }
        };
    });
