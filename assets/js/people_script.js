$(document).ready(function(){

	var window_width = $(window).width();
	var box_width = $(".modal-box").width();
	$(".modal-box").css({"left" : ((window_width - box_width)/2)});

	$("#jess").click(function(){
		$("#jess-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#lynie").click(function(){
		$("#lynie-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#amy").click(function(){
		$("#amy-modal").show();
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