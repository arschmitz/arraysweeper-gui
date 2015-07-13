module.exports = {
	all: {
		files: [ "js/*.js", "scss/*.scss", "templates/*.hbs" ],
		tasks: [ "default" ],
		options: {
			spawn: false,
			interupt: true
		}
	}
};
