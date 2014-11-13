angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-log-edit', {
		ScreenTitle: 'Log Workout',
		controller: function($scope, $location, $routeParams, Restangular) {
			var r = null;
			if($routeParams.id !== 'new') {
				r = Restangular.one('log',$routeParams.id);
				r.get().then(function(m) {
					$scope.m = m;
					$scope.m.date = new Date($scope.m.date);
				});
			} else {
				$scope.m = Restangular.one('log');
				$scope.m.date = new Date();
				$scope.m.reps = 5;
			}


			$scope.save = function(m) {
				m.save().then(function(m) {
					$location.path('/log');
				});
			};

		}
	});
});

