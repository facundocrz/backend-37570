const fs = require("fs");

class ProductManager {
  static id = 1;
  constructor(path) {
    this.path = path;
  }

  async addProduct(product) {
    const products = await this.getProducts();
    if (products.some((item) => item.code === product.code)) {
      console.log("Product with same code already exists");
    } else {
      Object.defineProperty(product, "id", {
        value: ProductManager.id,
        writable: false,
        enumerable: true,
        configurable: false,
      });
      let products = await this.getProducts();
      products.push(product);
      this.saveProducts(products);
      ProductManager.id++;
    }
  }

   getProducts() {
    let products = fs.readFileSync(this.path, "utf-8", (err) => {
      if (err) console.log(err);
    });
    return JSON.parse(products)
  }

  saveProducts(products) {
      fs.writeFileSync(this.path, JSON.stringify(products, "utf-8"));
  }

  async getProductById(id) {
    let products = await this.getProducts();
    let product = products.find((product) => product.id === id);
    console.log(product)
      if (typeof product === "undefined") {
        console.log("Product not found");
        return null;
      } else {
        return product;
      }
  }

  async updateProduct(id, product) {
    let products = await this.getProducts();
    let productToUpdate = products.find((product) => product.id === id);
    if (typeof productToUpdate !== "undefined") {
      Object.assign(productToUpdate, product);
      await this.saveProducts(products);
    } else {
      console.log("Product not found");
    }
  }

  async deleteProduct(id) {
    let products = await this.getProducts();
    let productToDelete = products.find((product) => product.id === id);
    if (typeof productToDelete !== "undefined") {
      products = products.filter((product) => product.id !== id);
      await this.saveProducts(products);
    } else {
      console.log("Product not found");
    }
  }
}

module.exports = ProductManager;