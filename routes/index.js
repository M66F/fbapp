var express = require('express');
var router = express.Router();


//***********************************************************************************************
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
                
                isAuthenticated: req.isAuthenticated(),
                user: req.user
            });
        } else {
            // user is not authenticated
            res.render('index', {
                title: "Die Fußball App",
                isAuthenticated: req.isAuthenticated(),
                user: "",
                bundesligaFeed: ""
            });
        }

    });

    //***********************************************************************************************
    //facebook routing
    router.get('/auth/facebook',
        passport.authenticate('facebook', {
            scope: 'public_profile'
        })
    );


    // handle the callback after facebook has authenticated the user
    router.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/'
        })
    );

    //***********************************************************************************************
    //twitter routing
    router.get('/auth/twitter',
        passport.authenticate('twitter', {
            scope: 'public_profile'
        })
    );


    // handle the callback after twitter has authenticated the user
    router.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
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
        res.render('wwsChat', {
            title: "Chat"
        });
    });
    router.get('/impressum', function (req, res) {
        res.render('impressum', {
            title: "Impressum"
        });
    });
    router.get('/cyp', function (req, res) {
        if (req.isAuthenticated()) {
            //user is authenticated -> send his user profile
            res.render('createyourplayer', {
                titel: "Create your Player",
                isAuthenticated: req.isAuthenticated(),
                user: req.user,
            });
        } else {
            // user is not authenticated
            res.render('index', {
                title: "Die Fußball App",
                isAuthenticated: req.isAuthenticated(),
                user: "",
                bundesligaFeed: ""
            });
        }
    });

    return router;
}
