const router = require('express').Router();
const passport = require('passport');
// Auth login
router.get('/login', (req, res) => {
  // would like to use this for both
  res.json('you reached the login endpoint');
});

// Auth logout
router.get('/logout', (req, res) => {
  // handle with logout
  req.logout();
  res.redirect('/');
});

router.all('/register', function(req, res, next) {
  console.log('reached register endpoint');

  return res.send({loginSuccess: true, username: user.username, jwt: 'empty so far'});
  // passport.authenticate('local-signup', function(err, user, info) {
  //   if (err) { return next(err); }
  //   if (!user) {
  //     return res.send({loginSuccess: false, username: user.username, jwt: 'empty so far'});
  //   }
  //   req.logIn(user, function(err) {
  //     if (err) { return next(err); }
  //     return res.send({loginSuccess: true, username: user.username, jwt: 'empty so far'});
  //   });
  // })(req, res, next);
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
