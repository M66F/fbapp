# fbapp
Fußball Webapp für die Vorlesung Web Entwicklung

Server starten:

Im Directory die Befehle:

     npm install -g grunt-cli (wenn noch nicht gemacht)

     npm install

     grunt (auf Unix Geräten(Mac/Linux) sudo Grunt)

ausführen.

Der Server läuft auf dem Port 80.

# Features
*   Datenstamm: 
    *   Die komplette erste Bundesliga in der Form von JSON formatierten Dateien (keine Datenbank!)
*   Arbeit mit dem Datenstamm:
    *   Drag & Drop der Spielerbilder
    *   Vergleich verschiedener Spieler untereinander
    *   Zufallsbasierte ausgabe einer Spielerliste beim Aufrufen der Seite
    *   Live Suchfunktion der Spielerliste mit Spracheingabe
*   zusätzlich verfügbare Features bei Login (über Facebook und Twitter):
    *   Create Your Player: Erstellen eines eigenen Spielers (Ablage im Localstorage) und Vergleich mit anderen Spielern
    *   Upload des Spielerbildes über die HTML 5 File API
    *   Twitter Livefeed unter dem Hashtag: #Bundesliga
*   weiteres:
    *   Impressum
    *   responsive Design
    
# Dateien
*   bin
    *   www
*   crawly
    *   data
        Ordner mit 
    *   nodeDemo
    *   crawly.py
start.py
*   passport
    Beinhaltet Einstellungen für den OAuth Login bei Facebook und Twitter
*   public
    *   css
    *   img
    *   js
        *   compareStats.js
        *   createyourplayer.js
        *   dragAndDrop.js
        *   getPlayerDetail.js
        *   getPlayerlist.js
        *   impressum.js
        *   index.controller.js
        *   loginCSS.js
        *   parseTwitterFeed.js
        *   speechRecognition.js
        *   verticalResize.js
        *   writeDetails.js
        *   wsclient.js
*   routes 
*   tools/LinkExtractor
*   views
    *   createyourplayer.ejs
    *   error.ejs
    *   footer.ejs
    *   header.ejs
    *   impressum.ejs
    *   index.ejs
    *   wwsChat.ejs
    
*   Gruntfile.js
*   app.js