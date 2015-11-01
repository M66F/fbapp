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
var dragDropImg = "<img src='/static/img/dragFile.png' draggable=false height='470px' width='auto'>";


function writeWelcomeText() {
    document.getElementById("textDetailsLeft").innerHTML = "<div align='center' style='padding-top:20px'" + 
        "<p>Ziehe einen Spieler hierher!</p>" +
        "<br>" +
        "<img src='/static/img/dragFile.png' ID='dragDropLeft' draggable=false height='470px' width='auto'>" +
        "</div>";
    document.getElementById("textDetailsRight").innerHTML = "<div align='center' style='padding-top:20px'" + 
        "<p>Ziehe einen Spieler hierher!</p>" +
        "<br>" +
        "<img src='/static/img/dragFile.png' ID='dragDropRight' draggable=false height='470px' width='auto'>" +
        "</div>";
}
//*************************************************************************************
// Initial Setup
verticalResize();
requestPlayerList();
createRightColumn();
writeWelcomeText();



//*************************************************************************************
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


function checkAuth() {
    if (isAuthenticated) {
        window.location.href="/cyp";
    }
    else {
        alert('Login to use this feature');
    }
}