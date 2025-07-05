import express from ("express");
import{
    login,
    logout,
    signup,
    verifyEmail,
    forgotPassword,
    resetPassword,
    checkAuth,
} from "../controller/authController.js";

import{verifyToken} from "../middleware/verifyToken.js";
const rout = express.Router(); // express.Router is a function to create routes

rout.get("/check-auth",verifyToken,checkAuth);

rout.post("/signup",signup);
rout.post("/login",login);
rout.post("/logout",logout);

rout.post("/verify-email",verifyEmail);
rout.post("/forgot-password",forgotPassword);
rout.post("/reset-password/:token",resetPassword);

export default rout;
