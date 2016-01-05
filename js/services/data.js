	angular.module('discWarsApp')
	.factory('dataService', function dataServiceFactory($http) {
		return {
		    all: function() {
		      return $http({method: 'GET', url: "json/data.json"});
		    }
  		};
	});