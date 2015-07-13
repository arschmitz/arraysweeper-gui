module.exports = {
	compile: {
		options: {
			processName: function( filePath ) {
				var pieces = filePath.split( "/" );
				return pieces[ pieces.length - 1 ].split( "." )[ 0 ];
			},
			processPartialName: function( filePath ) {
				var pieces = filePath.split( "/" );
				return pieces[ pieces.length - 1 ].split( "_" )[ 1 ].split( "." )[ 0 ];
			},
			namespace: "$.arraysweeper.prototype.templates"
		},
		files: {
			"dist/template.js": "templates/*.hbs"
		}
	}
};
