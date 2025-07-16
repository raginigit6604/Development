import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartItems: [
        {
            quantity: {
                type: Number,
                deafult:1
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product"
            }
        }
    ],
    role:{
        type: String,
        enum: ["customer","admin"], // enum means isme ya toh customer ya toh admin ho sta hai like dropdown,
        default:"customer"
    }
},{timestamps: true});

const User = mongoose.model("User",userSchema);
export default User;
