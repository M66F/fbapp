
window.onresize = function() { verticalResize();};

function verticalResize () {
//make the container elements responsive to vertical sizing

if (window.innerWidth > 500) {
	document.getElementById("playerColumn").style.height = (window.innerHeight-149)+"px";
	document.getElementById("playerDetails").style.height = (window.innerHeight-100)+"px";
	document.getElementById("content").style.height = (window.innerHeight-371)+"px";
	document.getElementById("wrapper").style.height = (window.innerHeight-100)+"px";
}else{
	document.getElementById("playerColumn").style.height = 165 + "px";
	document.getElementById("playerDetails").style.height = (window.innerHeight-328)+"px";

}
}