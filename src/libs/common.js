var events = require("./events.js");
var editor = require("./editor.js");
var engine = require('./engine.js');
var user=window.location.pathname.split('/')[1];

if($('#draw_mode').hasClass('disabled')){
	console.log('B');
	canvasObj=$('#draw_mode');
	editor.sketchUp(canvasObj);
	var dataURL=canvasObj.get(0).toDataURL("image/png");
	$('#save').on('click',function(){
		$.ajax({
			type:"POST",
			url: "/images",
			data:{
				imgBase64: dataURL,
				user:user
			},
			dataType:'json',
			success:function(data){
				console.log(data);
			}
		});
	});
}
if(!$('#studio').hasClass('disabled')){
	$.ajax({
		type:"POST",
		url:"/getImage",
		data:{
			user:user
		},
		success:function(data){
			var image = new Image();
			image.onload = function(){
				//$('#studio').find('canvas')[0].getContext('2d').drawImage(image,0,0);
			}
			//image.src = "data:image/png;base64,"+JSON.parse(data.some)[0].base64;
			
		}
		
	});
}
engine.init();

var mode=$('.mode').attr('id');
