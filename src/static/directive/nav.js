angular.module('app').directive('navActive', function(jQuery) {
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
			var el = jQuery(element);	
			element.css({ background: 'red'} )
			console.debug('lol');
			var href = null;

			var el = element.find('a');



		}
	}
});
