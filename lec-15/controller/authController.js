import { sendVerificationEmail,sendWelcomeEmail,sendPasswordResetEmail} from "../mailTrap/emails.js";
import User from "../models/userModel.js";
// import {User} from "../models/userModel.js";
import { generateTokenAndSetCookie } from "../utilitis/generatewebTokenAndSetCookie.js";
import bcryptjs from "bcryptjs";


export const verifyEmail = async(req,res)=>{
    const {code} = req.body;
    try{
         const user = await User.findOne({
             verificationToken : code,
             verificationTokenexpiresAt: {$gt: Date.now()}
         })
         console.log(user,'---------------------')
         if(!user){
            return res.status(400).json({
                success: false,
                message: "Invalid or expired token"
            })
         }
         // here token match
         user.isverified = true;
         user.verificationToken = undefined,
         user.verificationTokenexpiresAt = undefined;
         await user.save();

         await sendWelcomeEmail(user.name,user.email);

          res.status(200).json({
            sucess: true,
            message: "email verified",
            user: {
                ...user._doc,
                passowrd: undefined,
            }
         })
    }catch(error){
          console.log(error);
          res.status(500).json({
            success: false,
            message: "server error"
          })
    }
}

export const signup = async (req,res)=>{
    const {email,password,name} = req.body; // here we destructuring the object
    try{
        if(!email || !password || !name){
            throw new Error("All fields are Mandatory");
        }

        const userAlreadyExists = await User.findOne({email});
        console.log("userAlreadyExists",userAlreadyExists);
        if(userAlreadyExists){
            res.status(400).json({success: false,message:"User already exists"})
        }

        const hashedpassword = await bcryptjs.hash(password,10); // hash isa function from bcryptjs library it helps in encryption, and 10 means the complexity of the encryption that how much level of security we want for the encryption
        const verificationToken = Math.floor(100000 + Math.random()*900000).toString(); // here i make 6-digit of otp code // math.random gives random number between 0 and 1 it gives in decimal math.floor used to remove the decimal part
        

        const user = new User({
            email,
            password:hashedpassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now()+ 24 *60*60*1000 // 24 hours from now we multiply into 1000 because convert milisecon into second
        });
        await user.save(); // here i save user in database

        //jwt
        generateTokenAndSetCookie(res,user._id); // here i generate access token taki hame baar baar sari chijen aaur details provide na krna pade  
        await sendVerificationEmail(user.email,verificationToken);
        res.status(201).json({
            success:true,
            message:"User Created successfully",
            user:{
                ...user._doc,
                password:undefined,
            },
        });
    }catch(error){
       res.status(400).json({success:false,message:error.message});
    }
}


export const login = async(req,res)=>{
    try{
       const {email,password} = req.body;
       const user = await User.findOne({email})
       if(!user){
        return res.status(400).json({
            success: false,
            message: "Email does not exist"
        })
       }
       const isPasswordMatch = await bcryptjs.compare(password,user.password);
       if(!isPasswordMatch){
        return res.status(400).json({
            success: false,
            message: "Invalid Password"
        })
       }

       user.lastlogin = new Date(); // here i update the date of user login
       await user.save();

       generateTokenAndSetCookie(res,user._id); // yahan hum isliye call kr rhe function ko kyunki access token expire ho gya hoga kyunki user ne phir se login kiya so aab new token generate hoga
       res.status(200).json({
        success:true,
        message: "Login Success"
       })
    }catch(error){
       console.log(error);
    }
}

export const logout = async(req,res)=>{
    res.clearCookie("token");
    res.status(200).json({
        success: true,
        message: "logged out succesfully"
    });
}

export const forgotPassword = async(req,res)=>{
    try{
        
        const {email} = req.body;
        const user = await user.findOne({email});
        if(!user){
            res.status(400).json({
                success:false,
                message:"user not found"
            })
        }

        const resetToken = Math.floor(Math.random()*1000000);
        const resetPasswordExpiresAt = Date.now() + 1*60*60*1000;

        user.resetToken = resetToken;
        user.resetPasswordExpiresAt = resetPasswordExpiresAt;

        await user.save();
        await sendPasswordResetEmail(user.email,resetToken);
        


    }catch(error){
        console.log(error);
    }
}
