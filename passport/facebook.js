var FacebookStrategy = require('passport-facebook').Strategy;
var secretConfig = require('../secretConfig.js');

module.exports = function(passport) {

    passport.use('facebook', new FacebookStrategy({
        clientID        : secretConfig.FACEBOOK_APP_ID || 'Holt sie euch bei mir ab!',
        clientSecret    : secretConfig.FACEBOOK_APP_SECRET,
        callbackURL     : secretConfig.FACEBOOK_CALLBACK_URL,
        profileFields   : ['id', 'email', 'gender', 'picture', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']
    },

    // facebook will send back the tokens and profile
    function(access_token, refresh_token, profile, done) {
var user = JSON.stringify({
                        "id": profile.id,
                        "name": profile.name.givenName,
                        // request for a fitting resolution of the profile picture
                        "imageURL": "https://graph.facebook.com/" + profile.id + "/picture" + "?width=160&height=208" + "&access_token=" + access_token
                    })

		// asynchronous
		process.nextTick(function() {


                    // if successful, return the profile
                    return done(null, user);
                });
            }

        ));
    };
