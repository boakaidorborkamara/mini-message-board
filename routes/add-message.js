var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add-message', function(req, res, next) {
  // res.send('Aad');
  res.render('add-message');
});

module.exports = router;
