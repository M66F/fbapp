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
    console.log(json["Im Team seit"]);    //just Im Team seit - Value

});
