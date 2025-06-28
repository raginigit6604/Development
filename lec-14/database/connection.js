const mongoose = require("mongoose");
async function connectTodb() {
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Database connected");
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectTodb;