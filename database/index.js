const express = require("express");
const app = express();
const userModel = require('./models/userModel')
const PORT = 3000;

app.get("/", function (req, res) {
    res.send("Hey")
})

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