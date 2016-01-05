angular.module('discWarsApp')
.factory('individualData', function individualDataFactory() {
	var getVenues = {};
	getVenues.indVenue = function(venue) {
		return venue;
	};

	getVenues.getVenue = function() {
		return indVenue;
	};
	
	return getVenues;
});