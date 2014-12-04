angular.module('app').directive('component', function(ComponentTemplateResolver) {
	return {
		templateUrl: function(element, attrs) {
			return ComponentTemplateResolver.resolve(attrs.component);
		}
	};
});
