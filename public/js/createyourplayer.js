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



document.getElementById("spielername").value = user.name;



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
// Initial Setup
verticalResize();
createRightColumn();
if (isAuthenticated) {
    requestPlayerDetail("userImage");
} else {
    writeWelcomeText();
}

// Function to save player into local storage
function saveToLS() {

    if(document.getElementById("spielername").value == "" || document.getElementById("imTeamSeit").value == "" || document.getElementById("geburtsdatum").value == "" || document.getElementById("vertragBis").value == "") {
        alert("Please fill out the required fields! (Date fields)");
        return;
    }

    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("saveFlag", "true");
        localStorage.setItem("spielername", document.getElementById("spielername").value);
        localStorage.setItem("groesse", document.getElementById("groesse").value);
        localStorage.setItem("nationalitaet", document.getElementById("nationalitaet").value);
        localStorage.setItem("verein", document.getElementById("verein").value);
        localStorage.setItem("imTeamSeit", parseDate(document.getElementById("imTeamSeit").value));
        localStorage.setItem("schuhgroesse", document.getElementById("schuhgroesse").value);
        localStorage.setItem("schuhmodell", document.getElementById("schuhmodell").value);
        localStorage.setItem("position", document.getElementById("position").value);
        localStorage.setItem("vertragBis", parseDate(document.getElementById("vertragBis").value));
        localStorage.setItem("aktuellerMarktwert", document.getElementById("aktuellerMarktwert").value);
        localStorage.setItem("geburtsdatum", parseDate(document.getElementById("geburtsdatum").value));
        localStorage.setItem("alter", document.getElementById("alter").value);
        localStorage.setItem("schussfuss", document.getElementById("schussfuss").value);
        localStorage.setItem("hoechsterMarktwert", document.getElementById("hoechsterMarktwert").value);
        localStorage.setItem("geburtsort", document.getElementById("geburtsort").value);
        localStorage.setItem("spielerberater", document.getElementById("spielerberater").value);
        localStorage.setItem("ausruester", document.getElementById("ausruester").value);
        localStorage.setItem("pictureURL", user.imageURL);

        alert("Player saved!");
        window.open("/","_self")
        
    } else {
        alert("Sorry, your browser doesn't support local storage :(")
    }
}

// calculate age from inserted date
function calcAge(input) {
    if (input.value != undefined) {
        if(new Date().getMonth() > new Date(input.value).getMonth() ) {
            var age = new Date().getFullYear() - new Date(input.value).getFullYear();
        } else if(new Date().getMonth() == new Date(input.value).getMonth() ) {
            if(new Date().getDate() >= new Date(input.value).getDate()) {
                var age = new Date().getFullYear() - new Date(input.value).getFullYear();
            } else {
                var age = new Date().getFullYear() - new Date(input.value).getFullYear() - 1;
            }
        }
        else {
            var age = new Date().getFullYear() - new Date(input.value).getFullYear() - 1;
        }

        if(age != "NaN") {
            document.getElementById("alter").value = age;
        }
    }
}

// parse date from american to german format
function parseDate(input) {
    if(input != "") {
        var split = input.split('-');
        return split[2] + "." + split[1] + "." + split[0];
    }
    else {
        return "n.a."
    }
}


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