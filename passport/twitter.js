var TwitterStrategy = require('passport-twitter').Strategy;
var secretConfig = require('../secretConfig.js');

module.exports = function(passport) {

    passport.use('twitter', new TwitterStrategy({
        consumerKey        : secretConfig.TWITTER_APP_ID || 'Holt sie euch bei mir ab!',
        consumerSecret    : secretConfig.TWITTER_APP_SECRET,
        callbackURL     : secretConfig.TWITTER_CALLBACK_URL //,
  //      profileFields   : ['id', 'email', 'gender', 'picture', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
    },

    // twitter will send back the tokens and profile
    function(token, tokenSecret, profile, done) {

var user = JSON.stringify({
                        "id": profile.id,
                        "name": profile.name.displayName,
                        "imageURL": profile.photos[0].value
                    })

		// asynchronous
		process.nextTick(function() {


                    // if successful, return the profile
                    return done(null, user);
                });
            }

        ));
    };
