const express = require("express");
const router = express.Router();
const { getCategoryByID, createCategory, getCategory, getAllCategory, updateCategory, removeCategory } = require("../controllers/category");
const { isAuthenticated, isAdmin, isSignedIn } = require("../controllers/auth");
const { getUserByID } = require("../controllers/user");


//PARAMS
router.param("userId", getUserByID);
router.param("categoryId", getCategoryByID);

//ROUTES

//CREATE
router.post("/category/create/:userId", isSignedIn, isAuthenticated, isAdmin, createCategory);

//READ
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

//UPDATE
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, updateCategory);


//DELETE
router.delete("/category/:categoryId/:userId", isSignedIn, isAuthenticated, isAdmin, removeCategory);



module.exports = router;