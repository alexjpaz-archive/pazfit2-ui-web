angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('b-panel', {
		componentGroup: 'b',
		replace: true,
		transclude: true,
		controller: function($scope) {
			$scope.c = {};
			$scope.c.hideBody = false;
		},
		scope: {'bPanel':'@'}
	});
});
