var http = require("http"),
    swig = require("swig"),
    express = require('express'),
    mongoose = require('mongoose'),
    app=express(),
    bodyParser = require('body-parser');
    routes = require('./routes'),
    schema = require('./src/static/schema.js');

app.engine('html',swig.renderFile);
app.set('view engine','html');
app.set('views',__dirname+'/src/templates');
app.use(express.static(__dirname+'/src/static'));
app.use(bodyParser.urlencoded({extended : true}));
mongoose.connect("mongodb://localhost:27017/gameo");
var objectT = {1:"character",2:"background",3:"platform",4:"obstacle",5:"others",6:"world"},
    controlT = {1:"jump",2:"left",3:"right",4:"duck",5:"shoot"};
var example = new schema.Globals({object_types : objectT ,control_types : controlT});
example.save(function(err){
  if(err){
    return handleError(err);
  }
});
schema.Globals.find({},function(err,data){
  if(err){
    return handleError(err);
  }
});
routes.init(app);

app.listen(8080);
console.log("Server is listening");

