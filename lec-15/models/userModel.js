import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    lastLogin:{
        type:Date,
        dafault: Date.now
    },
    isverified:{
        type:Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenexpiresAt: Date,
},
 {timestamps:true}
);
const User = mongoose.model("User", userSchema);
export default User;