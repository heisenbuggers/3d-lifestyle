var express = require('express'),
	http = require("http"),
    path = require("path"),
	app = express(),
	routes = require("./routes");

app.use(bodyParser());

var port = process.env.PORT || 8082;

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(config[env].SECRET));

app.use(express.static(path.join(__dirname, 'public', 'build')));

app.get('/video', routes.video);

var server = http.createServer(app);
app.use(app.router);

server.listen(port, "0.0.0.0", function() {
	console.log("3D lifestyle server listening on port ", port);
})