const express = require("express");
const path = require("path")
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render('index')
})

app.post("/check", function (req, res) {
    console.log(req.body);
    let name = req.body.name;
    res.render("working", { name });
})

app.get("/profile", function (req, res) {
    res.render('profile')
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})