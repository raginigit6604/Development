import Product from '../models/product.js';
 export const getallproduct = async (req,res)=>{
        try {
           const { search } = req.query;

            let products;
           if (search) {
             products = await Product.find({
             name: { $regex: search, $options: "i" } // regex = mongodb query it means match the pattern
           });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products); 
    console.log("all products are in productlist");
     }catch(error){
        console.log("error occured");
        res.status(500).json({error: error.message});
     }
 }

 export const createproduct = async (req,res)=>{
    try{
        const {name,price,description,category,quantity} = req.body;
        const newProduct = new Product({
            name,
            price,
            description,
            category,
            quantity
        });
        await newProduct.save();
        res.status(201).json(newProduct);
        console.log("new product added succesfully");
    }catch(error){
        console.log("error occured during adding new product");
        res.status(400).json({error: error.message});
    }
 }

 export const updateproduct = async(req,res)=>{
   try {
      const { id } = req.params;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      req.body,
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct); // for success
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
 };
 export const deleteproduct = async(req,res)=>{
   try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
 }
 export const searchproduct = async(req,res)=>{
      try {
          const { name } = req.query; // req.query means hame route me ? search = product name likhna hoga 

       if (!name) {
            return res.status(400).json({ message: "Please provide a valid name" });
      }

       const results = await Product.find({
      name: { $regex: name, $options: "i" }
    });

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
 }


