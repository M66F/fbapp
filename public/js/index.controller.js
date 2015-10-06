//**************************************************************************************************
//Global Variables
//"target" for the drop location of drag&drop event
var target;

//"playerLeft" and "playerRight" for player comparism
var playerLeft;
var playerRight;

//**************************************************************************************************
//create left container depending on Login Status
function createRightColumn() {
if (isAuthenticated) {
  document.getElementById("login").innerHTML = "<p>Willkommen, "+User.name+" ! :)</p>"+
"<br><img id='userImage' src="+User.imageURL+" draggable='true' ondragstart='drag(event)'><a href='/logout' class='socialButton' >Logout</a>";
} else{
  document.getElementById("login").innerHTML = "<p>Login:</p> <br>"+
  "<a class='socialButton' href='/auth/facebook'>Login with Facebook</a>";
};}
//**************************************************************************************************
//Speech recognition for search input field
if (!('webkitSpeechRecognition' in window)) {
  // handling if the browser doesn´t support speech recognition 
  function startSpeechRecognition (event) {

  speechImage.src = '/static/img/mic-slash.gif';
  alert("Speech recognition is not enabled in your Browser! Please use the latest Version of Chrome!");
}


} else {

  var recognition = new webkitSpeechRecognition();
  var recognizing = false;
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'de-DE';

  recognition.onstart = function() {
    recognizing = true;
    speechImage.src = '/static/img/mic-animate.gif';

  }

  recognition.onresult = function(event) { 
    //write recognised text into input field of search
    searchText.value = event.results[0][0].transcript;
    //update PlayerList
    createPlayerList();
  }

  //error handling
  recognition.onerror = function(event) {
 if (event.error == 'no-speech') {

      alert('No speech was detected. You may need to adjust your microphone settings!');
    }
    if (event.error == 'audio-capture') {

      alert(' No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly!');
    }
    if (event.error == 'not-allowed') {
        alert('Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream');
      }
    
    speechImage.src = '/static/img/mic.gif';
  };


  
  recognition.onend = function() { 
    recognizing = false;
    speechImage.src = '/static/img/mic.gif';
  }

function startSpeechRecognition (event) {
//check if speech recognition is already running
  if (recognizing == false) {

  speechImage.src = '/static/img/mic-slash.gif';
    recognition.start();
  } else {
    recognition.stop();
    speechImage.src = '/static/img/mic.gif';
  }
}
}
  //**********************************************************************************

  //Drag and Drop Event Handling 
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");
    target = ev.currentTarget.className;
    requestPlayerDetail(id);
}

//****************************************************************************************
//make httpRequest to get the list of all players and create the list to choose from
//at the moment a list of buttons is created 


  var httpRequest;
  var playerList;
//start httpRequest to server
function requestPlayerList() {
  httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    //call function to handle the returned data
    httpRequest.onreadystatechange = createPlayerList;
    //path where JSON data is provided on server
    httpRequest.open('GET', '/playerdata/general/playerData.pd');
    httpRequest.send();
}
//function to handle the returned JSON file
function createPlayerList() {
  //check if httpRequest was successful
   if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        //put received JSON file into variable and parse it
          if(playerList == undefined) {
              playerList = JSON.parse(httpRequest.responseText);
          }
        //create a string with HTML code, which will turn into a List of all Players from the JSON
        //start of the List
       var out = "<ul style='list-style: none;padding:0;margin:0;'>";
          // get search string
          var searchString = document.getElementById('searchText').value;
        //loop through the players in the JSON file
        for (var player in playerList) {
            if ((playerList[player].playername.toUpperCase().match(searchString.toUpperCase().replace(" ", "(.)*")))) {
                //create a button with id and onclick for each player ( the  function called by onclick will get you detailed info on the player of the button)
                out += "<li><div class= 'playerBox'><img src=" + playerList[player].imageurl + " id=" + playerList[player].filename + " draggable='true' ondragstart='drag(event)' ><p>" + playerList[player].playername + "</p></div></li>";
            }
        };
        //end the list
        out += "</ul>"
        //bring the code to create the List of Buttons into the HTML-Webpage
        document.getElementById("playerColumn").innerHTML = out;

      } else {
        alert('There was a problem with the get playerList request.');
      }
    }
  }
//**************************************************************************************
//make httpRequest to server to get detail information JSON for a specific player
  function requestPlayerDetail(filename) {
            
      
    if (filename == "userImage") {
      document.getElementById("textDetailsLeft").innerHTML = 
"<img src='"+userImage.src+"' style='width:160px;height:200;' draggable = false>"+ 
"<table style='margin-left:auto; margin-right:auto;'>"+
"<tr><td>Spielername:</td><td>" + User.name + 
 "</td></tr></table>";

    } else{
         httpRequest = new XMLHttpRequest();
   

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = writePlayerDetail;
    //path where the detail JSON is provided
    httpRequest.open('GET', '/playerdata/' + filename + '.pd');
    httpRequest.send();
  }
}
//handle Detail JSON file, when it is returned
  function writePlayerDetail() {
    //check if httpRequest was successful
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        //put JSON into var and parse it
        var player = JSON.parse(httpRequest.responseText);

          
//Set Target for Drop Event
if (target == "detailsLeft") {
        var targetDOM = "textDetailsLeft";
        playerLeft = player;
    }
else
    if (target == "detailsRigth") {
        var targetDOM = "textDetailsRight";
        playerRight = player;
    }          


if ((playerLeft != undefined) && (playerRight != undefined)) {
    //get rating from compareStats and divide into ratingLeft and ratingRight
    var rating = compareStats(playerLeft.Groesse, playerRight.Groesse, playerLeft.ImTeamSeit, playerRight.ImTeamSeit, playerLeft.Schuhgroesse, playerRight.Schuhgroesse, playerLeft.VertragBis, playerRight.VertragBis, playerLeft.AktuellerMarktwert, playerRight.AktuellerMarktwert, playerLeft.Schussfuss, playerRight.Schussfuss, playerLeft.HoechsterMarktwert, playerRight.HoechsterMarktwert, playerLeft.Alter, playerRight.Alter);
    var ratingLeft = [rating[0], rating[2], rating[4], rating[6], rating[8], rating[10], rating[12], rating[14]];
    var ratingRight = [rating[1], rating[3], rating[5], rating[7], rating[9], rating[11], rating[13], rating[15]];
    //refresh both details
    refreshDetails(playerLeft, "textDetailsLeft", ratingLeft);
    refreshDetails(playerRight, "textDetailsRight", ratingRight); 
}
else {
    //create one player without rating
    var dummy = [];
    for (var i = 0; i < 8; i++) {
        dummy[i]='';
    }
    refreshDetails(player, targetDOM, dummy);
}

function refreshDetails(chosenPlayer, Dom, rating) {          
//write JSON content into Element on Webpage as a table
document.getElementById(Dom).innerHTML = 
"<img src="+chosenPlayer.PictureURL+" width=160px height=auto draggable=false>"+ 
"<table style='margin-left:auto; margin-right:auto;'>"+
"<tr><td>Spielername:</td><td>" + chosenPlayer.Name + 
"</td></tr><tr><td>Größe:</td><td>" + chosenPlayer.Groesse + rating[0] +
"</td></tr><tr><td>Nationalität:</td><td>" + chosenPlayer.Nationalitaet +
"</td></tr><tr><td>Verein:</td><td>" + chosenPlayer.Verein +
"</td></tr><tr><td>Im Team seit:</td><td>" + chosenPlayer.ImTeamSeit + rating[1] +
"</td></tr><tr><td>Schuhgrösse:</td><td>" + chosenPlayer.Schuhgroesse + rating[2] +
"</td></tr><tr><td>Schuhmodell:</td><td>" + chosenPlayer.Schuhmodell +
"</td></tr><tr><td>Position:</td><td>" + chosenPlayer.Position +
"</td></tr><tr><td>Vertrag bis:</td><td>" + chosenPlayer.VertragBis + rating[3] +
"</td></tr><tr><td>Aktueller Marktwert:</td><td>" + chosenPlayer.AktuellerMarktwert + rating[4] +
"</td></tr><tr><td>Geburtsdatum:</td><td>" + chosenPlayer.Geburtsdatum +
"</td></tr><tr><td>Schussfuss:</td><td>" + chosenPlayer.Schussfuss + rating[5] +
"</td></tr><tr><td>Alter:</td><td>" + chosenPlayer.Alter + rating[7] +
"</td></tr><tr><td>Höchster Marktwert:</td><td>" + chosenPlayer.HoechsterMarktwert + rating[6] +
"</td></tr><tr><td>Geburtsort:</td><td>" + chosenPlayer.Geburtsort +
"</td></tr><tr><td>Spielerberater:</td><td>" + chosenPlayer.Spielerberater +
"</td></tr><tr><td>Ausruester:</td><td>" + chosenPlayer.Ausruester +
 "</td></tr></table>";
}
          
      } else {
        alert('There was a problem with the playerInfo request.');
      }
    }
  }

//Rate the PlayerStats
function compareStats(groesse1, groesse2, imTeamSeit1, imTeamSeit2, schuhgroesse1, schuhgroesse2, vertragBis1, vertragBis2, aktuellerMarktwert1, aktuellerMarktwert2, schussfuss1, schussfuss2, hoechsterMarktwert1, hoechsterMarktwert2, alter1, alter2) {
    
    
    //change Mio. & Tsd. to numbers with regular expressions and parseInt()
    var re = /( Mio\. €)/;
    var re2 = /( Tsd\. €)/;
    var re3 = /(,)/;
    //aktuellerMarktwert1
    aktuellerMarktwert1 = aktuellerMarktwert1.replace(re, "0000");
    aktuellerMarktwert1 = aktuellerMarktwert1.replace(re2, "000");
    aktuellerMarktwert1 = aktuellerMarktwert1.replace(re3, "");
    var aktuellerMarktwert1Nmbrs = parseInt(aktuellerMarktwert1);
    //aktuellerMarktwert2
    aktuellerMarktwert2 = aktuellerMarktwert2.replace(re, "0000");
    aktuellerMarktwert2 = aktuellerMarktwert2.replace(re2, "000");
    aktuellerMarktwert2 = aktuellerMarktwert2.replace(re3, "");
    var aktuellerMarktwert2Nmbrs = parseInt(aktuellerMarktwert2);
    //hoechsterMarktwert1
    hoechsterMarktwert1 = hoechsterMarktwert1.replace(re, "0000");
    hoechsterMarktwert1 = hoechsterMarktwert1.replace(re2, "000");
    hoechsterMarktwert1 = hoechsterMarktwert1.replace(re3, "");
    var hoechsterMarktwert1Nmbrs = parseInt(hoechsterMarktwert1);
    //hoechsterMarktwert2
    hoechsterMarktwert2 = hoechsterMarktwert2.replace(re, "0000");
    hoechsterMarktwert2 = hoechsterMarktwert2.replace(re2, "000");
    hoechsterMarktwert2 = hoechsterMarktwert2.replace(re3, "");
    var hoechsterMarktwert2Nmbrs = parseInt(hoechsterMarktwert2);
    
    //images in string code
    var arrowUp = "<img src='/static/img/arrowUp.png' width=30 height=auto align=right draggable=false>"
    var arrowDown = "<img src='/static/img/arrowDown.png' width=30 height=auto align=right draggable=false>"
    var equal = "<img src='/static/img/equal.png' width=30 height=auto align=right draggable=false>"
    //rating array
    var rating = [];
        /*
        0 = groesse1, 
        1 = groesse2, 
        2 = imTeamSeit1,
        3 = imTeamSeit2, 
        4 = schuhgroesse1, 
        5 = schuhgroesse2, 
        6 = vertragBis1, 
        7 = vertragBis2, 
        8 = aktuellerMarktwert1, 
        9 = aktuellerMarktwert2, 
        10 = schussfuss1, 
        11 = schussfuss2, 
        12 = hoechsterMarktwert1, 
        13 = hoechsterMarktwert2, 
        14 = alter1, 
        15 = alter2    
        */
    
    //Comparism
    switch(true) { //größer => besser
        case (groesse1=="n.a."||groesse2=="n.a."): rating[0] = ''; rating[1] = ''; break;
        case (groesse1>groesse2): rating[0] = arrowUp; rating[1] = arrowDown; break;
        case (groesse1<groesse2): rating[0] = arrowDown; rating[1] = arrowUp; break;
        case (groesse1==groesse2): rating[0] = equal; rating[1] = equal; break; }
    switch(true) { //länger im Team => besser
        case (imTeamSeit1=="n.a."||imTeamSeit2=="n.a."): rating[2] = ''; rating[3] = ''; break;
        case (imTeamSeit1<imTeamSeit2): rating[2] = arrowUp; rating[3] = arrowDown; break;
        case (imTeamSeit1>imTeamSeit2): rating[2] = arrowDown; rating[3] = arrowUp; break;
        case (imTeamSeit1==imTeamSeit2): rating[2] = equal; rating[3] = equal; break; }
    switch(true) { //größere Schuhgröße => besser
        case (schuhgroesse1=="n.a."||schuhgroesse2=="n.a."): rating[4] = ''; rating[5] = ''; break;
        case (schuhgroesse1>schuhgroesse2): rating[4] = arrowUp; rating[5] = arrowDown; break;
        case (schuhgroesse1<schuhgroesse2): rating[4] = arrowDown; rating[5] = arrowUp; break;
        case (schuhgroesse1==schuhgroesse2): rating[4] = equal; rating[5] = equal; break; }
    switch(true) { //längerer Vertrag => besser
        case (vertragBis1=="n.a."||vertragBis2=="n.a."): rating[6] = ''; rating[7] = ''; break;
        case (vertragBis1>vertragBis2): rating[6] = arrowUp; rating[7] = arrowDown; break;
        case (vertragBis1<vertragBis2): rating[6] = arrowDown; rating[7] = arrowUp; break;
        case (vertragBis1==vertragBis2): rating[6] = equal; rating[7] = equal; break; }
    switch(true) { //hoher Marktwert => besser
        case (aktuellerMarktwert1Nmbrs=="n.a."||aktuellerMarktwert2Nmbrs=="n.a."): rating[8] = ''; rating[9] = ''; break;
        case (aktuellerMarktwert1Nmbrs>aktuellerMarktwert2Nmbrs): rating[8] = arrowUp; rating[9] = arrowDown; break;
        case (aktuellerMarktwert1Nmbrs<aktuellerMarktwert2Nmbrs): rating[8] = arrowDown; rating[9] = arrowUp; break;
        case (aktuellerMarktwert1Nmbrs==aktuellerMarktwert2Nmbrs): rating[8] = equal; rating[9] = equal; break; }
    switch(true) { //beidfüßig => besser als rechts/links
        case (schussfuss1=="n.a."||schussfuss2=="n.a."): rating[10] = ''; rating[11] = ''; break;
        case (schussfuss1=='beidfüßig'&&(schussfuss2=='links'||schussfuss2=='rechts')): rating[10] = arrowUp; rating[11] = arrowDown; break;
        case (schussfuss2=='beidfüßig'&&(schussfuss1=='links'||schussfuss1=='rechts')): rating[10] = arrowDown; rating[11] = arrowUp; break;
        case (schussfuss1==schussfuss2||(schussfuss1=='links'&&schussfuss2=='rechts')||(schussfuss2=='links'&&schussfuss1=='rechts')): rating[10] = equal; rating[11] = equal; break; }
    switch(true) { //hoher Marktwert => besser
        case (hoechsterMarktwert1Nmbrs=="n.a."||hoechsterMarktwert2Nmbrs=="n.a."): rating[12] = ''; rating[13] = ''; break;
        case (hoechsterMarktwert1Nmbrs>hoechsterMarktwert2Nmbrs): rating[12] = arrowUp; rating[13] = arrowDown; break;
        case (hoechsterMarktwert1Nmbrs<hoechsterMarktwert2Nmbrs): rating[12] = arrowDown; rating[13] = arrowUp; break;
        case (hoechsterMarktwert1Nmbrs==hoechsterMarktwert2Nmbrs): rating[12] = equal; rating[13] = equal; break; }
    switch(true) { //junges Alter => besser
        case (alter1=="n.a."||alter2=="n.a."): rating[14] = ''; rating[15] = ''; break;
        case (alter1<alter2): rating[14] = arrowUp; rating[15] = arrowDown; break;
        case (alter1>alter2): rating[14] = arrowDown; rating[15] = arrowUp; break;
        case (alter1==alter2): rating[14] = equal; rating[15] = equal; break; }
    
    return rating;
}


//*************************************************************************************
// Welcome Text in textDetails

function writeWelcomeText() {
  document.getElementById("textDetailsLeft").innerHTML = "<p> Hey, das ist die Fußball App!"+
  "<br><p>Zieht einen Spieler hierher!</p><br><br><p> Meldet euch mit Facebook an oder nutzt den Chat!</p>"
  document.getElementById("textDetailsRight").innerHTML = "<p> Hey, das ist die Fußball App!"+
  "<br><p>Zieht einen Spieler hierher!</p><br><br><p> Meldet euch mit Facebook an oder nutzt den Chat!</p>"
}
//*************************************************************************************
// Initial Setup

requestPlayerList();
createRightColumn();
if (isAuthenticated) {
requestPlayerDetail("userImage");
} else{
writeWelcomeText();
};