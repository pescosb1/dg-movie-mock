(function() {

  var dgMovieMain = angular.module('dgMovieApp');

  var MovieController = function($scope, $log, imdb) {
       
       var listSize = 10;
       var movieDetailsList = []; 
       var show = true;

       var onMovies = function(data){
            $scope.movies = data;
       };
       
       var onError = function(reason) {
            $scope.error = 'This is embarassing. This never happens. I swear. Something failed.';
       };
       
       $scope.displayByYear = function(year){
          $('#sortButtons button').removeClass('active');
          $('#year'+year).toggleClass('active');
          var sortDecade = year.slice(0,-1);
          if (year == '2000'){
            $('.moviesRow').hide();
            $('[class*="sort-2"]').show();
          } else {
            $('.moviesRow').hide();
            $('[class*="sort-'+sortDecade+'"]').show();
          }
       };

       imdb.getMovies().then(onMovies,onError);
       
  };

  dgMovieMain.controller('MovieController', MovieController);

}());