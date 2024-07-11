const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.cookie("age", "25", {
        maxAge: 2000,
    })
    res.send("Cookie Set")
})

app.get("/readcookie", (req, res) => {
    let { age } = req.cookies;
    res.send(age)
})

app.listen(PORT, () => {
    console.log(`Server Started On Port 3000`);
})
