angular.module('app').config(function($routeProvider, RouteScreenProvider) {
	RouteScreenProvider.when('/dashboard', 'dashboard/index');
});
