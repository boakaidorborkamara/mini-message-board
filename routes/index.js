const express = require('express');
const router = express.Router();

// data object 
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Message Board", messages: messages});
  // res.send(messages);
});

module.exports = router;
