import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        unique:true
    },
    description:{
        type: String,
        required: true
    },
    completed:{
        type:Boolean,
         default: false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Task = mongoose.model('Task',schema);
export default Task;