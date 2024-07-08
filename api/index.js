const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", function (req, res, next) {
    try {
        res.send('Hey');
    } catch (err) {
        next(err)
    }
})


// ERROR HANDLING
app.use((err,req,res,next) =>{
    res.status(500).send(err.message)
})


app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})

