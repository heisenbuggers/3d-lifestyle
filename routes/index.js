var video = function(req, res) {
	res.render('video', {
		src: "http://cloud.stylista.com/videos/2013/Sep/1379353232_Stylista%20-%203989.webm"
	});
};

module.exports = {
	video: video
};