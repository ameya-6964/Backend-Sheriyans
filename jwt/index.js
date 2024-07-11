// Imports
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db")

//Constants
const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

// Connecting To Database
connectDb();

app.listen(PORT, () => {
    console.log(`Server Started On Port 3000`);
})
