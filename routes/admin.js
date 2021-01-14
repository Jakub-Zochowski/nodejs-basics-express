const path = require('path');

const express = require('express');

const prdouctsController = require('../controllers/products');

const router = express.Router();

router.get('/add-product', prdouctsController.getAddProduct);

router.post('/add-product', prdouctsController.postAddProduct);

module.exports = router;
