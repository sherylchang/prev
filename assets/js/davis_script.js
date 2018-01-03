$(document).ready(function(){

	var window_width = $(window).width();
	var box_width = $(".modal-box").width();
	$(".modal-box").css({"left" : ((window_width - box_width)/2)});

	$("#bark").click(function(){
		$("#bark-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#bridge").click(function(){
		$("#bridge-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#first").click(function(){
		$("#first-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#forest").click(function(){
		$("#forest-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#frond").click(function(){
		$("#frond-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#leaf").click(function(){
		$("#leaf-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#lights").click(function(){
		$("#lights-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#night").click(function(){
		$("#night-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#pond").click(function(){
		$("#pond-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#sky").click(function(){
		$("#sky-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#tree").click(function(){
		$("#tree-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#walk").click(function(){
		$("#walk-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$(".modal-overlay").click(function(){
		$(".modal-container").hide();
		$(document.body).css("overflow", "auto");
	});

	$(".close").click(function(){
		$(".modal-container").hide();
		$(document.body).css("overflow", "auto");
	});

});