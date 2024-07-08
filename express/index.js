const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", function (req, res) {
    res.send("Hey")
})
app.get("/about", function (req, res) {
    res.send("about")
})
app.get("/contact", function (req, res) {
    res.send("contact")
})

// Route handler for adding two numbers
app.get("/add/:number1/:number2", function (req, res) {
    // Extract numbers from route parameters and convert them to numbers
    let number1 = Number(req.params.number1);
    let number2 = Number(req.params.number2);

    // Calculate the sum
    let sum = number1 + number2;

    // Send the sum as a response
    res.send(`The sum of ${number1} and ${number2} is ${sum}`);
});

// WildCard Route {Always This Should Be Last}
app.get("*" ,function(req,res){
 res.json({"message":"Something Went Wront"}).status(500)
})
app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})