var express = require('express'),
	bodyParser = require('body-parser'),
	favicon = require('serve-favicon'),
	methodOverride = require('method-override'),
	http = require("http"),
    path = require("path"),
	app = express(),
	routes = require("./routes");

var port = process.env.PORT || 8082;

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");
//app.use(favicon());
app.use(bodyParser());
app.use(methodOverride());

app.use(express.static("./public"));
app.use(express.static("./bower_components"));

app.get('/video', routes.video);

var server = http.createServer(app);

server.listen(port, "0.0.0.0", function() {
	console.log("3D lifestyle server listening on port ", port);
});