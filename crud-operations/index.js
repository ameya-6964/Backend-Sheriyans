const express = require("express")
const app = express();
const userModel = require('./models/userModel')
const PORT = 3000;

app.get("/", function (req, res) {
    res.send("Hey")
})


app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})