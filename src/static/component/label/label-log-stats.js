angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('label-log-stats', {
		componentGroup: 'label',
		scope: {'labelLogStats':'='},
	});
});
