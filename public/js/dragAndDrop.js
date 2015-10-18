//**********************************************************************************

//Drag and Drop Event Handling
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("playerID", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("playerID");
    target = ev.currentTarget.className;
    requestPlayerDetail(id);
}