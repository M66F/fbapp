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
    var divElementLeft = document.createElement('div');
    var welcomeText = document.createTextNode("Ziehe einen Spieler hierher!");
    var brElement = document.createElement('br');
    var imgElement = document.createElement('img');

divElementLeft.align = 'center';
divElementLeft.style.paddingTop ='20px';

imgElement.src = '/static/img/dragFile.png';
imgElement.id = 'dragDropLeft';

imgElement.style.height = '470px';
imgElement.style.width = 'auto';

divElementLeft.appendChild(welcomeText);
divElementLeft.appendChild(brElement);
divElementLeft.appendChild(brElement.cloneNode(true));
divElementLeft.appendChild(imgElement);

document.getElementById("textDetailsLeft").appendChild(divElementLeft);

var divElementRight = divElementLeft.cloneNode(true);
divElementRight.lastChild.id = 'dragDropRight';

document.getElementById("textDetailsRight").appendChild(divElementRight);

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