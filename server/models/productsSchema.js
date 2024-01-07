const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  stocks: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  totalreviews: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
});

const productsModel = mongoose.model("products", productsSchema);
module.exports = productsModel;
