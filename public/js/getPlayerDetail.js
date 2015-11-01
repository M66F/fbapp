//make httpRequest to server to get detail information JSON for a specific player
function requestPlayerDetail(filename) {


    if (filename == "userImage") {
        if(localStorage.getItem("pictureURL")) {
            var img = new Image();

            img.src = localStorage.getItem("pictureURL");
            img.onload = function() {
                document.getElementById("textDetailsLeft").innerHTML =
                    "<img src='" + img.src + "' style='width:100px;height:120;' draggable = false id = 'playerPic'>" + "<br>" +
                    "<input type='file' name='file' id='fileSelect' accept='image/x-png, image/gif, image/jpeg' />" +
                        "<input type='button' id='reset' onclick='resetPlayerImage()' value='reset' />";
                document.getElementById('fileSelect').onchange = function(evt) {
                    handleFileSelect(evt.srcElement.files[0]);
                };
            }


        }
        else {
            document.getElementById("textDetailsLeft").innerHTML =
                "<img src='" + user.imageURL + "' style='width:100px;height:120;' draggable = false id = 'playerPic'>" + "<br>" +
                "<input type='file' name='file' id='fileSelect' accept='image/x-png, image/gif, image/jpeg' />";
            document.getElementById('fileSelect').onchange = function(evt) {
                handleFileSelect(evt.srcElement.files[0]);
            };
        }


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

function handleFileSelect(file) {
        // Only process image files.
        if (!file.type.match('image.*')) {
            return;
        }

    var reader = new FileReader();
    reader.onload = readSuccess;
    function readSuccess(evt) {
        localStorage.setItem("pictureURL", evt.target.result);
        location.reload(); // reload for new picture
    };
    reader.readAsDataURL(file);
}

function resetPlayerImage() {
    localStorage.setItem("pictureURL", user.imageURL);
    location.reload(); // reload for new picture
}