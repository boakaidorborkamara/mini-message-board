const express = require('express');
const router = express.Router();


/* GET home page. */
router.post('/add-message', function(req, res, next) {
  let data = req.body;
  console.log(data);
  console.log("working");
});

module.exports = router;
