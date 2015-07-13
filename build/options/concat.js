module.exports = {
	js: {
		src: [
			"node_modules/arraysweeper/index.js",
			"external/pep/pep.js",
			"js/*.js",
			"dist/template.js"
		],
		dest: "dist/arraysweeper.js"
	},
	demos: {
		src: [
			"external/jquery/jquery.js",
			"external/handlebars/handlebars.runtime.js",
			"dist/arraysweeper.js"
		],
		dest: "demos/script.js"
	}
};
