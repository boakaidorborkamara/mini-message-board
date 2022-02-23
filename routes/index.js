const express = require('express');
const router = express.Router();

// data object 
let messages = [
  {
    content: "Hi there!",
    user_name: "Amando",
    date_added: new Date(),
    title: "Afternoon Greetings"
  },
  {
    content: "Hello World!",
    user_name: "Charles",
    date_added: new Date(),
    title: "Morning Greetings"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Message Board", messages: messages});
  // res.send(messages);
});

module.exports = router;
