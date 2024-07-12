// Imports
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/db")
const authRouter = require("./routes/auth");
const expressSession = require("express-session")
const passport = require("passport");
require("./config/googleStrategy")

//Constants
const PORT = process.env.PORT;
const app = express();


// Middlewares
app.use(express.json());
app.use(cookieParser())
app.use(expressSession(
    {
        secret: process.env.EXPRESS_SECRET,
        resave: false,
        saveUninitialized: false,
    }
))
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());


// Connecting To Database
connectDb();

//Routes
app.use("/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server Started On Port 3000`);
})
