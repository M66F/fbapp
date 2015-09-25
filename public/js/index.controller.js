
//****************************************************************************************
//make httpRequest to get the list of all players and create the list to choose from
//at the moment a list of buttons is created 


  var httpRequest;
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
    httpRequest.open('GET', '/playerdata/playerList.json');
    httpRequest.send();
}
//function to handle the returned JSON file
function createPlayerList() {
  //check if httpRequest was successful
   if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        //put received JSON file into variable and parse it
        var playerList = JSON.parse(httpRequest.responseText);
        //create a string with HTML code, which will turn into a List with a Button for each player in the List of the JSON
        //start of the List
        var out = "<ul>";
        //loop through the players in the JSON file
        for (var player in playerList) {
          //create a button with id and onclick for each player ( the  function called by onclick will get you detailed info on the player of the button)
          out += "<li><button type=submit , id="+playerList[player].playerid+" , onclick = requestPlayerData(this.id)>"+playerList[player].Name+"</button></li>";

        };
        //end the list
        out += "</ul>"
        //bring the code to create the List of Buttons into the HTML-Webpage
        document.getElementById("Buttons").innerHTML = out;

      } else {
        alert('There was a problem with the get playerList request.');
      }
    }
  }
requestPlayerList();

//**************************************************************************************
//make httpRequest to server to get detail information JSON for a specific playerid
  function requestPlayerData(playerid) {
         httpRequest = new XMLHttpRequest();
   

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = writePlayerDetail;
    //path where the detail JSON is provided
    httpRequest.open('GET', '/playerdata/' + playerid + '.pd');
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
document.getElementById("Details").innerHTML = 
"<table><tr><td>Spielername:</td><td>" + player.Name + 
"</td></tr><tr><td>Verein:</td><td>" + player.Verein + "</td></tr></table>";

      } else {
        alert('There was a problem with the playerInfo request.');
      }
    }
  }
