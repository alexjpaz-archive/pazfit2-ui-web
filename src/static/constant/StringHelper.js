angular.module('app').constant('StringHelper', new function() {
	function _dashToCamel(g) { 
		return g[1].toUpperCase() 
	}

	this.dashToCamel = function(string) {
		return string.replace(/-([a-z])/g, _dashToCamel);
	};

});	
