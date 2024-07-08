const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

app.use(morgan('combined'))


app.get("/", function (req, res) {
    res.send("Hey")
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})
