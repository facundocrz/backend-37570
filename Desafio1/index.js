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

class ProductManager {
  static id = 1;
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      typeof title === "string" &&
      typeof description === "string" &&
      typeof price === "number" &&
      typeof thumbnail === "string" &&
      typeof code === "string" &&
      typeof stock === "number"
    ) {
      if (this.products.some((item) => item.product.code === code)) {
        console.log("Product with same code already exists");
      } else {
        let product = new Product(
          title,
          description,
          price,
          thumbnail,
          code,
          stock
        );
        this.products.push({ product, id: ProductManager.id });
        ProductManager.id++;
      }
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    let product = this.products.find((item) => item.id === id);
    if (product) {
      return product;
    } else {
      return "Not found";
    }
  }
}

let productManager = new ProductManager();
console.log(productManager.getProducts());
productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log(productManager.getProducts());
productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log(productManager.getProductById(1));
console.log(productManager.getProductById(2));
