// This just supports loading in any enviroment
( function( root, factory ) {
	if ( typeof define === "function" && define.amd ) {
		/**
		* A module for creating an GUI based on the arraysweeper module.
		* (https://www.npmjs.com/package/arraysweeper)[https://www.npmjs.com/package/arraysweeper]
		* @module $.arraysweeper
		*/
		define( [ "jquery", "handlebars", "node_modules/arraysweeper/index.js" ], factory );
	} else if ( typeof exports === "object" ) {
		module.exports = factory( jQuery, Handlebars, Arraysweeper );
	} else {
		factory( jQuery, Handlebars, Arraysweeper );
  }
}( this, function( $, Handlebars, Arraysweeper ) {

/**
* @alias module:$.arraysweeper
* $.arraysweeper
* @param { jQuery|selector|node } element - The element to create the game on
* @param {number} height - Height of the board to create.
* @param {number} width - Width of the board to create.
* @param {number} count - The number of mines to place on the board.
*/
$.arraysweeper = function( element, height, width, count ) {
	this.element = $( element );
	this.height = height;
	this.width = width;
	this.count = count;
	this.refresh( false );
	this._bindEvents();
	return this;
};

/**
* jQuery Plugin Method for creating an arraysweeper-gui game
* $.fn.arraysweeper
* @function $.fn.arraysweeper
* @param {number} height - Height of the board to create.
* @param {number} width - Width of the board to create.
* @param {number} count - The number of mines to place on the board.
*/
$.fn.arraysweeper = function( height, width, count ) {
	this.data( "arraysweeper", new $.arraysweeper( this, height, width, count ) );
	return this;
};
$.extend( $.arraysweeper.prototype, {

	/**
	* refrsh the board this will reset the game and get new random mines
	* @param {boolean}[true] getValues - If values should be obtained from the settings bar
	*/
	refresh: function( getValues ) {
		if ( getValues !== false ) {
			var values = this.toolbar.getValues();

			this.width = values.width;
			this.height = values.height;
			this.count = values.count;
		}
		this.board = new Arraysweeper( this.height, this.width, this.count );
		this.element.html( this.templates.game( {} ) );
		this.boardElement = this.element.find( ".as-gameboard" );
		this.screen = this.element.find( ".as-screen" );
		this.toolbar.init( this.element, this.height, this.width, this.count );
		this.renderBoard();
		this.setHeight();
	},
	toolbar: {
		/**
		* return an object of the values from the settings bar
		*/
		getValues: function() {
			return {
				width: this.width.val(),
				height: this.height.val(),
				count: this.count.val()
			};
		},

		/**
		* Initalize the toolbars
		*/
		init: function( element, height, width, count ) {
			this.element = element;
			this.width = element.find( ".as-width-input" );
			this.height = element.find( ".as-height-input" );
			this.count = element.find( ".as-count-input" );
			this.remaining = this.element.find( ".remaining-val" );
			this.setValues( height, width, count );
		},

		/**
		* Set the initial values for the inputs
		* @param {number} height - Height of the board to create.
		* @param {number} width - Width of the board to create.
		* @param {number} count - The number of mines to place on the board.
		*/
		setValues: function( height, width, count ) {
			this.remaining.html( count );
			this.width.val( width );
			this.height.val( height );
			this.count.val( count );
		}
	},

	/**
	* Render the game board based on its current state
	*/
	renderBoard: function() {
		this.boardElement.html( this.templates.board( this.board.getBoard() ) );
	},

	/*
	* Set the height of the spaces based on their width to ensure they are square
	*/
	setHeight: function() {
		if ( this.styleSheet ) {
			this.styleSheet.remove();
		}
		this.styleSheet = $( "<style>" ).appendTo( this.element );

		this.styleSheet.html( ".as-game-space { height: " +
			this.element.find( ".as-game-space" ).eq( 0 ).width() + "px; }" );
	},
	_on: function( event, selector, callback ) {
		var that = this;

		this.element.on( event, selector, function() {
			that.handlers[ callback ].apply( that, arguments );
		} );
	},
	flagTime: 500,

	handlers:{
		reveal: function( e ) {
			if ( $( e.target ).hasClass( "flag" ) ) {
				return;
			}
			var cords = e.target.getAttribute( "data-as-location" ).split( "," );
			var status = this.board.reveal( Number( cords[ 0 ] ), Number( cords[ 1 ] ) );

			if ( status === "Game Over!" ) {
				this.screen.addClass( "as-failure" );
			} else if ( status === "You Win!" ) {
				this.screen.addClass( "as-success" );
			}
			this.renderBoard();
			this.toolbar.remaining.html( this.board.count.mines - this.board.count.flags );
		},
		flag: function( e ) {
			if ( e.which !== 3 && new Date().getTime() - this.pointerTime < this.flagTime ) {
				return;
			}
			e.preventDefault();
			var cords = e.target.getAttribute( "data-as-location" ).split( "," );

			this.board.flag( parseInt( cords[ 0 ], 10 ), parseInt( cords[ 1 ], 10 ),
				!this.board.flag( parseInt( cords[ 0 ], 10 ), parseInt( cords[ 1 ], 10 ) ) );
			this.renderBoard();
		},
		recordPointer: function() {
			this.pointerTime = new Date().getTime();
		},
		prevent: function( e ) {
			e.preventDefault();
		},
		refresh: function() {
			console.log( "refresh" );
			this.refresh();
		},
		settings: function() {
			this.toolbar.element.find( ".as-settings-panel" )
				.toggleClass( "as-settings-panel-hidden" );
		},
		help: function() {
			this.toolbar.element.find( ".as-help-panel" ).toggleClass( "as-help-panel-hidden" );
		}
	},
	_bindEvents: function() {
		var that = this;
		this._on( "click", ".as-reset", "refresh" );
		this._on( "click", ".as-settings", "settings" );
		this._on( "click", ".as-help", "help" );
		this._on( "click", ".as-game-space:not( .revealed )", "reveal" );
		this._on( "pointerup", ".as-game-space:not( .revealed )", "flag" );
		this._on( "touchstart pointerdown", ".as-game-space:not( .revealed )", "recordPointer" );
		this._on( "contextmenu", ".as-game-space:not( .revealed )", "prevent" );
		$( window ).on( "resize", function() {
			that.setHeight.apply( that, arguments );
		} );
	}
} );

return $.fn.arraysweeper;

} ) );
