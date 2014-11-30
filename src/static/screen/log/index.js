angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-log-index', {
		ScreenTitle: 'List Log',
		controller: function($scope, Restangular) {
			$scope.getLogList = function() {
				var query = {
					sort: '-date'
				};
				Restangular.all('log').getList(query).then(function(logs) {
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

