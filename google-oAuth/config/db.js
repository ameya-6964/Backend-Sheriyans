const mongoose = require("mongoose");

const uri = process.env.DB_URI

let connectDb =  function(){
    mongoose.connect(uri).then(() => {
        console.log(`Connected to MongoDB`);
      }).catch((err) => {
        console.error(`Error connecting to MongoDB: ${err.message}`);
      });
}

module.exports = connectDb;
