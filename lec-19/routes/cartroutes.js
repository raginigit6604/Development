import express from 'express';
import{protectectedRoute} from './middleware/auth.js';

const router = express.Router();
router.post("/",protectectedRoute,addtocart);
router.post("/") 