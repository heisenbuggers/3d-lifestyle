
$(function() {
	var $3dcontainer = $(".mw-view-3d");

	$(document).bind('keydown', function(e){
		if(e.which === 37) $video.stop().seekRight();
		if(e.which === 39) $video.stop().seekLeft();
	});

	$3dcontainer.on('tilt', function(e, beta, gamma) {
		console.log(gamma);
		$3dcontainer.selectImage(gamma);
	});

	$3dcontainer.find(".img:eq(0)").show();
});
