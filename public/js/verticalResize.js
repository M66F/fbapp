
window.onresize = function() { verticalResize();};

function verticalResize () {
//make the container elements responsive to vertical sizing
document.getElementById("wrapper").style.height = (window.innerHeight-100)+"px";
document.getElementById("playerColumn").style.height = (window.innerHeight-149)+"px";
document.getElementById("content").style.height = (window.innerHeight-371)+"px";
document.getElementById("playerDetails").style.height = (window.innerHeight-102)+"px";
}