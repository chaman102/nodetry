const products = [];
var fs = require("fs");
const p = "data/myfile.json";
const getProducts = (cb) => {
  
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }
  save() {
    getProducts(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }
  
  static fetchAll(cb) {
    getProducts(cb);
  }
};
