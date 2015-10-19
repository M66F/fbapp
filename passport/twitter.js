var TwitterStrategy = require('passport-twitter').Strategy;
var secretConfig = require('../secretConfig.js');

module.exports = function(passport) {

    passport.use('twitter', new TwitterStrategy({
        consumerKey        : secretConfig.TWITTER_APP_ID || 'Holt sie euch bei mir ab!',
        consumerSecret    : secretConfig.TWITTER_APP_SECRET,
        callbackURL     : secretConfig.TWITTER_CALLBACK_URL //,
   },
 
    // twitter will send back the tokens and profile
    function(token, tokenSecret, profile, done) {
    var name = profile.displayName;
    var re = /(')/;
    name = name.replace(re, "");
var user = JSON.stringify({
                        "id": profile.id,
                        "name": name,
                        "imageURL": profile.photos[0].value.replace("_normal","")
                    })

		// asynchronous
		process.nextTick(function() {

                    // if successful, return the profile
                    return done(null, user);
                });
            }

        ));
    };
