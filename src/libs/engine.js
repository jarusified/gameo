/* Aliases and Globals */

// Matter.js
var ENGINE = Matter.Engine,
    WORLD = Matter.World,
    BODY = Matter.Body,
    BODIES = Matter.Bodies,
    engine,
    MouseConstraint = Matter.MouseConstraint;

// Canvas Editor Studio
    
/* Common Matter.js Functionalities */

module.exports.addBody = function (){
    var polygon = BODIES.polygon(100, 200, 5, 100, { render: { lineWidth: 5, strokeStyle: '#ffffff'} });
    WORLD.addBody(engine.world, polygon);
};

module.exports.runEngine = function (){
    ENGINE.run(engine);
    Matter.Render.world(engine)
};


module.exports.init = function(){
    var STUDIO = document.getElementById('studio'),
    opt = {
            positionIterations: 6,
            velocityIterations: 4,
            enableSleeping: false
    };
    engine = ENGINE.create(STUDIO);
    var mouse_constraint = MouseConstraint.create(engine);
    WORLD.add(engine.world,mouse_constraint);
    ENGINE.run(engine);
}

module.exports.globals = function(){
    return {
    engine : ENGINE,
    world : WORLD,
    body : BODY,
    bodies : BODIES,
    studio : STUDIO
    }
}