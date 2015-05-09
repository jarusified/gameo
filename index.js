var http = require("http");
var swig = require("swig");
swig.renderFile("src/templates/app.html");
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
                        response.end();
});
 
server.listen(8080);
console.log("Server is listening");

