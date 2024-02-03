const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  productId: { type: String, required: true},
  createAt: {type: Date, default: Date.now, required: true}
});

const Order = mongoose.model("Order", OrderSchema);

const slipBillSchema = new mongoose.Schema({
  orderId:  String , 
  image: {type: Buffer, required: true},
  createAt: { type: Date, default: Date.now, required: true}, 
});

const SilpBill = mongoose.model('SilpBill', slipBillSchema)

module.exports = {
  Order,
  SilpBill
};
