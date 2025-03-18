const stripe = require("stripe")(
  "sk_test_51QvmjRKXrxTon6nZs07XQaUuhEcabqvlaYiCkfYoxzq2sj2n8OYvptEurSLF6wlVH1BFYKcNqgo1wRKHiitwQPBK00wijXJ7zE"
);

const productModel = require("../models/productModel");

const handler = require("express-async-handler");

const payment = handler(async (req, res) => {
  const { products } = req.body;
  let myItems = await Promise.all(
    products.map(async (item) => {
      let myProduct = await productModel.findOne({ _id: item.product_id });

      return {
        price_data: {
          currency: "USD",
          product_data: {
            name: myProduct.product_name,
            images: myProduct.product_images,
          },
          unit_amount: myProduct.product_price * 100,
        },
        quantity: item.quantity,
      };
    })
  );

  // Stripe checkout session
  const stripeSession = await stripe.checkout.sessions.create({
    line_items: myItems, // Now correctly formatted
    mode: "payment",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(JSON.stringify(stripeSession));
});

module.exports = payment;
