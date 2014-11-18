module.exports = {
	dist: {
		files: [
			{expand: true, cwd:'src', src: ['**'], dest: 'dist/', filter: 'isFile'},
		]
	}
};
