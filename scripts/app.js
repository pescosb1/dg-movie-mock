(function() {

  var dgMovieApp = angular.module('dgMovieApp', ['ngRoute']);

  dgMovieApp.config(function($routeProvider) {
          $routeProvider
               .when('/', {
                    templateUrl: 'movie.html',
                    controller: 'MovieController'
               });
     });

}());
