function parseTwitterFeed(twitterFeed) {
    var feed = twitterFeed.statuses;
    var returnString = "";

    document.getElementById('twitterFeed').behavior = "scroll";
    document.getElementById('twitterFeed').direction = "left";
    document.getElementById('twitterFeed').stop();
    document.getElementById('twitterFeed').innerHTML = '<font size="2" display="block"><b>' + feed[0].text + '</b></font>';

    var i = 0; //  set counter to 0

    function myLoop() { //  create a loop function
        setTimeout(function () { //  call a 8s setTimeout when the loop is called
            document.getElementById('twitterFeed').innerHTML = '<font size="2" display="block"><b>' + feed[i].text + '</b></font>';

            i++; //  increment counter
            if (i < feed.length) { //  if the counter < feed.length, call the loop function
                myLoop();
            } else {
                i = 0;
            }
        }, 50)
    }

    myLoop(); //  start the loop

}