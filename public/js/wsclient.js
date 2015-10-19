if (isAuthenticated) {

var socket = io.connect();
var chat = document.getElementById("content");
socket.on('chat', function (data) {
    chat.innerHTML += '<li>' + '<small>[' + data.time + ']</small>' + '<div style="color:red;display: inline;margin-right: 40px">' + data.name + ':</div>' + data.text + '</li>';
    chat.scrollTop = chat.scrollHeight;
});

socket.on('disconnect', function () {
    chat.innerHTML += '<li>' + '<small>[' + new Date().toLocaleTimeString() + ']</small>' + '<div style="color:red;display: inline;margin-right: 40px">' + 'MESSAGE:' + '</div>' + "You've been disconnected!" + '</li>';
    chat.scrollTop = chat.scrollHeight;
});

socket.on('authorization', function (data) {
    //var key = prompt("Enter chat key:");
    socket.emit('authorization', {});
});

socket.on('alert', function (data) {
    alert(data.message);
    if (data.message == "Authorization failed") {
        window.location.href = '/';
    }
});

socket.on('init', function (data) {
    var nameI = user.name;
    if (nameI == null) {
        nameI = "ISetNoName";
    }
    chat.innerHTML += '<li>' + '<small>[' + data.time + ']</small>' + '<div style="display: inline;margin-right: 75px">' + ':</div>' + data.text + '</li>';
    chat.scrollTop = chat.scrollHeight;
    socket.emit('init', {name: nameI, text: nameI});
});

function send() {
    // Eingabefelder auslesen
    var name =user.name;
    var text = document.getElementById("text").value;

    if (text != "") {
        if (text.charAt(0) == '/') {
            socket.emit('command', {command: text});
        } else {
            // Nachricht senden
            socket.emit('chat', {name: name, text: text});
        }
    }
    // Text-Eingabe leeren
    var obj = document.getElementById("text").value = "";
}

function sendEnter() {
    if (event.keyCode == 13) {
        send();
    }
}

};