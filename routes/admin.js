var express = require('express');
var router = express.Router();
const adminController =require('../controllers/admin')
/* GET Products listing. */
router.get('/add-product', adminController.getProduct);
/* GET Products listing. */
router.post('/add-product', adminController.postProduct);

/* GET users listing. */
router.post('/delete', adminController.postdeleteProduct);
/* GET Products listing for admin. */
router.get('/products', adminController.getProducts);
module.exports = router;
