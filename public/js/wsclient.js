var socket = io.connect();

socket.on('chat', function (data) {
    console.log(data.time);
    document.getElementById("content").innerHTML += '<li>' + '<small>[' + data.time + ']</small>' + '<div style="color:red;display: inline;margin-right: 40px">' + data.name + ':</div>' +  data.text + '</li>';


});

socket.on('authorization', function(data) {
    var key = prompt("Enter chat key:");
    socket.emit('authorization', { key: key });
});

socket.on('alert', function(data) {
    alert(data.message);
    if(data.message == "Authorization failed") {
        window.location.href='/';
    }
});

socket.on('init', function(data) {
    var nameI = prompt("Enter your name:");
    document.getElementById("name").value = nameI;
    if (nameI == null) {
        document.getElementById("name").value = "!";
    }
    document.getElementById("content").innerHTML += '<li>' + '<small>[' + data.time + ']</small>' + '<div style="display: inline;margin-right: 75px">' + ':</div>' +  data.text + '</li>';
});

function send(){
    // Eingabefelder auslesen
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;
    var time = new Date().toLocaleTimeString();
    // Socket senden
    socket.emit('chat', { name: name, text: text, time: time });
    // Text-Eingabe leeren
    var obj = document.getElementById("text").value = "";
}


function sendEnter() {
    if(event.keyCode == 13) {
        send();
    }
}