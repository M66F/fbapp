var socket = io.connect();

socket.on('chat', function (data) {
    document.getElementById("content").innerHTML += '<li>' + '<small>[' + data.time + ']</small>' + '<div style="color:red;display: inline;margin-right: 40px">' + data.name + ':</div>' +  data.text + '</li>';
    window.scrollTo(0,document.body.scrollHeight);
});

socket.on('disconnect', function() {
    document.getElementById("content").innerHTML += '<li>' + '<small>[' + new Date().toLocaleTimeString() + ']</small>' + '<div style="color:red;display: inline;margin-right: 40px">' + 'MESSAGE:' + '</div>' +  "You've been disconnected!" + '</li>';
    window.scrollTo(0,document.body.scrollHeight);
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
    window.scrollTo(0,document.body.scrollHeight);
    socket.emit('init', {name: nameI, text: nameI});
});

socket.on('disconnect', function(data) {
    document.getElementById("content").innerHTML += '<li>' + '<small>[' + new Date().toLocaleTimeString() + ']</small>'  + '<div style="display: inline;margin-left: 75px">' +  "You've been disconnected" + '</div></li>';
});

function send(){
    // Eingabefelder auslesen
    var name = document.getElementById("name").value;
    var text = document.getElementById("text").value;

    if(text != "") {
        // Socket senden
        socket.emit('chat', {name: name, text: text});
    }
    // Text-Eingabe leeren
    var obj = document.getElementById("text").value = "";
}


function sendEnter() {
    if(event.keyCode == 13) {
        send();
    }
}