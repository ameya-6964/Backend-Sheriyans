const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

app.set('view engine','ejs');

app.get("/", function (req, res) {
   res.render('index')
})

app.get("/profile", function (req, res) {
   res.render('profile')
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})