var fs = require('fs');

var video = function(req, res) {
	res.render('video', {
		src: fs.readdirSync('./images')
	});
};

module.exports = {
	video: video
};
