angular.module('app').config(function(ComponentProvider, Chart) {
	ComponentProvider.register('dashboard-calendar', {
		componentGroup: 'dashboard',
		scope: {
			"dashboardCalendar": "=",
		},
		controller: function($scope) {
			$scope.$watch('dashboardCalendar', function(d) {
				$scope.events = angular.copy(d.events); // Force it
			}, true);
		}
	});
});
