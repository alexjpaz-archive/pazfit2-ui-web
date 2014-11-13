angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('layout-topnav-links', {
		componentGroup: 'layout',
		replace: true
	});
});
