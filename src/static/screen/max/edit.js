angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-max-edit', {
		ScreenTitle: 'Edit Max',
		controller: function($scope, $routeParams, Restangular, $location, $http) {

			if($routeParams.id !== 'new') {
				var r = Restangular.one('max',$routeParams.id);
				r.get().then(function(m) {
					$scope.m = m;
					$scope.m.date = new Date($scope.m.date);
				});
			} else {
				$scope.m = Restangular.one('max');
				$scope.m.date = new Date();
			}


			$scope.save = function(m) {
				m.save().then(function(m) {
					$location.path('/max');
				});
			};
		}
	});
});

