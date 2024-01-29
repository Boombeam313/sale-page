const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  // productImage: { type: String, required: true },
  productPrice: { type: Number, required: true },
  // productType: { type: String, required: true },
  createAt: {type: Date, default: Date.now, required: true},
  modified: {type: Date}
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product,
};
