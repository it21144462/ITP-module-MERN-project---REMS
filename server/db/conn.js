const mongoose = require("mongoose");

const DB = "mongodb+srv://1234:1234@cluster0.8rqflkp.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    // useCreateIndex:true,
    // useFindAndModify:false,
    // useNewUrlPaser:true,
    // useUnifiedTopoly:true
}).then(()=> console.log("connection started")).catch((error)=>console.log(error.message));