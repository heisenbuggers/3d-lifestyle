var fs = require('fs');

var video = function(req, res) {
	res.render('video', {
		src: fs.readdirSync('')
	});
};

module.exports = {
	video: video
};
