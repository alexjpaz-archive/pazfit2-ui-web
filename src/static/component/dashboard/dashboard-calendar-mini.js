angular.module('app').config(function(ComponentProvider, Chart) {
	ComponentProvider.register('dashboard-calendar-mini', {
		componentGroup: 'dashboard',
		scope: {},
		controller: function($scope) {
			$scope.days = [];

			for(var i=0;i<30;i++) {
				$scope.days.push({});
			}

			$scope.days[5].log = true;
			$scope.days[7].max = true;

			$scope.days[15].max = true;
			$scope.days[15].log = true;
		}
	});
});
