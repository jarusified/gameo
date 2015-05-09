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
