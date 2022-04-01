var express = require('express');
var router = express.Router();
const productsController =require('../controllers/shop')
/* GET home page. */
router.get('/', productsController.getIndex);
router.get('/products', productsController.getProducts);
router.post('/products/delete');
router.get('/products/:productId', productsController.getOneProducts);
router.get('/cart',productsController.getCart);
router.get('/orders',productsController.getOrders);
router.get('/checkout',productsController.getChekout);


module.exports = router;
