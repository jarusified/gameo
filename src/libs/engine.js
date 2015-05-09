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
