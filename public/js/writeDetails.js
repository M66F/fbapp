//**************************************************************************************

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
            else if (target == "detailsRight") {
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
                    dummy[i] = '';
                }
                refreshDetails(player, targetDOM, dummy);
            }

            function refreshDetails(chosenPlayer, Dom, rating) {
//write JSON content into Element on Webpage as a table
                document.getElementById(Dom).innerHTML =
                    "<div align='center'>" +
                    "<img src=" + chosenPlayer.PictureURL + " width=auto height=208px draggable=false>" +
                        "</div>" +
                    "<table style='margin-left:auto; margin-right:auto;'>" +
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
                    "</td></tr><tr><td>Alter:</td><td>" + chosenPlayer.Alter + rating[7] +
                    "</td></tr><tr><td>Schussfuss:</td><td>" + chosenPlayer.Schussfuss + rating[5] +
                    "</td></tr><tr><td>Höchster Marktwert:</td><td>" + chosenPlayer.HoechsterMarktwert + rating[6] +
                    "</td></tr><tr><td>Geburtsort:</td><td>" + chosenPlayer.Geburtsort +
                    "</td></tr><tr><td>Spielerberater:</td><td>" + chosenPlayer.Spielerberater +
                    "</td></tr><tr><td>Ausrüster:</td><td>" + chosenPlayer.Ausruester +
                    "</td></tr></table>";
            }

        } else {
            alert('There was a problem with the playerInfo request.');
        }
    }
}