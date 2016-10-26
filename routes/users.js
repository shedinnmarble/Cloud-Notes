var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
 console.log(req.session.user)
  if (req.session.user) {
    res.send('true');
  }
  else {
    res.send('false')
  }

});

module.exports = router;
