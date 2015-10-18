//**************************************************************************************************
//Speech recognition for search input field
if (!('webkitSpeechRecognition' in window)) {
    // handling if the browser doesn´t support speech recognition
    function startSpeechRecognition(event) {

        speechImage.src = '/static/img/mic-slash.gif';
        alert("Speech recognition is not enabled in your Browser! Please use the latest Version of Chrome!");
    }


} else {

    var recognition = new webkitSpeechRecognition();
    var recognizing = false;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'de-DE';

    recognition.onstart = function () {
        recognizing = true;
        speechImage.src = '/static/img/mic-animate.gif';

    };

    recognition.onresult = function (event) {
        //write recognised text into input field of search
        searchText.value = event.results[0][0].transcript;
        //update PlayerList
        createPlayerList();
    };

    //error handling
    recognition.onerror = function (event) {
        if (event.error == 'no-speech') {

            alert('No speech was detected. You may need to adjust your microphone settings!');
        }
        if (event.error == 'audio-capture') {

            alert(' No microphone was found. Ensure that a microphone is installed and that microphone settings are configured correctly!');
        }
        if (event.error == 'not-allowed') {
            alert('Permission to use microphone is blocked. To change, go to chrome://settings/contentExceptions#media-stream');
        }

        speechImage.src = '/static/img/mic.gif';
    };


    recognition.onend = function () {
        recognizing = false;
        speechImage.src = '/static/img/mic.gif';
    };

    function startSpeechRecognition(event) {
//check if speech recognition is already running
        if (recognizing == false) {

            speechImage.src = '/static/img/mic-slash.gif';
            recognition.start();
        } else {
            recognition.stop();
            speechImage.src = '/static/img/mic.gif';
        }
    }
}