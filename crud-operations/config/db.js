const mongoose = require("mongoose");

const uri = `mongodb://127.0.0.1:27017/crud-demo`


let connectDb =  function(){
    mongoose.connect(uri).then(() => {
        console.log(`Connected to MongoDB`);
      }).catch((err) => {
        console.error(`Error connecting to MongoDB: ${err.message}`);
      });
}

module.exports = connectDb;
