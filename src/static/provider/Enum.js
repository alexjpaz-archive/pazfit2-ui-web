angular.module('app').provider('Enum', function() {
	function Enum() {
	}

	var instance = new Enum();

	this.$get = function($rootScope) {
		$rootScope.Enum = instance;

		return instance;
	};
});
