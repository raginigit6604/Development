const User = require("../models/user.model");


module.exports.createUSer = async(req,res)=>{
    try{
       let user = await User.create({
        name:"Shizuka",
        email:"shinchan@gmail.com",
        password:"wed132"
       })
       res.status(201).json({user});
    }catch(error){
       res.status(400).json({message:error.message});
    }
};
module.exports.getAllUsers = async(req,res)=>{
    try{
    let users = await User.find();
    res.status(200).json({users})
    }catch(error){
       res.status(400).json({message:error.message})
    }
};

// module.exports = {createUSer,getAllUsers}; module.exports.createUser and module.exports.getAllUsers are same thing 