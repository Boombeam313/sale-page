const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  customerAddress: { type: String, required: true },
  shippingMethod: { type: String, required: true },
  moneyTransferSlip: { type: String },
  orderTotal: { type: Number, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Order = mongoose.model("Order", OrderSchema);

const SilpBillSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    timestamp: { type: Date, default: Date.now }, // Time stamp
    image: Buffer // Image data buffer
})

const SilpBill = mongoose.model('SilpBill', SilpBillSchema)

module.exports = {
  Order,
  SilpBill
};
