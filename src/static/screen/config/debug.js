angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-config-debug', {
		ScreenTitle: 'Config (Debug)',
		controller: function($scope, Restangular, Profile, AppConfig) {
			$scope.AppConfig = AppConfig;
			$scope.$watch('AppConfig', function(AppConfig) {
				localStorage.setItem('AppConfig', JSON.stringify(AppConfig));
			}, true);
		}
	});
});
