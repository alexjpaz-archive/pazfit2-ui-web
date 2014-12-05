angular.module('app').config(function(ComponentProvider, Chart) {
	ComponentProvider.register('dashboard-calendar', {
		componentGroup: 'dashboard',
		scope: {
			"dashboardCalendar": "=",
			"select": "&" 
		},
		controller: function($scope, $location) {
			$scope.$watch('dashboardCalendar', function(d) {
				$scope.events = angular.copy(d.events); // Force it
			}, true);

			$scope.selectDay = function(day) {
				$location
					.path('/calendar')
					.search('date',day.date)
				;
			};	
		}
	});
});
