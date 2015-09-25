// run in a NodeJS app

//gets data from file and decodes it (Umlaute usw)

fs = require('fs')
fs.readFile('data/arjenrobben.pd', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    json = JSON.parse(data);
    console.log(json);                    //whole JSON
    console.log(json["Spielerberater"]);  //just Spielerberater - Value
    console.log(json["ImTeamSeit"]);    //just Im Team seit - Value

});

//----------------------------------

fs = require('fs')
fs.readFile('data/general/playerData.pd', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }

    json = JSON.parse(data);
    //console.log(json)

    for (var player in json) {


        console.log(player)
        var filename = json[player].filename;
        console.log(filename);
        var playername = json[player].playername;
        console.log(playername);
        var imageurl = json[player].imageurl;
        console.log(imageurl);
    }

});

