module.exports = {
	src: {
		files: [ {
			expand: true,
			src: [ "scss/*.scss" ]
		} ]
	},
	dist: {
		files: [ {
			expand: true,
			src: [ "dist/*.css" ]
		} ]
	}
};
