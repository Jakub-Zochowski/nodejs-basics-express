const path = require('path');

const express = require('express');

const prdouctsController = require('./../controllers/products');

const router = express.Router();

router.get('/', prdouctsController.getProducts);

module.exports = router;