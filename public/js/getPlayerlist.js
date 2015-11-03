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

            //structure for player preparation
            var ul = document.createElement("ul");
                ul.id = "ul";
            var li = document.createElement("li");
            var div = document.createElement("div");
                div.classList.add("playerBox");
            var img = document.createElement("img");
                img.setAttribute("draggable","true");
                img.setAttribute("ondragstart","drag(event)");
                img.height = 130;
                img.width = 100;
                img.setAttribute("onclick", "mobileOnclick(this.id)");
            var p = document.createElement("p");

            function appendToUl () {

                    div.appendChild(img);
                    div.appendChild(p);
                    li.appendChild(div);
                    ul.appendChild(li);
            }

            //loop through the players in the JSON file
            for (var player in playerList) {

            img= img.cloneNode(false);
            p = p.cloneNode(false);
            div = div.cloneNode(false);
            li = li.cloneNode(false);
                    //create a button with id and drag capability for each player ( the  function called by drop will get you detailed info on the player of the button)

                if (searchString == "") {
                    if(localStorage.getItem("saveFlag") == "true" && localStorage.getItem("pictureURL") && i == 0) {
                        img.src = localStorage.getItem('pictureURL');
                        img.id='ownPlayer';
                        p.appendChild(document.createTextNode(localStorage.getItem("spielername")));

                        i++;
                    appendToUl();
                    }
                    if(j >= random && j < random+limitSize) {
                        img.src = playerList[player].imageurl;
                        img.id=playerList[player].filename;
                        p.appendChild(document.createTextNode(playerList[player].playername));


                    i++;
                    appendToUl();
                    }
                }
                else if (localStorage.getItem("spielername") && localStorage.getItem("spielername").toUpperCase().match(searchString.toUpperCase().replace(" ", "(.)*")) && includeOwnPlayer == false) {
                        
                        img.src = localStorage.getItem('pictureURL');
                        img.id='ownPlayer';
                        p.appendChild(document.createTextNode(localStorage.getItem("spielername")));

                    i++;
                    includeOwnPlayer = true;
                appendToUl();
                }
                else if ((playerList[player].playername.toUpperCase().match(searchString.toUpperCase().replace(" ", "(.)*"))) && i < limitSize) {
                       
                        img.src = playerList[player].imageurl;
                        img.id=playerList[player].filename;
                        p.appendChild(document.createTextNode(playerList[player].playername));
                    i++;
                appendToUl();
                }



                j++; // loop counter for random start
            }

            //end of list
            
            //bring the List of Buttons into the DOM
            document.getElementById("playerColumn").innerHTML = "";
            document.getElementById("playerColumn").appendChild(ul);

        } else {
            alert('There was a problem with the get playerList request.');
        }
    }
}

function mobileOnclick(filename) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        target = "detailsLeft";
        requestPlayerDetail(filename);
    }
}




