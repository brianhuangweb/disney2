/**
 * Created by HX on 9/30/16.
 */

var movieApp = angular.module('movieApp', []);

movieApp.controller('movieCtrl', ['$scope', '$http', function (scope, http){
    http.get('dma-interview.json').success(function(data) {
        scope.movies = data.items;
    });
}]);

movieApp.filter('toHourMinSec', function(){
    return function(seconds) {
        var hours = Math.floor((seconds % 86400) / 3600);
        var mins = Math.floor(((seconds % 86400) % 3600) / 60);
        var secs = ((seconds % 86400) % 3600) % 60;

        return (hours+ 'hours ') + (mins+'mins ') + (secs+'secs ');
    };
});