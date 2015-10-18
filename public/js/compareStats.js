//Rate the PlayerStats
function compareStats(groesse1, groesse2, imTeamSeit1, imTeamSeit2, schuhgroesse1, schuhgroesse2, vertragBis1, vertragBis2, aktuellerMarktwert1, aktuellerMarktwert2, schussfuss1, schussfuss2, hoechsterMarktwert1, hoechsterMarktwert2, alter1, alter2) {


    //change Mio. & Tsd. to numbers with regular expressions and parseInt()
    var re = /( Mio\. €)/;
    var re2 = /( Tsd\. €)/;
    var re3 = /(,)/;
    //aktuellerMarktwert1
    aktuellerMarktwert1 = aktuellerMarktwert1.replace(re, "0000");
    aktuellerMarktwert1 = aktuellerMarktwert1.replace(re2, "000");
    aktuellerMarktwert1 = aktuellerMarktwert1.replace(re3, "");
    aktuellerMarktwert1 = parseInt(aktuellerMarktwert1);
    //aktuellerMarktwert2
    aktuellerMarktwert2 = aktuellerMarktwert2.replace(re, "0000");
    aktuellerMarktwert2 = aktuellerMarktwert2.replace(re2, "000");
    aktuellerMarktwert2 = aktuellerMarktwert2.replace(re3, "");
    aktuellerMarktwert2 = parseInt(aktuellerMarktwert2);
    //hoechsterMarktwert1
    hoechsterMarktwert1 = hoechsterMarktwert1.replace(re, "0000");
    hoechsterMarktwert1 = hoechsterMarktwert1.replace(re2, "000");
    hoechsterMarktwert1 = hoechsterMarktwert1.replace(re3, "");
    hoechsterMarktwert1 = parseInt(hoechsterMarktwert1);
    //hoechsterMarktwert2
    hoechsterMarktwert2 = hoechsterMarktwert2.replace(re, "0000");
    hoechsterMarktwert2 = hoechsterMarktwert2.replace(re2, "000");
    hoechsterMarktwert2 = hoechsterMarktwert2.replace(re3, "");
    hoechsterMarktwert2 = parseInt(hoechsterMarktwert2);
    
    //Dates 
    var re4 = /(\d{1,2})\.(\d{1,2})\.(\d{2,4})/;
    imTeamSeit1 = imTeamSeit1.replace(re4, "$3/$2/$1 00:00:00");
    imTeamSeit2 = imTeamSeit2.replace(re4, "$3/$2/$1 00:00:00");
    vertragBis1 = vertragBis1.replace(re4, "$3/$2/$1 00:00:00");
    vertragBis2 = vertragBis2.replace(re4, "$3/$2/$1 00:00:00");
    
    var imTeamSeit1Date = new Date(imTeamSeit1);
    var imTeamSeit2Date = new Date(imTeamSeit2);
    var vertragBis1Date = new Date(vertragBis1);
    var vertragBis2Date = new Date(vertragBis2);

    //images in string code
    var arrowUp = "<img src='/static/img/arrowUp.png' width=30 height=auto align=right draggable=false>"
    var arrowDown = "<img src='/static/img/arrowDown.png' width=30 height=auto align=right draggable=false>"
    var equal = "<img src='/static/img/equal.png' width=30 height=auto align=right draggable=false>"
    //rating array
    var rating = [];
    /*
     0 = groesse1,
     1 = groesse2,
     2 = imTeamSeit1,
     3 = imTeamSeit2,
     4 = schuhgroesse1,
     5 = schuhgroesse2,
     6 = vertragBis1,
     7 = vertragBis2,
     8 = aktuellerMarktwert1,
     9 = aktuellerMarktwert2,
     10 = schussfuss1,
     11 = schussfuss2,
     12 = hoechsterMarktwert1,
     13 = hoechsterMarktwert2,
     14 = alter1,
     15 = alter2
     */

    //Comparism
    switch (true) { //größer => besser
        case (groesse1 == "n.a." || groesse2 == "n.a."):
            rating[0] = '';
            rating[1] = '';
            break;
        case (groesse1 > groesse2):
            rating[0] = arrowUp;
            rating[1] = arrowDown;
            break;
        case (groesse1 < groesse2):
            rating[0] = arrowDown;
            rating[1] = arrowUp;
            break;
        case (groesse1 == groesse2):
            rating[0] = equal;
            rating[1] = equal;
            break;
    }
    switch (true) { //länger im Team => besser
        case (imTeamSeit1Date == "n.a." || imTeamSeit2Date == "n.a."):
            rating[2] = '';
            rating[3] = '';
            break;
        case (imTeamSeit1Date < imTeamSeit2Date):
            rating[2] = arrowUp;
            rating[3] = arrowDown;
            break;
        case (imTeamSeit1Date > imTeamSeit2Date):
            rating[2] = arrowDown;
            rating[3] = arrowUp;
            break;
        case (imTeamSeit1 == imTeamSeit2):
            rating[2] = equal;
            rating[3] = equal;
            break;
    }
    switch (true) { //größere Schuhgröße => besser
        case (schuhgroesse1 == "n.a." || schuhgroesse2 == "n.a."):
            rating[4] = '';
            rating[5] = '';
            break;
        case (schuhgroesse1 > schuhgroesse2):
            rating[4] = arrowUp;
            rating[5] = arrowDown;
            break;
        case (schuhgroesse1 < schuhgroesse2):
            rating[4] = arrowDown;
            rating[5] = arrowUp;
            break;
        case (schuhgroesse1 == schuhgroesse2):
            rating[4] = equal;
            rating[5] = equal;
            break;
    }
    switch (true) { //längerer Vertrag => besser
        case (vertragBis1Date == "n.a." || vertragBis2Date == "n.a."):
            rating[6] = '';
            rating[7] = '';
            break;
        case (vertragBis1Date > vertragBis2Date):
            rating[6] = arrowUp;
            rating[7] = arrowDown;
            break;
        case (vertragBis1Date < vertragBis2Date):
            rating[6] = arrowDown;
            rating[7] = arrowUp;
            break;
        case (vertragBis1 == vertragBis2):
            rating[6] = equal;
            rating[7] = equal;
            break;
    }
    switch (true) { //hoher Marktwert => besser
        case (isNaN(aktuellerMarktwert1) || isNaN(aktuellerMarktwert2)):
            rating[8] = '';
            rating[9] = '';
            break;
        case (aktuellerMarktwert1 > aktuellerMarktwert2):
            rating[8] = arrowUp;
            rating[9] = arrowDown;
            break;
        case (aktuellerMarktwert1 < aktuellerMarktwert2):
            rating[8] = arrowDown;
            rating[9] = arrowUp;
            break;
        case (aktuellerMarktwert1 == aktuellerMarktwert2):
            rating[8] = equal;
            rating[9] = equal;
            break;
    }
    switch (true) { //beidfüßig => besser als rechts/links
        case (schussfuss1 == "n.a." || schussfuss2 == "n.a."):
            rating[10] = '';
            rating[11] = '';
            break;
        case (schussfuss1 == 'beidfüßig' && (schussfuss2 == 'links' || schussfuss2 == 'rechts')):
            rating[10] = arrowUp;
            rating[11] = arrowDown;
            break;
        case (schussfuss2 == 'beidfüßig' && (schussfuss1 == 'links' || schussfuss1 == 'rechts')):
            rating[10] = arrowDown;
            rating[11] = arrowUp;
            break;
        case (schussfuss1 == schussfuss2 || (schussfuss1 == 'links' && schussfuss2 == 'rechts') || (schussfuss2 == 'links' && schussfuss1 == 'rechts')):
            rating[10] = equal;
            rating[11] = equal;
            break;
    }
    switch (true) { //hoher Marktwert => besser
        case (isNaN(hoechsterMarktwert1) || isNaN(hoechsterMarktwert2)):
            rating[12] = '';
            rating[13] = '';
            break;
        case (hoechsterMarktwert1 > hoechsterMarktwert2):
            rating[12] = arrowUp;
            rating[13] = arrowDown;
            break;
        case (hoechsterMarktwert1 < hoechsterMarktwert2):
            rating[12] = arrowDown;
            rating[13] = arrowUp;
            break;
        case (hoechsterMarktwert1 == hoechsterMarktwert2):
            rating[12] = equal;
            rating[13] = equal;
            break;
    }
    switch (true) { //junges Alter => besser
        case (alter1 == "n.a." || alter2 == "n.a."):
            rating[14] = '';
            rating[15] = '';
            break;
        case (alter1 < alter2):
            rating[14] = arrowUp;
            rating[15] = arrowDown;
            break;
        case (alter1 > alter2):
            rating[14] = arrowDown;
            rating[15] = arrowUp;
            break;
        case (alter1 == alter2):
            rating[14] = equal;
            rating[15] = equal;
            break;
    }

    return rating;
}

