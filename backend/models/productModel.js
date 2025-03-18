const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    product_name: {
      type: String,
      require: true,
      unique: true,
    },
    product_description: {
      type: String,
      require: true,
    },
    product_category: {
      type: String,
      default: "burger",
    },
    product_price: {
      type: Number,
      require: true,
    },
    product_images: {
      type: Array,
      require: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
