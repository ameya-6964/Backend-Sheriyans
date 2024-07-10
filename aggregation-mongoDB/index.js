const express = require("express")
const userModel = require('./models/user')
const connectDb = require('./config/connectDB')
const users= require("./data/users")
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Connecting To Local Database
connectDb();

app.get("/", function (req, res) {
    res.send("Hey")
})

app.get("/createmany", async function (req, res) {
    let newUsers = await userModel.insertMany(users)
    res.send(newUsers)
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})