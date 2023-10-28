const express = require('express');
const router = express.Router();
const product = require('../services/product');

router.get('/', function (req, res, next) {
  try {
    res.json(product.getMultiple(req.query.page, req.query.email, req.query.passcode));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

router.post('/', function (req, res, next) {
  try {
    res.json(product.insertProduct(req.body));
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    next(err);
  }
});

router.delete('/', function (req, res, next) {
  try {
    res.json(product.removeProduct(req.query.id));
  } catch (err) {
    console.error(`Error while getting user `, err.message);
    next(err);
  }
});


module.exports = router;