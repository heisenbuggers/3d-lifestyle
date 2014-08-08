(function($) {
	$.fn.seekLeft = function() {
		var element = this.get(0),
			end = element.duration;
		if(element.currentTime <= 0) element.currentTime = end;
		else element.currentTime -= 0.05;
		return this;
	};
	$.fn.seekRight = function() {
		var element = this.get(0),
			end = element.duration;
		if(element.currentTime >= end) element.currentTime = 0;
		else element.currentTime += 0.05;
		return this;
	};
})(jQuery);