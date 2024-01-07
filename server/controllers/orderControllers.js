const order = require("../models/orderSchema");

const shippingDetails = async (req, res) => {
  const {
    name,
    address,
    city,
    pincode,
    phone,
  } = req.body;

  try {
    // Creating a new order object with the provided shipping details
    const newOrder = new order({
      name,
      address,
      city,
      pincode,
      phone,
    });

    // Saving the new order to the database
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { shippingDetails };
