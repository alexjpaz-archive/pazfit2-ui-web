angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-max-edit', {
		ScreenTitle: 'Edit Max',
		controller: function($scope, $routeParams, Restangular, $location, $http) {

			if($routeParams.id !== 'new') {
				var r = Restangular.one('max',$routeParams.id);
				r.get({sort:"-date"}).then(function(m) {
					$scope.m = m;
					$scope.m.date = new Date($scope.m.date);
				});
			} else {
				$scope.m = Restangular.one('max');
				$scope.m.date = new Date();
			}

			$scope.check = function(m) {
				var q = {
					where: {
						date: {
							"$gte": m.date
						}
					}
				};

				$scope.check = {};
				Restangular.all('log').getList(q).then(function(logs) {
					if(logs.length === 0) {
						$scope.save(m);
					} else {
						$scope.check = {
							logs: logs
						};

					}
				});
			};

			$scope.save = function(m, force) {
				m.save().then(function(m) {
					$location.path('/max');
				});
			};
		}
	});
});

