require("dotenv").config()

const express = require("express")
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hello")
})


app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})