var video = function(req, res) {
	res.render('video', {
		src: require('../datasources/figure1')
	});
};

var video2 = function(req, res) {
	res.render('video', {
		src: require('../datasources/figure2')
	});
};

module.exports = {
	video: video,
	video2: video2
};
