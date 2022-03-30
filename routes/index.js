var express = require('express');
var router = express.Router();
const productsController =require('../controllers/products')
/* GET home page. */
router.get('/', productsController.getHome);

module.exports = router;
