const router = require('express').Router();
const passport = require('passport');
// Auth login
router.get('/login', (req, res) => {
  res.render('login', {user: req.user});
});

// Auth logout
router.get('/logout', (req, res) => {
  // handle with logout
  req.logout();
  res.redirect('/');
});

// Auth with Google
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {

  //res.send('you are logged in!');
  res.redirect('/profile/');

});


module.exports = router;
