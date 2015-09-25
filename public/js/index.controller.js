
  var httpRequest;

  function requestPlayerData(playerid) {
         httpRequest = new XMLHttpRequest();
   

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = writePlayerDetail;
    httpRequest.open('GET', '/playerdata/' + playerid + '.pd');
    httpRequest.send();
  }

  function writePlayerDetail() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var player = JSON.parse(httpRequest.responseText);

document.getElementById("data").innerHTML = 'Spielername: ' + player.Name + ' Verein:' + player.Verein;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
