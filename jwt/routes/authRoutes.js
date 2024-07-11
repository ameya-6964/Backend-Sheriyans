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

router.post("/register",registerUser)

router.post("/login",loginUser)

router.post("/logout",logoutUser)

router.get("/profile",getUserProfile)

module.exports = router;