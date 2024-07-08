const express = require("express");
const app = express();
const PORT = 3000;

app.use(function(req,res,next){
 console.log(`${req.method}`);
 next();
})

app.get("/", function (req, res) {
    res.send("Hey")
})

app.post("/", function (req, res) {
    res.send("Hey")
})


app.get("*", function (req, res) {
    res.json({ "message": "Something Went Wront" }).status(500)
})


app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})