import nodemailer from "nodemailer"
// import{
//     PASSWORD_RESET_REQUEST_TEMPLATE,
//    PASSWORD_RESET_SUCCESS_TEMPLATE,
//    VERIFICATION_EMAIL_TEMPLATE,
// } from "./emailTrap.js"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    host: 'smtp.gmail.com',
    port:465,
    auth:{
        user: 'ragini.2201301096@geetauniversity.edu.in',
        pass: "xlfy ouot zhzs hivb"
    }
})

const sender = 'ragini.2201301096@geetauniversity.edu.in';

export const sendVerificationEmail = async(email,verificationToken)=>{
    // console.log("xchbbxbjxbsjxsj")
    try{
        const info = await transporter.sendMail({
            from: sender,
            to:email,
            subject: "verify your mail",
            html:`${verificationToken}`
        });

        console.log("Email sent succesfully",info.message);
        return info;
    }catch(error){
       console.log("Error sending",error);
       throw new Error(`Error sending verification email ${error}`);
    }
}

export const sendPasswordResetEmail = async(email,resetToken)=>{
    try{
       const info = await transporter.sendMail({
        from: sender,
        to: email,
        subject: "reset your password",
        html: `$ {resetToken}`
       })
      console.log("password reset email sent succesfully",info.messageId);
      return info;
    }catch(error){
        console.log(error);
    }
}

export const sendWelcomeEmail = async(name,email)=>{
    try{
         const info = await transporter.sendMail({
            from : sender,
            to: email,
            subject: "welcome email ",
            html : `${name} ${email}`
         });

         console.log("Email Sent Sucessfully",info.messageId);
         return info;
    }catch(error){
        console.log(error);
    }
}