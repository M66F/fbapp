
window.onresize = function() { verticalResize();};

function verticalResize () {
	
document.getElementById("wrapper").style.height = (window.innerHeight-100)+"px";
document.getElementById("playerColumn").style.height = (window.innerHeight-125)+"px";
document.getElementById("content").style.height = (window.innerHeight-348)+"px";
}