import express from "express";
import {protectedRoute, adminroute} from "../middleware/protectedroute";
import { 
    deleteproduct,
    getallproduct, 
    getfeaturedproducts, 
    getproductbycategory, 
    togglefeaturedproduct, 
    createproduct 
} from "../controllers/productcontroller";

const router = express.Router();

router.get("/".protectedRoute,getallproduct);
router.get("/featured",getfeaturedproducts);
router.get("/category/:category",getproductbycategory);
router.post("/createproduct",protectedRoute,adminroute,createproduct);
router.delete("/deleteproduct/:id",protectedRoute,adminroute,deleteproduct);
router.patch("/updateproduct/:id",protectedRoute,adminroute,togglefeaturedproduct);