(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Aliases and Globals */

// Matter.js
var ENGINE = Matter.Engine,
    WORLD = Matter.World,
    BODY = Matter.Body,
    BODIES = Matter.Bodies;
// Canvas Editor Studio
var STUDIO = document.getElementById('studio'),
    engine = ENGINE.create(STUDIO);


/* Common Matter.js Functionalities */
function addBody(options){
    console.log(options);
//    var polygon = BODIES.polygon(100, 200, options['sides'], options['radius'], options['size']);
    var polygon = BODIES.polygon(100, 200, 5, 10, { isStatic: true });
    console.log(BODY);
    //BODY.setVelocity(polygon, {x:0, y:0});
    console.log(polygon, engine, engine.world);
    WORLD.addBody(engine.world, polygon);
}

function runEngine(){
    console.log(engine);
    ENGINE.run(engine);
    console.log(engine);
    Matter.Render.world(engine)
}

module.exports.addBody = addBody;
module.exports.runEngine = runEngine;
module.exports.globals = function(){
    return {
	engine : ENGINE,
	world : WORLD,
	body : BODY,
	bodies : BODIES,
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

module.exports.runner = function(n){
  return n;
}

/* Matter Events */

},{"./engine.js":1}],3:[function(require,module,exports){
var events = require("./events.js");

},{"./events.js":2}]},{},[3]);
