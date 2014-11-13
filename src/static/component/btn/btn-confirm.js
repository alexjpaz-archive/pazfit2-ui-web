angular.module('app').config(function(ComponentProvider,StringHelper) {
	ComponentProvider.register('btn-confirm', {
		componentGroup: 'btn',
		replace: true,
		transclude: true,
		controller: function($scope) {
			$scope.c = {};
			$scope.c.hideBody = false;
		},
	});
});
