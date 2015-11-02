//make httpRequest to server to get detail information JSON for a specific player
function requestPlayerDetail(filename) {



     if(filename == "ownPlayer") {
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

