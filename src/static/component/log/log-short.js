angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('log-short', {
		componentGroup: 'log',
		scope: {'logShort':'='},
		controller: function($scope, Profile) {

		}
	});
});
