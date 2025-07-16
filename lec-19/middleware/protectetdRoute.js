import jwt from "jsonwebtoken";
import User from "../models/authmodels.js";

export const protectedRoute = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        if(!token){
            return res.status(401).json({
                message: "token not provided or unauthorized"
            })
        }
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        if(!decoded){
            return res.status(401).json({
                message:"Invalid token"
            })
        }
        req.userId = decoded.userId;
        next();
    }catch(error){
        console.log({error:error.message});
    }
}

export const adminroute = async(req,res,next)=>{
    try{
       const user = await User.findbyId(req.userId);
       if(user.role === "admin"){
        next();
       }else{
        res.status(403).json({  //403 is for unauthorixation that user is not accessible
            message: "access denied"
        })
       }
    }catch(error){
        console.log({error:error.message});
    }
}