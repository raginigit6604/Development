import {User} from "../models/userModel.js"

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
            password:hashedPassword,
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
                password:omitUndefined,
            },
        });
    }catch(error){

    }
}
