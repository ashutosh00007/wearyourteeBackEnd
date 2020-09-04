const express = require("express");
const router = express.Router();
const { getUserByID, getUser, updateUser, userPurchaseList, successMessage } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

router.param("userId", getUserByID);

router.get("/user/:userId", isSignedIn, isAuthenticated ,getUser);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get("user/orders/:userId", isSignedIn, isAuthenticated, userPurchaseList);

router.get("user/orders/success", successMessage);

module.exports = router;
