angular.module('app').config(function($routeProvider, RouteScreenProvider) {
	RouteScreenProvider.when('/log', 'log/index');
	RouteScreenProvider.when('/log/:id/edit', 'log/edit');
});
