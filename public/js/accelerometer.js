function checkForEvents() {
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
}

function tilt(beta, gamma){
	var rightSide = checkSide(gamma);
	if(rightSide){
		
	}else{
		
	}
}

function checkSide(gamma){
	var value = parseInt(gamma,10);
	if(value){
		if(value > 0){
			return true;
		}else{
			return false;
		}
	}
	return "";
}

