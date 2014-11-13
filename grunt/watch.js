module.exports = {
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
};
