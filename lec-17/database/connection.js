import mongoose from'mongoose';
export const connect = async()=>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL);
       console.log(`mongodb atlas connectd ${conn.connection.host}`);
    }catch(error){
        console.log(`error occured when i connecting to mongodb ${error.message}`);
        process.exit(1);
    }
} 

// "success": true,
// {
//     "success": true,
//     "message": "User Created successfully",
//     "user": {
//         "email": "rags6604@gmail.com",
//         "name": "Ragini Sharma",
//         "isverified": false,
//         "verificationToken": "725602",
//         "_id": "686cc70852c1c15a4b7af878",
//         "createdAt": "2025-07-08T07:21:44.283Z",
//         "updatedAt": "2025-07-08T07:21:44.283Z",
//         "__v": 0
//     }
// }