$(function() {
	var $video = $(".mw-view-video"),
		left = $(".controls .left"),
		right = $(".controls .right");
	var touchClickFlag = false;
	left.bind("click", function(e) {
		e.preventDefault();
		$video.seekLeft();
	});
	right.bind("click", function(e) {
		e.preventDefault();
		$video.seekRight();
	});
	$(document).bind('keydown', function(e){
		if(e.which === 37) $video.stop().seekLeft();
		if(e.which === 39) $video.stop().seekRight();
	});
});