
import User from '../models/authmodels.js';
import bcryptjs from 'bcryptjs';
import { generateToken } from '../utilitis/generateToken.js';
export const signup = async(req,res)=>{
    try{
        const{name,email,password} = req.body;
        if(!name || !email || !password){
            res.status(400).json({
                message: " all fields are required"
            })
        }
        const userAlreadyexist = await User.findOne({email});
        if(userAlreadyexist){
            res.status(400).json({
                message: "user already exist"
            })
        }
        const hashedpassword =await bcryptjs.hash(password,10);
        const user = new User({
            name,
            email,
            password: hashedpassword
        })

        await user.save();
        generateToken(res,user._id);
        res.status(201).json({   // 201 means created and 200 means ok
            user:{ //The object inside {} is what your frontend or API consumer will receive.
                ...user._doc,
                password:undefined
            },
            message:"User Created successfully"
        })

    }catch(error){
        console.log({error: error.message});
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json({
                message: "Invalid email or password"
        })
        }

        const ispasswordvalid = await bcryptjs.compare(password,user.password);
        if(!ispasswordvalid){
            res.status(400).json({
                message: "password not defined"
            })
        }
        user.lastLogin = new Date();
        await user.save();

        generateToken(res,user._id);
            res.status(200).json({  
                message: "user logged successfully"
             }) //200 means ok

    }catch(error){
        console.log({error:error.message});
    }
}

export const logout = async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({message: "logged out successfully"})
}

export const getprofile = async(req,res)=>{
    try{
      const user = await User.findById(req.user._id).select("password");
      res.status(200).json({
        message: "user profile",
        user
      })
    }catch(error){
        console.log({error:error.message});
    }
}

