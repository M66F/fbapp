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
    searchText.text = "result";
    alert(event);
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
  if (true) {

  speechImage.src = '/static/img/mic-slash.gif';
  alert('Spracheingabe gestartet!');
  recognition.start();
  };
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
                out += "<li><div class= 'playerBox'><img src=" + playerList[player].imageurl + " id=" + playerList[player].filename + " draggable='true' ondragstart='drag(event)' ></img><p>" + playerList[player].playername + "</p></div></li>";
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
requestPlayerList();

//**************************************************************************************
//make httpRequest to server to get detail information JSON for a specific player
  function requestPlayerDetail(filename) {
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

//handle Detail JSON file, when it is returned
  function writePlayerDetail() {
    //check if httpRequest was successful
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        //put JSON into var and parse it
        var player = JSON.parse(httpRequest.responseText);

//write JSON content into Element on Webpage as a table
document.getElementById("textDetails").innerHTML =
"<img src="+player.PictureURL+" style='width:160px;height:200;'><img>"+ 
"<table style='margin-left:auto; margin-right:auto;'>"+
"<tr><td>Spielername:</td><td>" + player.Name + 
"</td></tr><tr><td>Größe:</td><td>" + player.Groesse +
"</td></tr><tr><td>Nationalität:</td><td>" + player.Nationalitaet +
"</td></tr><tr><td>Verein:</td><td>" + player.Verein +
"</td></tr><tr><td>Im Team seit:</td><td>" + player.ImTeamSeit +
"</td></tr><tr><td>Schuhgrösse:</td><td>" + player.Schuhgroesse +
"</td></tr><tr><td>Schuhmodell:</td><td>" + player.Schuhmodell +
"</td></tr><tr><td>Position:</td><td>" + player.Position +
"</td></tr><tr><td>Vertrag bis:</td><td>" + player.VertragBis +
"</td></tr><tr><td>Aktueller Marktwert:</td><td>" + player.AktuellerMarktwert +
"</td></tr><tr><td>Geburtsdatum:</td><td>" + player.Geburtsdatum +
"</td></tr><tr><td>Schussfuss:</td><td>" + player.Schussfuss +
"</td></tr><tr><td>Alter:</td><td>" + player.Alter +
"</td></tr><tr><td>Höchster Marktwert:</td><td>" + player.HoechsterMarktwert +
"</td></tr><tr><td>Geburtsort:</td><td>" + player.Geburtsort +
"</td></tr><tr><td>Spielerberater:</td><td>" + player.Spielerberater +
"</td></tr><tr><td>Ausruester:</td><td>" + player.Ausruester +
 "</td></tr></table>";


      } else {
        alert('There was a problem with the playerInfo request.');
      }
    }
  }


