var battleAPI = (function () {

	var public = {};

	// VS ANIMATION

	function animations() {

		setTimeout(function() {
			$("#vs").attr("class", "vs colors");
		}, 1900);

		// SPECS HEADER ANIMATIONS
		$('h3').waypoint(function() {
		  $(this).attr("class", "animated bounceIn");
		}, { offset: "75%" });

		$('#androidLogo').waypoint(function() {
		  $(this).attr("class", "animated bounceIn");
		}, { offset: "75%" });

		$('#appleLogo').waypoint(function() {
		  $(this).attr("class", "animated bounceIn");
		}, { offset: "75%" });

		// SPECS ANIMATIONS
		$("#display").waypoint(function() {
		  $(this).attr("class", "specWrap flipIn");
		  $("#displayX").attr("class", "fa fa-times scaleIn");
		  $("#displayCheck").attr("class", "fa fa-check scaleIn");

		  $("#custom").attr("class", "specWrap flipIn");
		  $("#customCheck").attr("class", "fa fa-check scaleIn");
		  $("#customX").attr("class", "fa fa-times scaleIn");

		  $("#battery").attr("class", "specWrap flipIn");
		  $("#batteryCheck").attr("class", "fa fa-check scaleIn");
		  $("#batteryX").attr("class", "fa fa-times scaleIn");

		  $("#camera").attr("class", "specWrap flipIn");
		  $("#cameraCheck1").attr("class", "fa fa-check scaleIn");
		  $("#cameraCheck2").attr("class", "fa fa-check scaleIn");

		  $("#os").attr("class", "specWrap flipIn");
		  $("#osCheck").attr("class", "fa fa-check scaleIn");
		  $("#osX").attr("class", "fa fa-times scaleIn");

		  $("#price").attr("class", "specWrap flipIn");
		  $("#priceCheck").attr("class", "fa fa-check scaleIn");
		  $("#priceX").attr("class", "fa fa-times scaleIn");

		}, { offset: "75%" });

		// BIG SEXY ANIMATION
		$('#bigSexy').waypoint(function() {
		  	$(this).attr("class", "dropDown");
		}, { offset: "75%" });

		$('#bigSexyCenter').waypoint(function() {
		  	$("#bigSexyLeft").attr("class", "leftAnimation");
		  	$("#bigSexyCenter").attr("class", "dropDownCenter");
		  	$("#bigSexyRight").attr("class", "rightAnimation");
		}, { offset: "75%" });

		// H6 ANIMATION

		$("h6").waypoint(function() {
		  	$(this).attr("class", "animated rollIn");
		}, { offset: "75%" });

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		animations();

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