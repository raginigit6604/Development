import Product from "../models/productmodel";

export const getallproduct = async(req,res)=>{
    try{
       const products = await Product.find({});
       res.status(200).json({
        success: true,
        message: "Product successfully fetched",
        products
       });

    }catch(error){
        console.log({error: error.message})
    }
}

export const getfeaturedproducts= async(req,re)=>{
    try{
       const featuredproduct = await Product.find({isFeatured:true});
       if(!featuredproduct){
        re.status(500).json({
            message: "No fetauredd product found"
        })
       }
       res.send(200).json({
        message: "product fetched successfully",
        featuredproduct,
    });
    }catch(error){
        console.log({error:error.message});
    }
}

export const getproductbycategory = async(req,res)=>{
    const {category} = req.params;
    try{
        const products = await Product.find({category});
        res.json({products});
    }catch(error){
        console.log("Error in getProductsByCategory controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const createproduct = async(req,res)=>{
    try{
    const {name,description,price,category} = req.body;
    const product = await Product.create({
        name,
        price,
        category,
        description
    });
       res.status(201).json({message:"product created successfully",product});
    }catch(error){
        console.log({error: error.message});
        res.send(500).json({ message: "server error", error : error.message});
    }
}

export const deleteproduct = async(req,res) =>{
    try{
         const product = await Product.findById(req.params.id);
         if(!product){
            res.status(400).json({message:"Product not found"});
         }
         await Product.findByIdAndDelete(req.params.id);
         res.json({message:"product deleted successfully"});
    }catch(error){
        console.log({error: error.message});
    }
}


export const togglefeaturedproduct = async(req,res)=>{
    try{
       const product = await Product.findById(req.param.id);
       if(product){
        product.isFeatured = !product.isFeatured;
        const updateproduct = await product.ssave();
        res.json(updateproduct);
       }else{
        res.status(400).json({message:"product not found"});
       }
    }catch(error){
        res.send(500).json({message: "Server error",error: error.message});
    }
}