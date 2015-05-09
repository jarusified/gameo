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
	studio_engine.addBody();
	studio_engine.runEngine();
    }
});


/* Matter Events */
