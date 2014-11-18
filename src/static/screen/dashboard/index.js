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

				angular.forEach(Profile.lifts, function(v,lift) {
					var query = {
						max_results: 1,
						page: 1,
						where: {},
						sort: '-date'
					};

					//query.where[lift] = {
						//date: { '$
					//};

					Restangular.all('log').getList(query).then(function(log) {
						$scope.latestMax[lift] = log;
					});
				});
			}

			getLatestLogs();
			getLatestMax();
		}
	});
});
