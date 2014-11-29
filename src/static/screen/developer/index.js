angular.module('app').config(function(ScreenProvider) {
    ScreenProvider.register('screen-developer-index', {
        ScreenTitle: 'Log Workout',
        controller: function($scope, Restangular) {
            $scope.logsDiff = [];
            $scope.logs = [];

            var query = {
                sort: '-date'
            };
            Restangular.all('log').getList(query).then(function(logs) {
                $scope.logs = logs;
            });

            $scope.get2 = function(index, id) {
                Restangular.one('log', id).get().then(function(log) {
                    $scope.logs[index] = log;
                });
            };

            $scope.$watch('logs', function(n,o) {
                for(var i=0;i<n.length;i++) {
                    if(n[i] === o[i]) {
                        $scope.logsDiff[i] = true; 
                    } else {
                        $scope.logsDiff[i] = false; 
                    }
                }

            }, true);
        }
    });
});

