const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const app = express();
app.use(cookieParser())

app.get("/", function (req, res) {
    res.send("Hey")
})

app.get("/check", function (req, res) {
    console.log(req.cookies.banned);
    console.log(req.cookies.name);
    res.send("Checking")
})

app.get("/banned", function (req, res) {
    res.cookie("banned",'true');
    res.cookie("name",'Ameya');
    res.send("BANNNNNED")

})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})