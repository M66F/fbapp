//**************************************************************************************************
//CSS
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


//**************************************************************************************************
//Global Variables
//"target" for the drop location of drag&drop event
var target;

//"playerLeft" and "playerRight" for player comparism
var playerLeft;
var playerRight;

//**************************************************************************************************
//show left container depending on Login Status
function createRightColumn() {
    if (isAuthenticated) {
         document.getElementById("login").style.display = "block";
         document.getElementById("userImage").src = user.imageURL;
         document.getElementById("userName").innerHTML = "Eingeloggt als "+user.name+".";

         
    } else {
         document.getElementById("login").style.display = "none";
         document.getElementById("chat").style.display = "none";
   }  
}




//*************************************************************************************
// Welcome Text in textDetails

function writeWelcomeText() {
    document.getElementById("textDetailsLeft").innerHTML = "<p> Hey, das ist die Fußball App!" +
        "<br><p>Zieht einen Spieler hierher!</p><br><br><p> Meldet euch mit Facebook an oder nutzt den Chat!</p>"
    document.getElementById("textDetailsRight").innerHTML = "<p> Hey, das ist die Fußball App!" +
        "<br><p>Zieht einen Spieler hierher!</p><br><br><p> Meldet euch mit Facebook an oder nutzt den Chat!</p>"
}
//*************************************************************************************
// Initial Setup
verticalResize();
requestPlayerList();
createRightColumn();
if (isAuthenticated) {
    requestPlayerDetail("userImage");
} else {
    writeWelcomeText();
}



//----------------


window.onkeypress = listenToTheKey;
var parrot = 0;
function listenToTheKey(e) {
        if (e.keyCode == 35 || e.charCode == 35) {
            if(parrot == 0) {
                document.getElementById("thelogo").style.background = "url('http://i.imgur.com/9r4dE69.gif')";
                parrot = 1;
            }
            else {
                document.getElementById("thelogo").style.background = "url('')";
                parrot = 0;
            }
        }
}