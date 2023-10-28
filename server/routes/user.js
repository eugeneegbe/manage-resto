const express = require('express');
const router = express.Router();
const user = require('../services/user');

/* GET user listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(user.getMultiple(req.query.page, req.query.email, req.query.passcode));
  } catch(err) {
    console.error(`Error while getting user `, err.message);
    next(err);
  }
});

module.exports = router;