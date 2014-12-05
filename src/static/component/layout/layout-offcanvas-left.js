angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('layout-offcanvas-left', {
		componentGroup: 'layout',
		replace: true,
		link: function(scope, element) {
			element.find('a').bind('click', function() {
				element.offcanvas('hide');
			});
		}
	});
});
