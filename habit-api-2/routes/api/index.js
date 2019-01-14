const express = require('express');
const router = express.Router();

// allow access from local domain
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.use('/user', require('./user'));
router.use('/habit', require('./habit'));

module.exports = router;
