$(document).ready(function(){

	var window_width = $(window).width();
	var box_width = $(".modal-box").width();
	$(".modal-box").css({"left" : ((window_width - box_width)/2)});

	$("#space").click(function(){
		$("#space-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#grass").click(function(){
		$("#grass-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#pitchfork").click(function(){
		$("#pitchfork-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#blanket").click(function(){
		$("#blanket-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#closeup").click(function(){
		$("#closeup-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#pics").click(function(){
		$("#pics-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#swing").click(function(){
		$("#swing-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#blue").click(function(){
		$("#blue-modal").show();
		$(document.body).css("overflow", "hidden");
	});

	$("#planes").click(function(){
		$("#planes-modal").show();
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