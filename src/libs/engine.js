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
    var polygon = BODIES.polygon(100, 200, 5, 10, { isStatic: true, render: { lineWidth: 5, strokeStyle: '#000000'} });
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
