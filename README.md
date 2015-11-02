# fbapp
Fußball Webapp für die Vorlesung Web Entwicklung

Server starten:

Im Directory die Befehle:

     npm install -g grunt-cli (wenn noch nicht gemacht)

     npm install

     grunt (auf Unix Geräten(Mac/Linux) sudo Grunt)

ausführen.

Der Server läuft auf dem Port 80.

---

# Features
## Datenstamm: 
*   Die Spieler komplette erste Bundesliga in der Form von JSON formatierten Dateien (keine Datenbank!)
## Arbeit mit dem Datenstamm:
*   Drag & Drop der Spielerbilder
*   Vergleich verschiedener Spieler untereinander
*   Zufallsbasierte ausgabe einer Spielerliste beim Aufrufen der Seite
*   Live Suchfunktion der Spielerliste mit Spracheingabe
## zusätzlich verfügbare Features bei Login (über Facebook und Twitter):
*   Create Your Player: Erstellen eines eigenen Spielers (Ablage im Localstorage) und Vergleich mit anderen Spielern
*   Upload des Spielerbildes über die HTML 5 File API
*   Twitter Livefeed unter dem Hashtag: #Bundesliga
# weiteres:
*   Impressum
*   responsive Design

  
# Erläuterung der Dateistruktur
## bin
### www
    Server Config, Websocket Server Config & Funktionen
## crawly
*   data
*   nodeDemo
*   crawly.py
*   start.py

## passport 
    Einstellungen für den OAuth Login bei Facebook und Twitter

## public
*   css
*   img
*   js
    *   compareStats.js
    
    Vergleich der Spielerdaten und Rückgabe von Wertungen in Form von Bildern.
    
    *   createyourplayer.js
    
    Formular zur Erstellung seines eigenen Spielers mit der File API und der Ablage im Localstorage.
    
    *   dragAndDrop.js
    
    Handler für die Drag&Drop Events.
    
    *   getPlayerDetail.js
    
    Fordert Spielerdaten vom Server und Verarbeitet die Informationen.
    
    *   getPlayerlist.js
    
    Fordert JSON Spielerliste (\crawly\data\general\playerData.pd) an und verarbeitet sie.
    
    *   impressum.js
    
    Scripte für das Impressum.
    
    *   index.controller.js
    
    Scripte zur Steuerung der index.ejs.
    
    *   loginCSS.js
    
    Veränderung des CSS des Login-Button Dropdown Menu.
    
    *   parseTwitterFeed.js
    
    Abfangen und Verarbeitung des empfangenen Twitter Livefeed JSONs
    
    *   speechRecognition.js
    
    Speech-To-Text Eingabe für das Suchfeld
    
    *   verticalResize.js
    
    Erfassung der Größen der verschiedenen Dic-Container, um responsiveness zu gewährleisten.
    
    *   writeDetails.js
    
    Schreibt die Spielerdaten aus dem JSON in die Div-Container in der Mitte der Seite & fängt dabei die Ablage der Drag & Drop Aktion ab.
    
    *   wsclient.js
    
    Clientlogik für den Chat.

## routes 

## tools/LinkExtractor

## views

*   error.ejs

    Abfangen und Wiedergeben von Errorcodes für den Client.

*   footer.ejs

    der Fuß der Seite (leer).

*   header.ejs

    Der Navigation Header der Seite

*   impressum.ejs
    
    Impressum

*   index.ejs    
    
    Main body der Seite

*   Gruntfile.js
    
    eine Datei zur Automatisierung der wichtigsten Serverfunktionen

*   app.js
    
    Grundlegende Serverfunktionen

---

# Themen aus der Vorlesung:
*   HTML5 File API
*   HTML5 Drag&Drop
*   HTML5 Web Storage
*   HTML5 Web Sockets
*   JavaScript: AJAX / XmlHttpRequest / XHR2
*   CSS: Basics, Rules, Selectors, Declaration Blocks, Inheritance, Specificity
*   CSS: Responsive Web Design and CSS3 Media Queries
*   CSS: CSS3 Transitions and Visual Effects
*   Node.js: Basics
*   Node.js – WS Library
*   Node.js – Authentication mit Passport
*   Node.js – Express framework