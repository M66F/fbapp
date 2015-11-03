//**************************************************************************************************



function checkAuth() {
    if (isAuthenticated) {
        var textDetailsLeft = document.getElementById("textDetailsLeft");
        if(localStorage.getItem("pictureURL")) {
            //get order in div container
            
            var img = new Image();
            textDetailsLeft.parentNode.insertBefore(textDetailsLeft,textDetailsLeft.parentNode.children[0]);
      
            if (textDetailsLeft.parentNode.children[2]) {
               textDetailsLeft.parentNode.removeChild(textDetailsLeft.parentNode.children[2]);
            }; 
            // picture input
            img.src = localStorage.getItem("pictureURL");
            img.onload = function() {
                textDetailsLeft.innerHTML =
                    "<img src='" + img.src + "' style='width:100px;height:120;' draggable = false id = 'playerPic'>" + "<br>" +
                    "<input type='file' name='file' id='fileSelect' accept='image/x-png, image/gif, image/jpeg' />" +
                        "<input type='button' id='reset' onclick='resetPlayerImage()' value='reset' />";
                document.getElementById('fileSelect').onchange = function(evt) {
                    handleFileSelect(evt.srcElement.files[0]);
                };
            }


        }
        else {
            textDetailsLeft.innerHTML =
                "<img src='" + user.imageURL + "' style='width:100px;height:120;' draggable = false id = 'playerPic'>" + "<br>" +
                "<input type='file' name='file' id='fileSelect' accept='image/x-png, image/gif, image/jpeg' />";
            document.getElementById('fileSelect').onchange = function(evt) {
                handleFileSelect(evt.srcElement.files[0]);
            };
        }

//**************************************************************************************************
// if user is logged in, change login Div to Logout
function SwapDivs()
{
    if (isAuthenticated) {
        document.getElementById('loginButton').remove();
        document.getElementById('dropdown').remove();
        document.getElementById('logoutButton').style.display = "block";
    }
}

    

    document.getElementById("inputForm").style.display = "block";

    document.getElementById("spielername").value = user.name;


    }
    else {
        alert('Login to use this feature');
    }
}

// Function to save player into local storage
function saveToLS() {

    if(document.getElementById("spielername").value == "" || document.getElementById("imTeamSeit").value == "" || document.getElementById("geburtsdatum").value == "" || document.getElementById("vertragBis").value == "") {
        alert("Please fill out the required fields! (Date fields)");
        return;
    }

    if(typeof(Storage) !== "undefined") {
        localStorage.setItem("saveFlag", "true");
        localStorage.setItem("spielername", document.getElementById("spielername").value);
        localStorage.setItem("groesse", document.getElementById("groesse").value);
        localStorage.setItem("nationalitaet", document.getElementById("nationalitaet").value);
        localStorage.setItem("verein", document.getElementById("verein").value);
        localStorage.setItem("imTeamSeit", parseDate(document.getElementById("imTeamSeit").value));
        localStorage.setItem("schuhgroesse", document.getElementById("schuhgroesse").value);
        localStorage.setItem("schuhmodell", document.getElementById("schuhmodell").value);
        localStorage.setItem("position", document.getElementById("position").value);
        localStorage.setItem("vertragBis", parseDate(document.getElementById("vertragBis").value));
        localStorage.setItem("aktuellerMarktwert", document.getElementById("aktuellerMarktwert").value);
        localStorage.setItem("geburtsdatum", parseDate(document.getElementById("geburtsdatum").value));
        localStorage.setItem("alter", document.getElementById("alter").value);
        localStorage.setItem("schussfuss", document.getElementById("schussfuss").value);
        localStorage.setItem("hoechsterMarktwert", document.getElementById("hoechsterMarktwert").value);
        localStorage.setItem("geburtsort", document.getElementById("geburtsort").value);
        localStorage.setItem("spielerberater", document.getElementById("spielerberater").value);
        localStorage.setItem("ausruester", document.getElementById("ausruester").value);
        if(!localStorage.getItem("pictureURL")) {
            localStorage.setItem("pictureURL", user.imageURL);
        }

        alert("Player saved!");
        window.open("/","_self")
        
    } else {
        alert("Sorry, your browser doesn't support local storage :(")
    }
}

// calculate age from inserted date
function calcAge(input) {
    if (input.value != undefined) {
        if(new Date().getMonth() > new Date(input.value).getMonth() ) {
            var age = new Date().getFullYear() - new Date(input.value).getFullYear();
        } else if(new Date().getMonth() == new Date(input.value).getMonth() ) {
            if(new Date().getDate() >= new Date(input.value).getDate()) {
                var age = new Date().getFullYear() - new Date(input.value).getFullYear();
            } else {
                var age = new Date().getFullYear() - new Date(input.value).getFullYear() - 1;
            }
        }
        else {
            var age = new Date().getFullYear() - new Date(input.value).getFullYear() - 1;
        }

        if(age != "NaN") {
            document.getElementById("alter").value = age;
        }
    }
}

// parse date from american to german format
function parseDate(input) {
    if(input != "") {
        var split = input.split('-');
        return split[2] + "." + split[1] + "." + split[0];
    }
    else {
        return "n.a."
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