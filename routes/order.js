const express = require("express");
const router = express.Router();
const { isAdmin, isAuthenticated, isSignedIn } = require("../controllers/auth");
const { getUserByID, pushOrderInPurchaseList } = require("../controllers/user");
const { updateStock } = require("../controllers/product");
const { getOrderById, createOrder, getAllorders, updateStatus, getOrderStatus } = require("../controllers/order");



//PARAMS

router.param("userId", getUserByID);
router.param("orderId", getOrderById);


//ROUTES

//Create
router.post("order/create/:userId", isSignedIn, isAuthenticated, pushOrderInPurchaseList, updateStock, createOrder);

//Read
router.get("/order/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllorders);

//status of order
router.get("/order/status/:userId", isSignedIn, isAuthenticated, isAdmin, getOrderStatus);

//UPDATE
router.put("/order/:orderId/status/:userId", isSignedIn, isAuthenticated, isAdmin, updateStatus);



module.exports = router;