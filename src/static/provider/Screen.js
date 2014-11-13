angular.module('app').provider('Screen', function($compileProvider, StringHelper) {
	this.register = function(screen_name, screenDef) {
		var screenName = StringHelper.dashToCamel(screen_name);
		var screenDefFactory = function($rootScope) {
			var finalScreenDef = {
				restrict: 'C',
				compile: function() {
					$rootScope.ScreenTitle = screenDef.ScreenTitle || "NO_NAME";
				}
			};
			angular.extend(finalScreenDef, screenDef);
			return finalScreenDef;
		};


		$compileProvider.directive(screenName, screenDefFactory);
	};

	this.$get = function() {

	};
});


