function parseTwitterFeed(twitterFeed) {
    var feed = twitterFeed.statuses;
    var returnString = "";
    console.log(feed);
    for(var i = 0; i < feed.length; i++) {
        //console.log(feed[i].text);
            returnString += feed[i].text + '<br>';
    }


    document.getElementById('twitterFeed').innerHTML = '<font size="3" display="block"><b>' + returnString + '</b></font>';

}