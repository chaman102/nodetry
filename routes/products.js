var express = require('express');
var router = express.Router();
const productsController =require('../controllers/products')
/* GET users listing. */
router.get('/add', productsController.getProduct);
/* GET users listing. */
router.post('/add', productsController.postProduct);
module.exports = router;
