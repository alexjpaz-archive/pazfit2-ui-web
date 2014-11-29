angular.module('app').config(function(ScreenProvider) {
	ScreenProvider.register('screen-log-edit', {
		ScreenTitle: 'Log Workout',
		controller: function($scope, $routeParams, Restangular) {
			$scope.q = {};
			var r = null;

			$scope.getLog = function(id) {
				Restangular.one('log', id).get().then(function(l) {
					$scope.l = l;
				});
			};

			if($routeParams.id !== 'new') {
				$scope.getLog($routeParams.id);
			} else {
				$scope.l = Restangular.one('log');
				$scope.l.date = new Date();
				$scope.l.reps = 5;
			}

			$scope.save = function(m) {
				$scope.error = null;
				
				var q;

				$scope.q.save = q = m.save();

				q.then(function(l) {
					$scope.l._etag = l._etag;
					$scope.getLog(l._id);
				}, function(rsp) {
					$scope.error = rsp.data;
				});
			};
		}
	});
});

