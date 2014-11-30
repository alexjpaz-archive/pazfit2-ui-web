angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-dashboard-index', {
		ScreenTitle: 'Dashboard',
		controller: function($scope, Restangular, Profile, moment) {

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

			function getLogs() {
				var chart = {
					data: {
						labels: [],
						datasets: [
							{
							label: "Estimated Max",
							fillColor: "rgba(0,0,220,0)",
							strokeColor: "rgba(0,0,220,1)",
							pointColor: "rgba(0,0,220,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(220,220,220,1)",
							data: []
						},
						{
							label: "Effective Max",
							fillColor: "rgba(220,0,0,0)",
							strokeColor: "rgba(220,0,0,1)",
							pointColor: "rgba(220,0,0,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(151,187,205,1)",
							data: []
						},
						{
							label: "Target Max",
							fillColor: "rgba(220,0,220,0)",
							strokeColor: "rgba(220,0,220,1)",
							pointColor: "rgba(220,0,220,1)",
							pointStrokeColor: "#fff",
							pointHighlightFill: "#fff",
							pointHighlightStroke: "rgba(151,187,205,1)",
							data: []
						}
						]
					},
					options: {
						//tooltips: true,
						//showTooltip: true,
						//tooltipTemplate: "ass",
							multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>",
						responsive: true,
						//legendTemplate: 'fart'

					}
				};

				var query = {
					max_results: 30,
					page: 1,
					where: {
						lift: 'bench'
					},
					sort: '-date'
				};

				Restangular.all('log').getList(query).then(function(logs) {
					angular.forEach(logs, function(log, i) {
						var str = moment(log.date).format('YYYY-MM-DD').toString();
						chart.data.labels.unshift(str);
						chart.data.datasets[0].data.unshift(log.calculated.estimatedMax);
						chart.data.datasets[1].data.unshift(log.calculated.effectiveMax);
						chart.data.datasets[2].data.unshift(log.calculated.targetMax);
						$scope.chart = chart;
					});
				});

			}

			getLatestLogs();
			getLatestMax();
			getLogs();
		}
	});
});
