//**************************************************************************************
// [Detailcategory, property in Playerobject, Position in Rating-Array (if it exists)]
var detailArray = 
        [
            ["Spielername:","Name"],["Größe:","Groesse",0],["Nationalität:","Nationalitaet"],
            ["Verein:","Verein"],["Im Team seit:","ImTeamSeit",1],["Schuhgröße:","Schuhgroesse",2],
            ["Schuhmodell:","Schuhmodell"],["Position:","Position"],["Vertrag bis:","VertragBis",3],
            ["Aktueller Marktwert:","AktuellerMarktwert",4],["Geburtsdatum:","Geburtsdatum"],
            ["Alter:","Alter",7],["Schussfuß:","Schussfuss",5],["Höchster Marktwert:","HoechsterMarktwert",6],
            ["Geburtsort:","Geburtsort"],["Spielerberater:","Spielerberater"],["Ausrüster:","Ausruester"]
        ];

//display detailed info about the selected player
function writePlayerDetail(ownPlayerFlag) {
    //get data for locally created player
    if (ownPlayerFlag == true) {
        var playerObj = new Object();
        playerObj.Name = localStorage.getItem("spielername");
        playerObj.Groesse  = localStorage.getItem("groesse");
        playerObj.Nationalitaet = localStorage.getItem("nationalitaet");
        playerObj.Verein = localStorage.getItem("verein");
        playerObj.ImTeamSeit = localStorage.getItem("imTeamSeit");
        playerObj.Schuhgroesse = localStorage.getItem("schuhgroesse");
        playerObj.Schuhmodell = localStorage.getItem("schuhmodell");
        playerObj.Position = localStorage.getItem("position");
        playerObj.VertragBis = localStorage.getItem("vertragBis");
        playerObj.AktuellerMarktwert = localStorage.getItem("aktuellerMarktwert");
        playerObj.Geburtsdatum = localStorage.getItem("geburtsdatum");
        playerObj.Alter = localStorage.getItem("alter");
        playerObj.Schussfuss = localStorage.getItem("schussfuss");
        playerObj.HoechsterMarktwert = localStorage.getItem("hoechsterMarktwert");
        playerObj.Geburtsort = localStorage.getItem("geburtsort");
        playerObj.Spielerberater = localStorage.getItem("spielerberater");
        playerObj.Ausruester = localStorage.getItem("ausruester");
        playerObj.PictureURL = localStorage.getItem("pictureURL");
        var player = JSON.stringify(playerObj);
        player = JSON.parse(player);

httpRequest.readyState = 4;
httpRequest.status = 200;
}

//get data from Detail JSON file, when it is returned
        //check if httpRequest was successful
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                //put JSON into var and parse it
                if (ownPlayerFlag !== true) {
                var player = JSON.parse(httpRequest.responseText);
           }

//Set Target for Drop Event
        if (target == "detailsLeft") {
            var targetDOM = "detailsLeft";
            playerLeft = player;
        }
        else if (target == "detailsRight") {
            var targetDOM = "detailsRight";
            playerRight = player;
        }


        if ((playerLeft != undefined) && (playerRight != undefined)) {
            //get rating from compareStats and divide into ratingLeft and ratingRight
            var rating = compareStats(playerLeft.Groesse, playerRight.Groesse, playerLeft.ImTeamSeit, playerRight.ImTeamSeit, playerLeft.Schuhgroesse, playerRight.Schuhgroesse, playerLeft.VertragBis, playerRight.VertragBis, playerLeft.AktuellerMarktwert, playerRight.AktuellerMarktwert, playerLeft.Schussfuss, playerRight.Schussfuss, playerLeft.HoechsterMarktwert, playerRight.HoechsterMarktwert, playerLeft.Alter, playerRight.Alter);
            var ratingLeft = [rating[0], rating[2], rating[4], rating[6], rating[8], rating[10], rating[12], rating[14]];
            var ratingRight = [rating[1], rating[3], rating[5], rating[7], rating[9], rating[11], rating[13], rating[15]];
            //refresh both details
            refreshDetails(playerLeft, "detailsLeft", ratingLeft);
            refreshDetails(playerRight, "detailsRight", ratingRight);
        }
        else {
            //create one player without rating
            var dummy = [];
            for (var i = 0; i < 8; i++) {
                dummy[i] = '';
            }
            refreshDetails(player, targetDOM, dummy);
        }

 } else {
                alert('There was a problem with the playerInfo request.');


            }
        }
    }
//********************************************************************************************************************************************


//write JSON content and Rating into Element on Webpage as a table
                function refreshDetails(chosenPlayer, Dom, rating) {

                    //clear current content 
                var container = document.getElementById(Dom);
                while (container.firstChild) {container.removeChild(container.firstChild);}

                var divImage = document.createElement('div');
                divImage.align = 'center';
                var image = document.createElement('img');
                image.src = chosenPlayer.PictureURL;
                image.draggable = 'false';
                image.style.height = '208px';
                image.style.width = '160px';
                divImage.appendChild(image);
                //console.log(chosenPlayer);
                document.getElementById(Dom).appendChild(divImage);

                // [Detailkategorie, property im Spielerobjekt, Position im Rating-Array (wenn vorhanden)]

                var table = document.createElement('table');
                table.style.marginLeft, table.style.marginRight = 'auto';

                var tr, td, text;

                //loop through the categories 
                for (var i = 0; i <= detailArray.length - 1; i++) {
                        //new row
                    tr = document.createElement('tr');
                            //category
                            td = document.createElement('td');
                            text = document.createTextNode(detailArray[i][0]);
                            td.appendChild(text);
                        tr.appendChild(td);
                        //Value
                            td = document.createElement('td');
                            text = document.createTextNode(chosenPlayer[detailArray[i][1]]);
                            td.appendChild(text);
                        tr.appendChild(td);
                        //comparison rating

                            td = document.createElement('td');
                             if (rating[detailArray[i][2]] !== "" && detailArray[i][2] !== undefined){
                                text = document.createElement('img');
                                text.src = rating[detailArray[i][2]];
                                text.className = "ratingImage";
                                text.draggable = false;

                                td.appendChild(text);
                                tr.appendChild(td);
                            };
                    //add row to table
                    table.appendChild(tr);


                    
                };
                //append table to Detail container
                container.appendChild(table);
}
