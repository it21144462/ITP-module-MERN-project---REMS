const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String, required:true
    },
    email:{
        type:String, required:true, unique:true
    },
    nic:{
        type:String, required:true
    },
    contactnumber:{
        type:Number, required:true
    },
    pweight:{
        type:String, required:true
    },
    pheight:{
        type:String, required:true
    },
    pwidth:{
        type:String, required:true
    },
    pjourney:{
        type:String, required:true
    },
    pfrom:{
        type:String, required:true
    },
    startdate:{
        type:String, required:true
    },
    pto:{
        type:String, required:true
    },
    gender:{
        type:String, required:true
    }
});

const users = new mongoose.model("users",userSchema);

module.exports = users;