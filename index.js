var http = require("http"),
    swig = require("swig"),
    express = require('express'),
    mongoose = require('mongoose'),
    app=express(),
    routes = require('./routes');

app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/src/templates');
app.use('/src/static',express.static(__dirname+'/src/static'));

routes.init(app);

app.listen(8080);
console.log("Server is listening");

