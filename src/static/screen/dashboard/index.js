angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-dashboard-index', {
		ScreenTitle: 'Dashboard',
		controller: function($scope, Restangular, Profile, moment, $location, CalendarHelper) {
			$scope.calendar = {
				events: []
			};
			$scope.charts = {};

			$scope.selectDay = function(day, clndr) {
				$scope.selectedDay = day;
				clndr.active = day;
			};

			CalendarHelper.getEvents().then(function(calendar) {
				$scope.calendar = calendar;
			});

			function updateEvents(event) {
				return;
				var exists = false;
				angular.forEach($scope.calendar.events, function(ev) {
					if(ev.date === event.date) {
						exists = true;
						angular.extend(ev, event);
					}
				});

				if(!exists) {
					$scope.calendar.events.push(event);
				}
			}

			function getLatestMax() { 
				var query = {
					max_results: 1000,
					page: 1,
					sort: '-date'
				};	
				Restangular.all('max').getList(query).then(function(maxes) {
					angular.forEach(maxes, function(max) {
						updateEvents({
							date: max.date,
							max: max
						});
					});
				});
			}
			
			function getLatestLogs() {
				$scope.latestLog = {};
				$scope.bestLog = {};

				angular.forEach(Profile.lifts, function(v,lift) {
					var query = {
						max_results: 1000,
						page: 1,
						where: {
							lift: lift
						},
						sort: '-date'
					};

					Restangular.all('log').getList(query).then(function(log) {
						$scope.latestLog[lift] = log[0];

						updateChart(log, lift);



						angular.forEach(log, function(l) {
							updateEvents({
								date: l.date,
								log: l
							});
						});
					});

					query.sort = '-calculated.estimatedMax,-date';
					Restangular.all('log').getList(query).then(function(log) {
						$scope.bestLog[lift] = log[0];
					});
				});
			}

			function updateChart(logs, lift) {
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
						scaleIntegersOnly: true,
						datasetFill: false,
						pointDot: false,
						//legendTemplate: 'fart'

					}
				};

					angular.forEach(logs, function(log, i) {
						var str = moment(log.date).format('YYYY-MM-DD').toString();
						chart.data.labels.unshift(''); // HACK
						chart.data.datasets[0].data.unshift(log.calculated.estimatedMax);
						chart.data.datasets[1].data.unshift(log.calculated.effectiveMax);
						chart.data.datasets[2].data.unshift(log.calculated.targetMax);
						$scope.charts[lift] = chart;
					});

			}

			getLatestLogs();
			getLatestMax();
		}
	});
});
