(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Aliases and Globals */

// Matter.js
var ENGINE = Matter.Engine,
    WORLD = Matter.World,
    B = Matter.Body,
    RENDER = Matter.Render,
    BODIES = Matter.Bodies,
    EVENTS = Matter.Events;
// Canvas Editor Studio
var STUDIO = document.getElementById('studio'),
    MouseConstraint = Matter.MouseConstraint,
    MatterConstraint = Matter.Constraint,
    mouse_constraint;

    
/* Common Matter.js Functionalities */
module.exports.addBody = function (options){
    var chamfer = options['chamfer'];
    options['chamfer'] = {'radius': chamfer};
    options['render'] = {
	fillStyle: '#6B3434',
        strokeStyle: '#6B3434',
	lineWidth: 3
    };
    options['isStatic'] = false;

    var polygon = BODIES.polygon(400, 300, options['sides'], options['size'], options);
    WORLD.addBody(engine.world, polygon);
    
    EVENTS.on(polygon, 'startdrag', function(event) {
        console.log('tick22', event);
    })
    EVENTS.trigger(polygon, 'startdrag', function(event) {
        console.log('tick11', event);
    })
    
};

module.exports.runEngine = function (){
    ENGINE.run(engine);
};

module.exports.init = function(){
    var options = {
	timeScale: 1,
        positionIterations: 6,
        velocityIterations: 4,
        enableSleeping: false
    };
    engine = ENGINE.create(STUDIO, options);
    mouse_constraint = MouseConstraint.create(engine);
    WORLD.add(engine.world,mouse_constraint);
    engine.world.gravity.y = 0;
    ENGINE.run(engine);
}

module.exports.globals = function(){
    return {
    engine : ENGINE,
    world : WORLD,
    body : BODY,
    bodies : BODIES,
    render : RENDER,
    studio : STUDIO
    }
}

},{}],2:[function(require,module,exports){
var studio_engine = require("./engine.js");

var toolbox = $('#tool-div .section');
/* User Events */
toolbox.on("click", function(event){
    var target = event.target;    
    if(target.id == 'addBody'){
	var tags = $('.input-range'),
	    options = {};
	for(i=0; i<tags.length; i++)
	    options[tags[i].parentNode.id] = tags[i].value;
	studio_engine.addBody(options);
	studio_engine.runEngine();
    }
});


/* Matter Events */

},{"./engine.js":1}],3:[function(require,module,exports){
var events = require("./events.js");
//var editor = require("./editor.js");
var engine = require('./engine.js');

var canvasObj = $('#studio');
//editor.sketchUp(canvasObj);
engine.init();

var mode=$('.mode').attr('id');

},{"./engine.js":1,"./events.js":2}]},{},[3]);
