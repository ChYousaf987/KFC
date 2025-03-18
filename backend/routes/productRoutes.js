const express = require("express");
const authHandler = require("../middlewares/authMiddleware");
const {
  addProduct,
  getAllProduct,
  deleteAllProduct,
  addToCart,
  getMyCart,
  removeFromCart,
  getDataCategies,
} = require("../controllers/ProductController");

const productRouter = express.Router();

productRouter.post("/add-product", authHandler, addProduct);
productRouter.get("/get-products", getAllProduct);
productRouter.delete("/delete-products", deleteAllProduct);
productRouter.post("/add-to-cart/:prod_id", authHandler, addToCart);
productRouter.post("/remove-from-cart/:prod_id", authHandler, removeFromCart);
productRouter.get("/get-my-cart", authHandler, getMyCart);
productRouter.get("/get-relavent-product", getDataCategies);

module.exports = productRouter;
