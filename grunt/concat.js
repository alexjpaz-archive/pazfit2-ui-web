module.exports = {
	dist_css: {
		src: ['src/static/**/*.css'],
		dest: 'dist/static/concat.css'
	},
	dist: {
		src: [
			'src/static/module.js',
			'src/static/constant/**/*.js',
			'src/static/provider/Enum.js',
			'src/static/provider/Component.js',
			'src/static/provider/RouteScreen.js',
			'src/static/provider/Screen.js',
			'src/static/config/overrides.js',
			'src/static/config/external/Restangular.js',
			'src/static/config/routes/**/*.js',
			'src/static/config/**/*.js',
			'src/static/run/**/*.js',
			'src/static/services/**/*.js',
			'src/static/controller/**/*.js',
			'src/static/directive/**/*.js',
			'src/static/filter/**/*.js',
			'src/static/component/**/*.js',
			'src/static/screen/**/*.js'
		],
		dest: 'dist/static/build.js'
	},
};
