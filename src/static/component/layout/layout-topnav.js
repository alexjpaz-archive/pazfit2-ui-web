angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('layout-topnav', {
		componentGroup: 'layout',
		replace: true
	});
});
