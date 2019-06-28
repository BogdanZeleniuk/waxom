var http = require('http');
var url = require('url');
var fs = require("fs");
var winston = require("winston");
var express = require("express");
var path = require("path");
var config = require("../js/config/config.json");

var app = express();
app.set("port", config["port"]);
app.set("views", __dirname + "/template");
app.set("view engine", "ejs");
app.engine('ejs', require("ejs-locals"));

log = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [ new winston.transports.Console(
  	{colorize: true,
  		label: __dirname})]
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/images'));

app.get("/", function (req, res, next) {
	res.render("index.ejs");
})


http.createServer(app).listen(app.get("port"), function () {
	log.info("Express is listening on port " + config["port"]);
})

/*http.createServer(function (req, res) {

	var fileName = "../index.html";

	if (req.url != '/index.html') {
		res.statusCode = 404;
		res.end("Page NOT Found");
	}
		log.info("URL is " + req.url);

		var file = new fs.ReadStream(fileName);
		sendFile(file, res);
}).listen(8080);

function sendFile(file, res) {
	var mime = require("mime-types").lookup(file);
	log.info(mime);
	res.setHeader("Content-Type", mime + "; charset=utf-8");
	file.pipe(res);

	file.on("error", function (err) {
		res.statusCode = 500;
		res.end("Server Error");
		log.error("Error. File Not Found");
	});

	file.on("open", function () {
		log.info("File is opening");
	})
	file.on("close", function () {
		log.info("File is closed");
	});
	file.on("close", function () {
		file.destroy();
	})
}
*/log.info('Server running on port 8080');