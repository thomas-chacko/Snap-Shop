const express = require("express");
const router = new express.Router();
const productsController = require("../controllers/productsController");
const usersController = require("../controllers/userControllers");
const adminController = require("../controllers/adminController");
const ordersController = require("../controllers/orderControllers");
const jwtMiddleware = require("../middleware/jwtMiddlware");

// Register routes
router.post("/users/register", usersController.register);

// Login routes
router.post("/users/login", usersController.login);

// HomeProducts routes
router.get("/products", productsController.homeProducts);

// Get product with id
router.get("/products/:_id", productsController.productPage);

// get all products to admin
router.get("/admin/allproducts", jwtMiddleware, adminController.getAllProducts);

// edit product with product id
router.put(
  "/admin/editproduct/:id",
  jwtMiddleware,
  adminController.editProduct
);

// delete product with product id
router.delete(
  "/admin/deleteproduct/:id",
  jwtMiddleware,
  adminController.deleteProduct
);

// add new product
router.post("/admin/addproduct", jwtMiddleware, adminController.addNewProduct);

// get shipping address
router.post("/shipping", jwtMiddleware, ordersController.shippingDetails);

module.exports = router;
