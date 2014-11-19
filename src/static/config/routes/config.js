angular.module('app').config(function($routeProvider, RouteScreenProvider) {
	RouteScreenProvider.when('/config', 'config/index');
	RouteScreenProvider.when('/config/debug', 'config/debug');
});
