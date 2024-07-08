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

app.get("/calculate", function (req, res) {
    res.render('calculate')
})

app.get("/sum", function (req, res) {
    let number_1 = Number( req.query.number1)
    let number_2 = Number(req.query.number2);
    res.send(`Sum Is ${number_1 + number_2}`)
})


app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})