const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productImage: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productType: { type: String, required: true },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product,
};
