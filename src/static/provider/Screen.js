angular.module('app').provider('Screen', function($compileProvider, StringHelper, $injector) {
	var definitionInterceptors = [];

	this.addDefinitionInterceptor = function(interceptorFn) {
		
	};

	this.register = function(screen_name, screenDef) {
		var screenName = StringHelper.dashToCamel(screen_name);
		var screenDefFactory = function($rootScope) {
			var finalScreenDef = {
				restrict: 'C',
				compile: function() {
					$rootScope.ScreenTitle = screenDef.ScreenTitle || "NO_NAME";
				}
			};

			angular.forEach(definitionInterceptors, function(di) {
				$injector.invoke(fn, this);
			});

			angular.extend(finalScreenDef, screenDef);
			return finalScreenDef;
		};


		$compileProvider.directive(screenName, screenDefFactory);
	};

	this.$get = function() {

	};
});


