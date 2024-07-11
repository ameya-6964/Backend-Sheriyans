const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello")
})

router.get("/:id", (req, res) => {
    res.json({ message: "Get Single Workout" })
})

router.post("/", (req, res) => {
    res.json({ message: "Create Workout" })
})

router.patch("/:id", (req, res) => {
    res.json({ message: "Edit Workout" })
})

router.delete("/:id", (req, res) => {
    res.json({ message: "Delete Workout" })
})

module.exports = router;
