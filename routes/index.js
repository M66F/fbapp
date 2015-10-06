var express = require('express');
var router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

module.exports = function (passport) {
//***********************************************************************************************
//basic page routing


    router.get('/', function (req, res) {

        //check if user is authenticated
        if (req.isAuthenticated()) {

            //user is authenticated -> send his user profile
            res.render('index', {
                    title: "Die Fußball App",
                    isAuthenticated: req.isAuthenticated(),
                    user: JSON.stringify({
                        "id": req.user.id,
                        "name": req.user.name.givenName,
                        "imageURL": req.user.photos[0].value
                    })
                }
            );
        } else {
            // user is not authenticated
            res.render('index', {
                    title: "Die Fußball App",
                    isAuthenticated: req.isAuthenticated(),
                    user: ""
                }
            );
        }

    });

//***********************************************************************************************
//facebook routing
    router.get('/auth/facebook',
        passport.authenticate('facebook', {scope: 'public_profile'})
    );


// handle the callback after facebook has authenticated the user
    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/'
        })
    );

//***********************************************************************************************
    router.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/');
    });
    router.get('/chat', function (req, res) {
        res.render('wwsChat', {title: "Chat"});
    });
    router.get('/impressum', function (req, res) {
        res.render('impressum', {title: "Impressum"});
    });

    return router;
}
