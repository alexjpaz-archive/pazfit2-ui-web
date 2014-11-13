angular.module('app').config(function($routeProvider, RouteScreenProvider) {
	RouteScreenProvider.when('/max', 'max/index');
	RouteScreenProvider.when('/max/schedule', 'max/schedule');
	RouteScreenProvider.when('/max/:id/edit', 'max/edit');
});
