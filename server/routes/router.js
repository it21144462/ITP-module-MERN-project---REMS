const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");


// router.get("/",(req,res)=>{
//     console.log("connect");
// });

//user reservation

router.post("/reservation",async(req,res)=>{
    // console.log(req.body);
    const {name,email,nic,contactnumber,pweight,pheight,pwidth,pjourney,pfrom,startdate,pto,gender} = req.body;

    if(!name || !email || !nic || !contactnumber || !pweight || !pheight || !pwidth || !pjourney || !pfrom || !startdate || !pto || !gender){
        res.status(422).json("please fill the data");
    }

    try{

        const preuser = await users.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("Only one application can be send: users is alreading in pending list.");

        }else{
            const adduser = new users({
                name,email,nic,contactnumber,pweight,pheight,pwidth,pjourney,pfrom,startdate,pto,gender  
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    }catch(error){
        res.status(422).json(error);
    }

});

//get userdata

router.get("/getdata",async(req,res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata)
        console.log(userdata);


    }catch(error){
        res.status(422).json(error);

    }
})


//get individualdata

router.get("/getuser/:id",async(req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);


    }catch(error){
        res.status(422).json(error);

    }
})


//update user

router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const updateuser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateduser);
        res.status(201).json(updateduser);


    }catch(error){
        res.status(422).json(error);

    }
})

//delete user

router.delete("/deleteuser/:id",async(req,res)=>{
    try{
        const {id} = req.params;

        const deletuser = await users.findByIdAndDelete({_id:id})
        console.log(deletuser);
        res.status(201).json(deletuser);


    }catch(error){
        res.status(422).json(error);

    }
})


module.exports = router;