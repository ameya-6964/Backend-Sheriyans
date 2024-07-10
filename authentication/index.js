const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Helllo")
})

app.post("/encrypt", async (req, res) => {
    let salt = await bcrypt.genSalt(10)
    let encryptedPassword = await bcrypt.hash("Pass123", salt);
    res.send(encryptedPassword);
})

app.post("/check", async (req, res) => {
    let pasword = req.body.password;
    let salt = await bcrypt.genSalt(10)
    let encryptedPassword = await bcrypt.hash(pasword, salt);
    let result = await bcrypt.compare(pasword, encryptedPassword)
    res.send(result);
})

app.get("/tokenmaker", async (req, res) => {
    let token = jwt.sign({ name: "Ameya" }, "123456789");
    res.cookie("token", token, {
        httpOnly: true,
        maxAge: 3600000 // 1 hour
    });
    res.send(token);
})

app.get("/fetchdata", async (req, res) => {
    let {token} = req.cookies;
    let data = jwt.decode(token,"123456789");
    res.send(data);
})


app.listen(PORT, () => {
    console.log(`Server Started On Port 3000`);
})
