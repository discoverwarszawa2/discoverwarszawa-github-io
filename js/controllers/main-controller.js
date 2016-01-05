   angular.module('discWarsApp')
       .controller('MainController', function($scope, dataService) {
           dataService.all().success(function(data) {
               $scope.venues = data;
           });
           $scope.getVenue = function(venue) {
               $scope.indVenue = {
                   indName: venue.venueName,
                   indLocation: venue.location,
                   indDate: venue.date,
                   indImage: venue.headimage,
                   indColor: venue.color,
                   indAddress: venue.address,
                   indLong: venue.mapLong,
                   indLat: venue.mapLat,
                   indImages: venue.images,
                   indDescription: venue.description
               };
               $scope.dataLoaded = true;
           };
           $scope.clicked = true;
           $scope.changeClick = function(bool) {
               $scope.clicked = bool;
           };
           $scope.resetSlick = function() {
              $scope.dataLoaded = false;
           }

       });
