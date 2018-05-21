(function() {

    var dgMovieDetails = angular.module('dgMovieApp');
  
    var MovieDetailsController = function($scope, $log, imdb) {
        var movieId = $scope.$parent.movie.imdbID;
        var poster = $scope.$parent.movie.Poster
        var onInfo = function(data){
            $scope.movieDetails = data;
            $scope.$parent.movie["posterImage"] = $scope.$parent.movie.Poster.replace('https://ia.media-imdb.com/images/M/','content/images/');
        };
         
         var onError = function(reason) {
              $scope.error = 'This is embarassing. This never happens. I swear. Something failed.'
         };

         imdb.getMovieDetails(movieId).then(onInfo,onError);
         
    };
  
    dgMovieDetails.controller('MovieDetailsController', MovieDetailsController);
  
  }());