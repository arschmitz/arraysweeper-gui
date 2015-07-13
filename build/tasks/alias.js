module.exports = function( grunt ) {

grunt.registerTask( "default", [ "build", "test" ] );
grunt.registerTask( "build", [
	"handlebars",
	"concat",
	"sass",
	"cssmin",
	"uglify",
	"jsdox",
	"copy",
	"clean"
] );
grunt.registerTask( "test", [ "jshint", "jscs", "csslint", "csscomb" ] );

};
