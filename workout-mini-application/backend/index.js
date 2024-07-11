require("dotenv").config()
const workoutRoutes = require("./routes/workouts")
const express = require("express")
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))



//workout routes
app.use("/api/workouts", workoutRoutes);

// Error Route Should Always Be Last
app.get("*", (req, res) => {
    res.send("Error")
})

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
})