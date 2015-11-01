//LoginButton mouseover & mouseout EventListener to enable CSS merging of drop down menu to header
var one = document.getElementById('dropdown'),
two = document.getElementById('loginButton');

two.addEventListener('mouseover', function(){
    two.style.background = "#F2F2F2";
	two.style.boxShadow = "inset 0px 5px #51C1F1";
	two.style.color = "#51C1F1";
	two.style.padding = "50px 20px 34px";
}, true);
two.addEventListener('mouseout', function(){
    two.style.display = "block";
	two.style.padding = "42px 20px";
    two.style.background = "white";
	two.style.boxShadow = "inset 0px 0px";
    two.style.color = "black";
}, true);
one.addEventListener('mouseover', function(){
    two.style.background = "#F2F2F2";
	two.style.boxShadow = "inset 0px 5px #51C1F1";
	two.style.color = "#51C1F1";
	two.style.padding = "50px 20px 34px";
}, true);
one.addEventListener('mouseout', function(){
    two.style.display = "block";
	two.style.padding = "42px 20px";
    two.style.background = "white";
	two.style.boxShadow = "inset 0px 0px";
    two.style.color = "black";
}, true);