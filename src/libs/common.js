var events = require("./events.js");
//var editor = require("./editor.js");
var engine = require('./engine.js');

var canvasObj = $('#studio');
//editor.sketchUp(canvasObj);
engine.init();

var mode=$('.mode').attr('id');
