
$(function() {
	var $video = $(".mw-view-video"),
		left = $(".controls .left"),
		right = $(".controls .right");
	var touchClickFlag = false;
	window.tilt = function tilt(beta, gamma){
		var rightSide = checkSide(gamma);
		if(rightSide){
			$video.stop().seekLeft();
		}else{
			$video.stop().seekRight();
		}
	}

	left.bind("click", function(e) {
		e.preventDefault();
		$video.seekLeft();
	});
	right.bind("click", function(e) {
		e.preventDefault();
		$video.seekRight();
	});
	$(document).bind('keydown', function(e){
		if(e.which === 37) $video.stop().seekRight();
		if(e.which === 39) $video.stop().seekLeft();
	});
});
