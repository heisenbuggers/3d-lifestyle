$(function() {
	$.Event('tilt', {
		bubbles: false
	});
	var prevGamma = 0;
	function tilt(beta, gamma){
		if(typeof gamma === "undefined") return false;
		if(Math.abs(prevGamma - gamma) > 1 ) {
			$(".mw-view-3d").trigger('tilt', [beta, gamma]);
			prevGamma = gamma;
		}
	}
	if (window.DeviceOrientationEvent) {
	    window.addEventListener("deviceorientation", function () {
	        tilt(event.beta, event.gamma);
	    }, true);
	} else if (window.DeviceMotionEvent) {
	    window.addEventListener('devicemotion', function () {
	        tilt(event.acceleration.x * 2, event.acceleration.y * 2);
	    }, true);
	} else {
	    window.addEventListener("MozOrientation", function () {
	        tilt(orientation.x * 50, orientation.y * 50);
	    }, true);
	}
});


