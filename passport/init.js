var facebook = require('./facebook');
var twitter = require('./twitter');

module.exports = function(passport){

	//serialize and deserialize users to support persistent login sessions
    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
            done(null, obj);
        
    });

    // Setting up Passport Strategies for Facebook and Twitter
    facebook(passport);
    twitter(passport);
}