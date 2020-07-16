const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator");
const {signout,signup,signin, isSignedIn} = require("../controllers/auth");

router.post("/signup",[
    check("name", "name should be atleast 3 letters").isLength({min: 3}),
    check("email", "email required").isEmail(),
    check("password").isLength({min: 8}).withMessage("Password should be atleast of 8 letters")
],signup);

router.post("/signin",[
    check("email", "email required").isEmail(),
    check("password").isLength({min: 1}).withMessage("Password field is req")
],signin);

router.get("/signout",signout);

router.get("/testroute", isSignedIn, (req,res)=>{
    res.json(req.auth);
})

module.exports = router;