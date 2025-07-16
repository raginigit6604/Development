import jwt from 'jsonwebtoken';

export const generateToken = async(res,userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn : '7d'
    });
    res.cookie("token",token,{
        httpOnly: true,
        sameSite: "strict", //SameSite attribute controls when your cookie is sent along with cross-site requests — it’s a security measure to help prevent Cross-Site Request Forgery (CSRF) attacks
        maxAge: 7*24*60*60*1000 //7 days
    })
    return token;
}