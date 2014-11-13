angular.module('app').provider('RouteScreen', function($routeProvider) {
	this.resolveScreenUrl = function(surl) {
		return 'static/screen/'+surl+'.html';
	};

	this.when = function(routePattern, surl) {
		var routeDef = {
			templateUrl: this.resolveScreenUrl(surl)
		};

		$routeProvider.when(routePattern, routeDef);
	};

	this.setDefault = function(url) {
		var routeDef = {
			redirectTo: '/dashboard'
		};

		$routeProvider.when('/', routeDef);
	};

	this.$get = function() {

	};
});

