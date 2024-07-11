const express = require("express");

const { 
    registerUser, 
    loginUser,
    logoutUser,
    getUserProfile } = require("../controllers/authController")

const router = express.Router();

router.get("/", (req, res) => {
    res.send("On Auth Route")
})

router.get("/register",registerUser)

router.get("/login",loginUser)

router.get("/logout",logoutUser)

router.get("/profile",getUserProfile)

module.exports = router;