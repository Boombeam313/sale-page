const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String, required: true },
  shippingMethod: { type: String, required: true },
  // orderTotal: { type: Number, required: true },
  productId: { type: String, required: true},
  createAt: {type: Date, default: Date.now, required: true}
});

const Order = mongoose.model("Order", OrderSchema);

const slipBillSchema = new mongoose.Schema({
  orderId: { String }, // Link to User ID
  image: Buffer,
  createAt: { type: Date, default: Date.now, required: true}, // Time stamp
});

const SilpBill = mongoose.model('SilpBill', slipBillSchema)

module.exports = {
  Order,
  SilpBill
};
