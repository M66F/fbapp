
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
    httpRequest.open('GET', '/playerdata/general/playerData.pd');
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
        var out = "<ul style='list-style: none;padding:0;margin:0;'>";
        //loop through the players in the JSON file
        for (var player in playerList) {
          //create a button with id and onclick for each player ( the  function called by onclick will get you detailed info on the player of the button)
          out += "<li><div class= 'playerBox'><image src="+playerList[player].imageurl+" , id="+playerList[player].filename+" , onclick = requestPlayerDetail(this.id)></image><p>"+playerList[player].playername+"</p></div></li>";

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
document.getElementById("details").innerHTML = 
"<image src=" + player.PictureURL +"></image>"+
"<table>"+
"<tr><td>Spielername:</td><td>" + player.Name + 
"</td></tr><tr><td>Größe:</td><td>" + player.Groesse +
"</td></tr><tr><td>Nationalität:</td><td>" + player.Nationalitaet +
"</td></tr><tr><td>Verein:</td><td>" + player.Verein +
"</td></tr><tr><td>Im Team seit:</td><td>" + player.ImTeamSeit +
"</td></tr><tr><td>Schuhgrösse:</td><td>" + player.Schuhgroesse +
"</td></tr><tr><td>Schuhmodell:</td><td>" + player.Schuhmodell +
"</td></tr><tr><td>Position:</td><td>" + player.Position +
"</td></tr><tr><td>VertragBis:</td><td>" + player.VertragBis +
"</td></tr><tr><td>AktuellerMarktwert:</td><td>" + player.AktuellerMarktwert +
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
