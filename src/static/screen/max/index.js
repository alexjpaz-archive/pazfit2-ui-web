angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-max-index', {
		ScreenTitle: 'List Maxes',
		controller: function($scope, Restangular) {
			$scope.q = {};
			$scope.getMaxList = function() {
				$scope.q.max = Restangular.all('max').getList({sort:'-date'}).then(function(maxes) {
					$scope.maxes = maxes;
				});
			};

			$scope.remove = function(m) {
				m.remove();
			};

			$scope.getMaxList();
		}
	});
});

