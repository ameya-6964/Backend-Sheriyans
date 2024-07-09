const express = require("express")
const app = express();
const userModel = require('./models/userModel')
const db = require('./config/db')
const PORT = 3000;

// Connecting To Local Database
db();

app.get("/", function (req, res) {
    res.send("Hey")
})

app.get("/create", async function (req, res) {
    let user = await userModel.create({
        username: "ameya-6964",
        name: "Ameya Belvalkar",
        email: "ameya@gmail.com",
        password: "123456"
    })
    res.send(user);
})


app.get("/read", async function (req, res) {
    let user = await userModel.find()
    res.send(user);
})

app.get("/read/:id", async function (req, res) {
    let id = req.params.id
    let user = await userModel.findOne({ _id: id })
    res.send(user);
})


app.get("/update/:id", async function (req, res) {
    let id = req.params.id
    let user = await userModel.findOneAndUpdate({ _id: id },{username:"ameya-7977"} ,{new:true})
    res.send(user);
})

app.get("/delete/:id", async function (req, res) {
    let id = req.params.id
    let user = await userModel.findOneAndDelete({ _id: id })
    res.send(user);
})


app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})