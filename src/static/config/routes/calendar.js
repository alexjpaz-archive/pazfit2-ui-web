angular.module('app').config(function($routeProvider, RouteScreenProvider) {
	RouteScreenProvider.when('/calendar', 'calendar/index');
});
