angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-dashboard-index', {
		ScreenTitle: 'Dashboard',
		controller: function($scope, Restangular, Profile) {

			function getLatestMax() { 
				var query = {
					max_results: 1,
					page: 1,
					where: {
						press: { '$lte' : 90 }

					}
				};	
				Restangular.all('max').getList(query).then(function(maxes) {
					$scope.latestMax = maxes[0];
				});
			}
			
			function getLatestLogs() {
				$scope.latestLog = {};
				$scope.bestLog = {};

				angular.forEach(Profile.lifts, function(v,lift) {
					var query = {
						max_results: 1,
						page: 1,
						where: {
							lift: lift
						},
						sort: '-date'
					};

					Restangular.all('log').getList(query).then(function(log) {
						$scope.latestLog[lift] = log[0];
					});

					query.sort = '-calculated.estimatedMax,-date';
					Restangular.all('log').getList(query).then(function(log) {
						$scope.bestLog[lift] = log[0];
					});
				});
			}

			getLatestLogs();
			getLatestMax();
		}
	});
});
