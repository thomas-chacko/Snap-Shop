const product = require("../models/productsSchema");

const getAllProducts = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json("Can not get all products");
  }
};

const editProduct = async (req, res) => {
  const { id } = req.params; // path parameter
  // const userId = req.payload;
  const {
    name,
    brand,
    category,
    price,
    image,
    stocks,
    rating,
    totalreviews,
    description,
  } = req.body;

  try {
    const updateProject = await product.findByIdAndUpdate(
      { _id: id },
      {
        name,
        brand,
        category,
        price,
        image,
        stocks,
        rating,
        totalreviews,
        description,
      },
      { new: true }
    );
    await updateProject.save();
    res.status(200).json(updateProject);
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await product.findByIdAndDelete({ _id: id });

    if (!deleteProduct) {
      res.status(404).json("product not found");
    } else {
      res.status(200).json(deleteProduct);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const addNewProduct = async (req, res) => {
  const {
    name,
    brand,
    category,
    price,
    image,
    stocks,
    rating,
    totalreviews,
    description,
  } = req.body;

  try {
    const existingProduct = await product.findOne({ name });
    if (existingProduct) {
      res.status(401).json("product already exists");
    } else {
      const newProduct = new product({
        name,
        brand,
        category,
        price,
        image,
        stocks,
        rating,
        totalreviews,
        description,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { getAllProducts, editProduct, deleteProduct, addNewProduct };
