//**************************************************************************************************
//Global Variables
//"target" for the drop location of drag&drop event
var target;

//"playerLeft" and "playerRight" for player comparism
var playerLeft;
var playerRight;

//**************************************************************************************************
// if user is logged in, change login Div to Logout
function SwapDivs() {
    if (isAuthenticated) {
        document.getElementById('loginButton').remove();
        document.getElementById('dropdown').remove();
        document.getElementById('logoutButton').style.display = "block";
    }
}


//**************************************************************************************************
//show left container depending on Login Status
function createRightColumn() {
    if (isAuthenticated) {
        document.getElementById("login").style.display = "block";
        document.getElementById("userImage").src = user.imageURL;
        document.getElementById("userName").innerHTML = "Eingeloggt als " + user.name + ".";
    } else {
        document.getElementById("login").style.display = "none";
        document.getElementById("chat").style.display = "none";
    }
}

//*************************************************************************************
// Welcome Text in textDetails


function writeWelcomeText() {
    var divElementLeft = document.createElement('div');
    var welcomeText = document.createTextNode("Ziehe einen Spieler hierher!");
    var brElement = document.createElement('br');
    var imgElement = document.createElement('img');

    divElementLeft.align = 'center';
    divElementLeft.style.paddingTop = '20px';

    imgElement.src = '/static/img/dragFile.png';
    imgElement.id = 'dragDropLeft';

    divElementLeft.appendChild(welcomeText);
    divElementLeft.appendChild(brElement);
    divElementLeft.appendChild(brElement.cloneNode(true));
    divElementLeft.appendChild(imgElement);

    document.getElementById("textDetailsLeft").appendChild(divElementLeft);

    var divElementRight = divElementLeft.cloneNode(true);
    divElementRight.lastChild.id = 'dragDropRight';

document.getElementById("textDetailsRight").appendChild(divElementRight);
document.getElementById("inputForm").style.display = "none";

}
//*************************************************************************************
// Initial Setup
verticalResize();
requestPlayerList();
createRightColumn();
writeWelcomeText();
SwapDivs();


//*************************************************************************************
window.onkeypress = listenToTheKey;
var parrot = 0;

function listenToTheKey(e) {
    if (e.keyCode == 35 || e.charCode == 35) {
        if (parrot == 0) {
            document.getElementById("thelogo").style.background = "url('http://i.imgur.com/9r4dE69.gif')";
            parrot = 1;
        } else {
            document.getElementById("thelogo").style.background = "url('')";
            parrot = 0;
        }
    }
}

