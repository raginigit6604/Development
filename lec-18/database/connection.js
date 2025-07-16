import mongoose from 'mongoose';
export const connectDb = async ()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL);
       console.log(`mongodb atlas connected ${conn.connection.host}`);
    }
    catch(error){
        console.log("error occured when connecting to mongodb",error.message);
        process.exit(1);
    }
}
