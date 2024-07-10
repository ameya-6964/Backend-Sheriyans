
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password:String,
    age:String,
    isMarried:Boolean,
    email:String
})

module.exports = mongoose.model("user", userSchema);