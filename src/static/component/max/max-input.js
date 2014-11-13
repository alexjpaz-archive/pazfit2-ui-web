angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('max-input', {
		componentGroup: 'max',
		scope: {'inputModel':'=maxInput'},
	});
});
