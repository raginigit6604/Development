const User = require("../models/user.model");


module.exports.createUSer = async(req,res)=>{
    try{
        let {name,email,password} = req.body; // here i use destructuring
       let user = await User.create({
        // name:"Shinchan", '' here is use static
        // email:"shizuka@gmail.com",
        // password:"wed132"

        // now i use dynamic
           name:name,
           email:email,
           password:password
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