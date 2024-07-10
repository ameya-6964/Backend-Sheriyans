const express = require("express");
const bcrypt = require("bcrypt")
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

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


app.listen(PORT, () => {
    console.log(`Server Started On Port 3000`);
})
