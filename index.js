var http = require("http"),
    swig = require("swig"),
    mongoose = require('mongoose');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(swig.renderFile('./src/templates/app.html'));
    res.end();
});
 
server.listen(8080);
console.log("Server is listening");

