import express from 'express';
import {
   getallproduct,
   createproduct,
    updateproduct,
    deleteproduct,
    searchproduct
} from '../controller/productcontroller.js';

const router = express.Router();

 router.get('/', getallproduct);         
router.post('/create', createproduct);        
 router.put('/:id', updateproduct);      
 router.delete('/:id', deleteproduct);   
router.get('/search', searchproduct);

export default router;


// ✅ Get all:

// GET http://localhost:3000/api/product
// ✅ Search:

// GET http://localhost:3000/api/product?search=Midi
// ✅ Create:
// POST http://localhost:3000/api/product/create
// ✅ Update:

// PUT http://localhost:3000/api/product/686e0be0126aef11bc7a3c62
// ✅ Delete:
// DELETE http://localhost:3000/api/product/686e0be0126aef11bc7a3c62

