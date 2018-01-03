$(document).ready(function(){

	var window_width = $(window).width();
	var box_width = $(".modal-box").width();
	$(".modal-box").css({"left" : ((window_width - box_width)/2)});

	$("#flower").click(function(){
		$("#flower-modal").show();
		$(document.body).css("overflow", "hidden");

	});

	$(".modal-overlay").click(function(){
		$("#flower-modal").hide();
		$(document.body).css("overflow", "auto");

	});

	$(".close").click(function(){
		$(".modal-container").hide();
		$(document.body).css("overflow", "auto");
	});

});