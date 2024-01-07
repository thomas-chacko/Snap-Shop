const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  phone: { type: String, required: true },
});

const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
