import express from "express";
import {
    signup,
    login,
    logout,
    getprofile
} from "../controllers/authcontoller.js";
import { protectedRoute } from "../middleware/protectetdRoute.js";
const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/getprofile",protectedRoute,getprofile); // protectedroute is a middleware that checks if the request is authorizes via bearer token or not
export default router;