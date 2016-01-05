angular.module('discWarsApp')
.directive('homePage', function() {
	return {
		templateUrl: "templates/pages/home/index.html",
		controller: "MainController"
	}
});