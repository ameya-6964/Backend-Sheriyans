const express = require("express")
const app = express();
const userModel = require('./models/userModel')
const db = require('./config/db')
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Connecting To Local Database
db();

app.get("/", function (req, res) {
    res.send("Hey")
})

// Create New User 
// POST -> http://localhost:3000/create

app.post("/create", async function (req, res) {
    let {name,username,email,password} = req.body
    let user = await userModel.create({
        username,
        name,
        email,
        password
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


app.post("/update/:id", async function (req, res) {
    let id = req.params.id;
    let {email,name,username} = req.body;
    let user = await userModel.findOneAndUpdate({ _id: id }, { username,name,email }, { new: true })
    res.send(user);
})

app.delete("/delete/:id", async function (req, res) {
    let id = req.params.id
    let user = await userModel.findOneAndDelete({ _id: id })
    res.send(user);
})


app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})