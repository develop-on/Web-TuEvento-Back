var gm = require("gm");
var express = require("express"),
    app = express(),
    imageSuffix = ".jpg",
    fs = require("fs");

var ID = function () {
	return Math.floor((Math.random() * 1) + 1);
};

app.use(function(req,res,next) {
	    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://tuevento-gpabloandres.c9users.io/index.html');

    
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get("/personal", function (request, response) {
    var path = __dirname + "/images/personal/" + ID() + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path);
});

app.get("/grupal", function (request, response) {
    var path = __dirname + "/images/grupal/" + ID() + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path);
});

app.get("/politico", function (request, response) {
    var path = __dirname + "/images/politico/" + ID() + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path);
});

app.get("/institucional", function (request, response) {
    var path = __dirname + "/images/institucional/" + ID() + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path);
});

app.get("/empresarial", function (request, response) {
    var path = __dirname + "/images/empresarial/" + ID() + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path);
});

app.get("/deportivo", function (request, response) {
    var path = __dirname + "/images/deportivo/" + ID() + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path);
});

app.get("/academico", function (request, response) {
    var path = __dirname + "/images/academico/" + ID() + imageSuffix;
    console.log("fetching image: ", path);
    response.sendFile(path);
});

app.listen(8080);