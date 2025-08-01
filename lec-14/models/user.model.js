const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength: 6
    }
},  {
        timestamps:true // it create a two field = createdAT and updatedAt 
    }
)

const User = mongoose.model("User",userSchema);

module.exports = User; //modular approach