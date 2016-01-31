// JavaScript Document

var chen_center = (window.innerHeight / 2) + 835;
var origin = 1550;
var position = 0;
var finalPosition = 0;
var text_x_position = 0;

window.onload = function(){
	window.location.hash = "top"; 
};

window.onscroll = function() {
	
	if(pageYOffset > 950) {
		
		document.getElementById("title").style.display = "none";
		}
		else if(pageYOffset < 1050) {
			document.getElementById("title").style.display = "inline";
		}

		
		if(pageYOffset > window.innerHeight + 1400 && pageYOffset <= window.innerHeight + 3000){
			document.getElementById("flying_text").style.position = "fixed";
			document.getElementById("flying_text").style.display = "inline";
			
			var lower_limit = window.innerHeight + 1400;
			var upper_limit = window.innerHeight + 3000;
			var initial_value = -10;
			var final_value = 240;
			var delta_x = (final_value - initial_value) / 100;
			var delta_y = (upper_limit - lower_limit) / 100;
			var y_relative_increment = (pageYOffset - lower_limit) / delta_y;
			text_x_position = initial_value + delta_x * y_relative_increment;
			
			document.getElementById("flying_text").style.left = text_x_position + "%";
		} else { 
			document.getElementById("flying_text").style.position = "absolute";
			document.getElementById("flying_text").style.display = "none";
			document.getElementById("flying_text").style.left = "-5%";
		}
}