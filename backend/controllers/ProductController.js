const handler = require("express-async-handler");
const productModel = require("../models/productModel");
const cartModel = require("../models/cartModel");

const addProduct = handler(async (req, res) => {
  const user_id = req.user._id;

  const {
    product_name,
    product_description,
    product_category,
    product_price,
    product_images,
  } = req.body;

  if (
    !product_name ||
    !product_description ||
    !product_category ||
    !product_price ||
    !product_images
  ) {
    res.status(400);
    throw new Error("Please Enter All The Field");
  }

  // finf product base on name
  const findProduct = await productModel.findOne({
    product_name,
  });
  if (findProduct) {
    res.status(405);
    throw new Error("product already exist");
  }

  // add the data into the data base
  const createdProduct = await productModel.create({
    product_name,
    product_description,
    product_category,
    product_price,
    product_images,
    user: user_id,
  });

  res.send(createdProduct);
});

const getAllProduct = handler(async (req, res) => {
  let allProducts = await productModel.find();
  res.send(allProducts);
});

const deleteAllProduct = handler(async (req, res) => {
  let delete_products = await productModel.deleteMany({});
  res.send("deleted");
});

const addToCart = handler(async (req, res) => {
  const prod_id = req.params.prod_id;
  const user_id = req.user._id;
  const itemExist = await cartModel.findOne({ product_id: prod_id, user_id });

  if (itemExist) {
    itemExist.quantity += 1;
    await itemExist.save();
  } else {
    await cartModel.create({
      user_id: user_id,
      product_id: prod_id,
      quantity: 1,
    });
  }

  const findCart = await cartModel.find({ user_id });
  res.send(findCart);
});

const removeFromCart = handler(async (req, res) => {
  const prod_id = req.params.prod_id;
  const user_id = req.user._id;
  const itemExist = await cartModel.findOne({ product_id: prod_id, user_id });

  if (itemExist) {
    if (itemExist.quantity > 1) {
      itemExist.quantity -= 1;
      await itemExist.save();
    } else {
      await cartModel.deleteOne({ product_id: prod_id, user_id });
    }
  } else {
    res.status(400);
    throw new Error("Invalid");
  }

  const findCart = await cartModel.find({ user_id });
  res.send(findCart);
});

const getMyCart = handler(async (req, res) => {
  let user_id = req.user._id;
  let mycart = await cartModel.find({ user_id });
  res.send(mycart);
});

const getDataCategies = handler(async (req, res) => {
  const { caterory_name } = req.body;
  const findReleventProduct = await productModel.find({
    category: caterory_name,
  });
  res.send(findReleventProduct);
});

module.exports = {
  addProduct,
  getAllProduct,
  deleteAllProduct,
  addToCart,
  getMyCart,
  removeFromCart,
  getDataCategies,
};
