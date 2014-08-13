var battleAPI = (function () {

	var public = {};

	// VS ANIMATION

	function vsAnimation() {

		setTimeout(function() {
			$("#vs").attr("class", "vs colors");
		}, 1900);

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		vsAnimation();

	}

	// PUBLIC FUNCTIONS

	public.init = init;
	// public.game = game;

	// RETURN PUBLIC

	return public;

}());

$(document).ready(function() {

	// CALL PROTECTED SCRIPTS
	battleAPI.init();

});