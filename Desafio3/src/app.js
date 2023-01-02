const express = require("express");
const app = express();


const ProductManager = require("./ProductManager");
let productManager = new ProductManager("./data/products.json");

app.get("/products", async (req, res) => {
    let products = await productManager.getProducts();
    const limit = req.query.limit;
    if (limit && !isNaN(limit)) {
        products = products.slice(0, limit);
    }
    res.json(products);
    });

app.get("/products/:pid", async (req, res) => {
    const id = req.params.pid;
    const product = await productManager.getProductById(Number(id));
    if (product) {
        res.json(product);
    } else {
        res.send(`Product with ID ${id} not found`);
    }
});

app.listen(8080)