angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-dashboard-index', {
		ScreenTitle: 'Dashboard',
		controller: function($scope, Restangular) {
			Restangular.all('log').getList().then(function(logs) {

			});
		}
	});
});
