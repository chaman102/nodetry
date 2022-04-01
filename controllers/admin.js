const Product = require("../models/product");
exports.getProduct =(req, res, next)=> {
    res.render('admin/add-product',{
      title: "Add product",
      path: "/admin/add-product"
  });
  };

  exports.postProduct =(req, res, next)=> {
    const id = Product.generateId();
    const title = req.body.title;
    const imageurl = req.body.imageurl;
    const price = req.body.price;
    const description = req.body.description;
     const product = new Product(id,title,imageurl,price,description);
    product.save();  
    res.redirect('/');
  };
  exports.getProducts =(req, res, next)=> {
    Product.fetchAll(products => {
        res.render('admin/products', {
          title: "Admin Products",
          products: products,
          path: 'admin/products'
        });
      });
 };
 exports.postdeleteProduct =(req, res, next)=> {
    const pros=Product.fetchAll();
    //product.save();  
    res.redirect('/');
  };