angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('layout-offcanvas-right', {
		componentGroup: 'layout',
		replace: true
	});
});
