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
            if (playerList == undefined) {
                playerList = JSON.parse(httpRequest.responseText);
            }
            //create a string with HTML code, which will turn into a List of all Players from the JSON
            //start of the List
            var out = "<ul style='list-style: none;padding:0;margin:0;'>";
            // get search string
            var searchString = document.getElementById('searchText').value;

            searchString = searchString.replace(/[Aa]/g, "[ÄäAaÀÁáÂâ]");
            searchString = searchString.replace(/[Ee]/g, "[ÈèÉéÊêEe]");
            searchString = searchString.replace(/[Ii]/g, "[IiÍÌíìî]");
            searchString = searchString.replace(/[Oo]/g, "[ÖöOoÓÒóòôÔ]");
            searchString = searchString.replace(/[Uu]/g, "[ÜüUuÙùÚúûÛ]");
            searchString = searchString.replace(/[Cc]/g, "[ÇçCcĈĉ]");
            //searchString = searchString.replace(/[ß]/g, "[ß]{0,1}");
            //console.log(searchString);

            var numberOfPlayers = playerList.length;
            var limitSize = 20;
            var i = 0;
            var j = 0;
            var random = Math.floor(Math.random()*((numberOfPlayers-limitSize)-0+1)+0);
            var includeOwnPlayer = false;


            //loop through the players in the JSON file
            for (var player in playerList) {
                if (searchString == "") {
                    if(localStorage.getItem("saveFlag") == "true" && localStorage.getItem("pictureURL") && i == 0) {
                        out += "<li><div class= 'playerBox'><img src=" + localStorage.getItem('pictureURL') + " id='ownPlayer' width = 100 height = 130 draggable='true' ondragstart='drag(event)' ><p>" + localStorage.getItem("spielername") + "</p></div></li>";
                        i++;
                    }
                    if(j >= random && j < random+limitSize) {
                        out += "<li><div class= 'playerBox'><img src=" + playerList[player].imageurl + " id='" + playerList[player].filename + "' draggable='true' ondragstart='drag(event)' ><p>" + playerList[player].playername + "</p></div></li>";
                        i++;
                    }
                } else if (localStorage.getItem("spielername") && localStorage.getItem("spielername").toUpperCase().match(searchString.toUpperCase().replace(" ", "(.)*")) && includeOwnPlayer == false) {
                    out += "<li><div class= 'playerBox'><img src=" + localStorage.getItem('pictureURL') + " id='ownPlayer' width = 100 height = 130 draggable='true' ondragstart='drag(event)' ><p>" + localStorage.getItem("spielername") + "</p></div></li>";
                    i++;
                    includeOwnPlayer = true;
                }
                else if ((playerList[player].playername.toUpperCase().match(searchString.toUpperCase().replace(" ", "(.)*"))) && i < limitSize) {
                    //create a button with id and onclick for each player ( the  function called by onclick will get you detailed info on the player of the button)
                    out += "<li><div class= 'playerBox'><img src=" + playerList[player].imageurl + " id='" + playerList[player].filename + "' draggable='true' ondragstart='drag(event)' ><p>" + playerList[player].playername + "</p></div></li>";
                    i++;
                }
                j++; // loop counter for random start
            }

            //end the list
            out += "</ul>"
            //bring the code to create the List of Buttons into the HTML-Webpage
            document.getElementById("playerColumn").innerHTML = out;

        } else {
            alert('There was a problem with the get playerList request.');
        }
    }
}