const express = require("express");

const { googleOauth } = require("../controllers/auth");
const passport = require("passport");

const router = express.Router();

router.get('/google', passport.authenticate("google", { scope: ["profile"] }))

module.exports = router;
