const express = require("express");
const connectDb = require("./config/mongoose");
const app = express();
const PORT = 3000;

connectDb();

app.get("/", function (req, res) {
    res.send("Hey")
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})