module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'dist/static/build.css': 'src/style.scss'
				}
			}
		},
		concat: {
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
					'src/static/config/external/Restangular.js',
					'src/static/config/routes/**/*.js',
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
		},
		copy: {
			dist: {
				files: [
					{expand: true, cwd:'src', src: ['**'], dest: 'dist/', filter: 'isFile'},
				]
			}
		},
		bower: {
			dist: {
				dest: 'dist/static/bower'
			},
		},
		watch: {
			eve: {
				files: ['src/*.py'],
				tasks: ['copy']
			},
			all: {
				files: ['src/**'],
				tasks: ['sass','concat','copy']
			}
		}
	});

	grunt.loadNpmTasks('grunt-bower');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['bower','concat','copy'])

};
