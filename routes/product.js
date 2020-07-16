const express = require("express");
const router = express.Router();
const { isAdmin, isAuthenticated, isSignedIn } = require("../controllers/auth");
const { getUserByID } = require("../controllers/user");
const { getProductById, createProduct, getProduct, photo, removeProduct, updateProduct, getAllProducts, getAllUniqueCategories } = require("../controllers/product");

//PARAMS
router.param("userId", getUserByID);
router.param("productId", getProductById);

//ROUTES

//POST Route
router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);

//Get Route
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

//Delete Route
router.delete("/product/:userId/:productId", isSignedIn, isAuthenticated, isAdmin, removeProduct);

//Update Route
router.put("/product/:userId/:productId",  isSignedIn, isAuthenticated, isAdmin, updateProduct);

//Listing Route
router.get("/products", getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports = router;