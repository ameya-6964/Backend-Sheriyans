// Imports
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db")
const authRoutes = require("./routes/authRoutes")

//Constants
const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
// Connecting To Database

connectDb();

//Routes
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server Started On Port 3000`);
})
