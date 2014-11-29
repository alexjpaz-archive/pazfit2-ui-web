angular.module('app').config(function($routeProvider, RouteScreenProvider) {
	RouteScreenProvider.when('/developer', '/developer/index');
});
