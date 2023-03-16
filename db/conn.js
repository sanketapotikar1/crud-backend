const mongoose = require("mongoose");

// const DB = process.env.DATABASE

const DB = "mongodb+srv://sanket:admin123@cluster0.iavuebx.mongodb.net/Users?retryWrites=true&w=majority";


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));