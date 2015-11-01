//make httpRequest to server to get detail information JSON for a specific player
function requestPlayerDetail(filename) {


    if (filename == "userImage") {
        document.getElementById("textDetailsLeft").innerHTML =
            "<img src='" + user.imageURL + "' style='width:160px;height:200;' draggable = false>" +
            "<table style='margin-left:auto; margin-right:auto;'>" +
            "<tr><td>Spielername:</td><td>" + user.name +
            "</td></tr></table>";

    }
    else if(filename == "ownPlayer") {
        writePlayerDetail(true);
    }
    else {
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