const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 3000;


app.get("/", function (req, res) {
    res.send("Hey")
})

app.get("/about", function (req, res) {
    res.send("On About Page")
})

// Dynamic Routing
app.get("/about/:user", function (req, res) {
    let userName = req.params.user
    res.send(`On About Page Of ${userName}`)
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})