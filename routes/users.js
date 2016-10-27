var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
//mongoose.connect('mongodb://dewei:dewei@ds031257.mlab.com:31257/cloud-notes');
var userSchema = new mongoose.Schema({
  //_id: String,
  name: String,
  password: String,
  email: String
})
var User = mongoose.model('User', userSchema);
var dewei = new User({
  name: "dewei",
  password: 'pwd', 
  email: 'dewei.xiang@gmail.com'
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.session.user)
  if (req.session.user) {
    res.send(req.session.user);
  }
  else {
    res.send('false')
  }
  // dewei.save();
});

router.post("/", function (req, res) {
  const email = req.body.email;
  const pwd = req.body.pwd;
  User.findOne({ 'email': email, 'password': pwd }, function (err, data) {
    if (err) {
      console.log(err);
      res.send("flase")
    } 
    if (data) {
      req.session.user = null;
      req.session.user=data;
    //  console.log(data);
      res.send(data);
    } else {
      res.send("false")
    }

  })
})

module.exports = router;
