var TwitterStrategy = require('passport-twitter').Strategy;
var secretConfig = require('../secretConfig.js');

module.exports = function(passport) {

    passport.use('twitter', new FacebookStrategy({
        clientID        : secretConfig.TWITTER_APP_ID || 'Holt sie euch bei mir ab!',
        clientSecret    : secretConfig.TWITTER_APP_SECRET,
        callbackURL     : secretConfig.TWITTER_CALLBACK_URL //,
  //      profileFields   : ['id', 'email', 'gender', 'picture', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
    },

    // twitter will send back the tokens and profile
    function(access_token, refresh_token, profile, done) {

    	console.log('profile', profile);

        console.log(JSON.stringify(profile));

		// asynchronous
		process.nextTick(function() {


                    // if successful, return the profile
                    return done(null, profile);
                });
            }

        ));
    };
