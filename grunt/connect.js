module.exports = {
	server: {
		options: {
			port: 9001,
			keepalive: true,
			hostname: '0.0.0.0',
			base: 'dist',
			middleware: function (connect, options) {
				var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
				var middlewares = [proxy];
				var directory = options.directory ||
					options.base[options.base.length - 1];
				if (!Array.isArray(options.base)) {
					options.base = [options.base];
				}

				options.base.forEach(function(base) {
					// Serve static files.
					middlewares.push(connect.static(base));
				});

				// Make directory browse-able.
				return middlewares;
          }
		},
		proxies: [
			{
				context: '/api',
				host: 'localhost',
				port: 5000,
				xforward: true,
				rewrite: {
					'^/api//': '/',
					'^/api': ''
				}
			}
		]
	}
};
