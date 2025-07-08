import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res,userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{ // sign is a function which helps to generate access token
        expiresIn: "7d", 
    });

    res.cookie("token",token,{
        httpOnly: true,
        sameSite : "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return token;

}