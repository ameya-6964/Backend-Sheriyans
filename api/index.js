const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res) {
res.json({message:"Hello"})
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})

