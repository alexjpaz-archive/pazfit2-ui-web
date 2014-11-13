angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-log-index', {
		ScreenTitle: 'List Log',
		controller: function($scope, Restangular) {
			$scope.getLogList = function() {
				Restangular.all('log').getList().then(function(logs) {
					$scope.logs = logs;
				});
			};

			$scope.remove = function(m) {
				m.remove();
			};

			$scope.getLogList();

		}
	});
});

