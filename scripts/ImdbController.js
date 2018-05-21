(function() {

    var imdb = function($http, $log) {

         var searchTerm = 'Batman';
         var apiKey = '52da51c';

         var getMovies = function() {
              return $http.get('http://www.omdbapi.com/?apikey=' + apiKey + '&s=' + searchTerm)
                   .then(function(response) {
                        return response.data.Search;
                   });
         };

         var getMovieDetails = function(movieId) {
              var movie;
              var movieUrl = 'http://www.omdbapi.com/?apikey=' + apiKey + '&i=' + movieId;
         
              return $http.get(movieUrl)
                   .then(function(response) {
                        movie = response.data;
                        return movie;
                   });
         };

         return {
              getMovies: getMovies,
              getMovieDetails: getMovieDetails
         };
    };

    var module = angular.module('dgMovieApp')
         .service('imdb', imdb); //register service with angular


}());
