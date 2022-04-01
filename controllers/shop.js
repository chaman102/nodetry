const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      title: "All Products",
      products: products,
      path: 'products'
    });
  });
};
exports.getOneProducts = (req, res, next) => {
  const productId=req.params.productId;
    res.render('shop/product-details', {
      title: "Product Details",
      products: productId,
      path: 'products'
    });
  
};
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('index', {
      title: "Home Page",
      products: products,
      path: ''
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    title: "Your Cart",
    path: '/cart'
  });
};
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    title: "Your Orders",
    path: '/orders'
  });
};
exports.getChekout = (req, res, next) => {
  res.render('shop/checkout', {
    title: "Checkout",
    path: '/checkout'
  });
};

