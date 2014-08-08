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
});