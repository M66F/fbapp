//**********************************************************************************
//Drag and Drop Event Handling
function allowDrop(ev) {
    ev.preventDefault();
    target = ev.currentTarget.id;
    //Change Drag&Drop Picture depending on dragOver location
    if (playerLeft == undefined) {
        if (target == "detailsLeft") {
            document.getElementById("dragDropLeft").src = "/static/img/dropFile.png";
        } else {
            document.getElementById("dragDropLeft").src = "/static/img/dragFile.png";
        }
    }
    if (playerRight == undefined) {
        if (target == "detailsRight") {
            document.getElementById("dragDropRight").src = "/static/img/dropFile.png";
        } else {
            document.getElementById("dragDropRight").src = "/static/img/dragFile.png";
        }
    }
}


function drag(ev) {
    ev.dataTransfer.setData("playerID", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("playerID");
    requestPlayerDetail(id);
}

function onDragLeave(){
    document.getElementById("dragDropLeft").src = "/static/img/dragFile.png";
    document.getElementById("dragDropRight").src = "/static/img/dragFile.png";
}