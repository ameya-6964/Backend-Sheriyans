const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const PORT = 3000;
const userModel = require('./models/userOnlineDBModel')
const uri = process.env.DB_URI;

// Connect to MongoDB
mongoose.connect(uri).then(() => {
  console.log(`Connected to MongoDB`);
}).catch((err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
});

app.get("/create", async function (req, res) {
    let user = await userModel.create({
        name: "Ameya",
        username: "ameya-6964",
        email: "ameya@gmail.com"
    })
    res.send(user);
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})