const express = require('express');
const router = express.Router();

// data object 
let messages = [
  {
    title: "Sample Message",
    content: "This is a sample message!",
    user_name: "Human",
    date_added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Message Board", messages: messages});
});

// post route 
router.post('/add-message', function(req, res, next) {
  let new_message = req.body;
  new_message["date_added"]= new Date();
  messages.push(new_message);
  console.log(messages);
  res.redirect('/');
});

module.exports = router;
