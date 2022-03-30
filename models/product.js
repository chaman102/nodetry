const products = [];
var fs = require("fs");
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = "data/myfile.json";
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    const p = "data/myfile.json";
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }
}