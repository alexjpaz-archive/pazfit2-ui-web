angular.module('app').config(function(ComponentProvider, d3) {
	var Graph = function(element) {
		var that = this;

		var el = {
			width: element.width(),
			height: 200
		};

		this.updateDomain = function(data) {

		};
	};


	ComponentProvider.register('graph', {
		componentGroup: 'graph',
		scope: {
			'graph': '=',
			'type': '@'
		},
		link: function(scope, element, attrs) {
			var graph = new Graph(element);

			//var f = {

			//}, // functions
			//el = element.find('svg');
			//sx = d3.time.scale(),
			//sy = d3.scale.linear();

			//f.pathl = d3.svg.line()
			//.x(function(d,i) { return d.x * 200; })
			//.y(function(d,i) { return d.y * 5; })
			//.interpolate("step-before");

			//f.rX = function(d) { return d.x; };
			//f.rY = function(d) { return d.y; };

			var update = function(graph) {
				if(angular.isUndefined(graph)) {
					return;
				}

				$scope.ready = false;
				
				graph.updateDomain(graph);

				$scope.ready = true;
			};

			$scope.graph = graph;
			scope.$watch('graph', update);
		}
	});
});
