module.exports = function() {
return {
	options: {

		// Bower components folder will be removed afterwards
		clean: true,
		destPrefix: "external"
	},
	jquery: {
		files: {
			"jquery/": "jquery/dist/"
		}
	},
	handlebars: {
		files: {
			"handlebars/": "handlebars/handlebars.runtime.js"
		}
	},
	flexboxgrid: {
		files: {
			"flexboxgrid/": "flexboxgrid/dist/flexboxgrid.css"
		}
	}
};
};
