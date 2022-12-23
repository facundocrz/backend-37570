let ProductManager = require("./ProductManager");

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
}

let testProduct = new Product(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

let productManager = new ProductManager("./data/products.json");
console.log(productManager.getProducts());
productManager.addProduct(testProduct);
console.log(productManager.getProducts());
productManager.addProduct(testProduct);
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
