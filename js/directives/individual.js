angular.module('discWarsApp')
.directive('indData', function() {
	return {
		templateUrl: "templates/pages/venue/index.html",
		controller: "IndividualController"
	}
})