const Product = require("../models/product");
exports.getProduct =(req, res, next)=> {
    res.render('shop/add',{
      title: "Add product",
      path: "/admin/add-product"
  });
  }

  exports.postProduct =(req, res, next)=> {
     const product = new Product(req.body.title);
    product.save();  
    res.redirect('/');
  }
  exports.getHome = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('index', {
        title: "Home Page",
        products: products,
        path: ''
      });
    });
  };