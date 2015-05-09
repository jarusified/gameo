(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var TOOLBOX = $('#tool-div .section');

/* User Events */
TOOLBOX.on("click", function(event){
    var target = event.target;
    console.log(target.type);
    if(target.className == 'section'){
	console.log('AAA');
    }
});
module.exports.runner = function(n){
  return n;
}

/* Matter Events */

},{}],2:[function(require,module,exports){
var temp = require("./events.js");
console.log(temp.runner(3));

/* Aliases and Globals */
// Matter.js
var ENGINE = Matter.Engine,
    WORLD = Matter.World,
    BODIES = Matter.Bodies;
// Canvas Editor Studio
var STUDIO = document.getElementById('studio');

/* Common Matter.js Functionalities */
function initEngine(){
    var engine = ENGINE.create(STUDIO);
    return engine;
}

function addBody(engine, bodies){
    WORLD.add(engine.world, bodies);
}

function runEngine(engine){
    ENGINE.run(engine);
}

},{"./events.js":1}]},{},[2]);
