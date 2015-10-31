function parseTwitterFeed(twitterFeed) {
    var re = /(\\)/g; //remove Backslash
    var re2 = /"text":(.)*?(",)/g; //get "text"
    var feed = twitterFeed.replace(re, "");
    feed = feed.match(re2);
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' + feed);
    document.getElementById('twitterFeed').innerHTML = '<font size="3" display="block"><b>' + feed + '</b></font>';

}