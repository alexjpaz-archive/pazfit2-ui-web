angular.module('app').provider('Component', function(StringHelper, ComponentTemplateResolver, $compileProvider, $injector) {
	this.register = function(component_name, directiveDefinition) {
		var componentName = StringHelper.dashToCamel(component_name);

		var directiveDefinitionFactory = function() {

			if(angular.isFunction(directiveDefinition)) {
				directiveDefinition = $injector.invoke(directiveDefinition);
			}


			var finalDirectiveDefinition = {
				restrict: 'EA',
				templateUrl: ComponentTemplateResolver.resolve(component_name, directiveDefinition)
			};

			angular.extend(finalDirectiveDefinition, directiveDefinition);

			return finalDirectiveDefinition;
		};


		$compileProvider.directive(componentName, directiveDefinitionFactory);
	};

	this.$get = function() {

	};
});


