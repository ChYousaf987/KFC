const express = require("express");
const payment = require("../controllers/paymentController");
const paymentRouter = express.Router();

paymentRouter.post("/checkout", payment);

module.exports = paymentRouter;
