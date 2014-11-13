angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('layout-bottom-actions', {
		componentGroup: 'layout',
		replace: true,
		transclude: true
	});
});
