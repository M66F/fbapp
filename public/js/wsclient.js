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


    socket.on('reload', function () {
        location.reload();
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

    socket.on('twitterFeed', function (data) {
    parseTwitterFeed(data.feed);
});
    



    var commandHistory = [];
    var commandPointer = 0;

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
        commandPointer = commandHistory.length;
        commandPointer++;
        commandHistory.push(document.getElementById("text").value);
    }
    // Text-Eingabe leeren
    document.getElementById("text").value = "";
}


function checkKey() {
    if (event.keyCode == 13 || event.charCode == 13) {
        send();
    } else if (event.keyCode == 38 || event.charCode == 38) {
        if(commandPointer > 0) {
            commandPointer--;
            document.getElementById("text").value = commandHistory[commandPointer];
        }
    } else if (event.keyCode == 40 || event.charCode == 40) {
        if (commandPointer < commandHistory.length - 1) {
            commandPointer++;
            document.getElementById("text").value = commandHistory[commandPointer];
        } else if (commandPointer == commandHistory.length - 1) {
            document.getElementById("text").value = "";
            commandPointer++;
        }
    }
    }

};