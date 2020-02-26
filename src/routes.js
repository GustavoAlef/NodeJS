const express = require("express");
const routes = express.Router();

//importa o controller pra usar
const productControl = require("./controllers/productController");

routes.get("/products", productControl.index);
routes.get("/products/:id", productControl.show);
routes.post("/products", productControl.store);
routes.put("/products/:id", productControl.update);
routes.delete("/products/:id", productControl.destroy);

module.exports = routes;
