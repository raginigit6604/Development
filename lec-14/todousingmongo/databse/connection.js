const mongoose = require ("mongoose");
async function todoconnect(){
    (await mongoose.connect(process.env.DATABASE_URL)).then(()=>{
        console.log("MOngodb connected");
    }).catch((error)=>{
       console.log("error");
    })
}

module.exports = todoconnect();