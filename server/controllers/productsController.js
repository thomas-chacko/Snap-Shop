const productsModel = require("../models/productsSchema");

const homeProducts = async (req, res) => {
  try {
    const data = await productsModel.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json("Can not get all products");
  }
};

const productPage = async (req, res) => {
  try {
    const product = await productsModel.findById(req.params._id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json("Product not found");
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { homeProducts, productPage };
