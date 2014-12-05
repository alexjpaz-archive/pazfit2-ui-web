angular.module('app').service('CalendarHelper', function(Restangular, $q) {
	this.getEvents = function() {
		var deferred = $q.defer()

		var q = {};

		var calendar = {
			logs: [],
			maxes: [],
			events: []
		};

		var query = {
			max_results: 1000,
			sort: '-date'
		};

		function updateEvents(event) {
			var exists = false;
			angular.forEach(calendar.events, function(ev) {
				if(ev.date === event.date) {
					exists = true;
					angular.extend(ev, event);
				}
			});

			if(!exists) {
				calendar.events.push(event);
			}
		}

		q.log = Restangular.all('log').getList(query).then(function(logs) {
			angular.forEach(logs, function(log) {
				updateEvents({
					date: log.date,
					log: log
				});
				calendar.logs.push(log);
			});
		});

		q.max = Restangular.all('max').getList(query).then(function(maxes) {
			angular.forEach(maxes, function(max) {
				updateEvents({
					date: max.date,
					max: max
				});
				calendar.maxes.push(max);
			});
		});

		$q.all(q).then(function() {
			deferred.resolve(calendar);
		});

		return deferred.promise;
	};
});
