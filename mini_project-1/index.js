const express = require("express");
const app = express();
const fs = require('fs');
const path = require("path")

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("index")
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})

