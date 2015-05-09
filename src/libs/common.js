/* Aliases and Globals */
var temp = require("./events.js");
console.log(temp.runner(3));
// Matter.js
var ENGINE = Matter.Engine,
    WORLD = Matter.World,
    BODIES = Matter.Bodies;
// Canvas Editor Studio
var STUDIO = document.getElementbyID('studio'),
    TOOLBOX = document.getElementbyID('toolbox');


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
