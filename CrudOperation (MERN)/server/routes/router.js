const express = require("express")
const router = express.Router()
const users = require('../models/userSchema')


// post data 
router.post("/register",async(req,res)=>{
    const {username,age,mobile,email,work,add,desc}=req.body;
    if(!username || !age||!mobile ||!email ||!work ||!add ||!desc){
        res.status(404).send("please fill all data")}
        
    try {
        const preuser =await users.findOne({email:email});
        //if user is already present in the database then send error message
        if (preuser) {
            res.status(404).send("email allready exists");
        } else {
            const adduser = new users({
                username,age,mobile,email,work,add,desc 
            })
            await adduser.save()
            console.log(adduser);
            res.status(201).json(adduser);
        }
    } catch (error) {
        res.status(404).send(error)
    }
});

// get data from database
router.get("/getdata",async(req,res)=>{
    try {
        const getData = await users.find();
        res.status(201).json(getData);
        // console.log(getData);
    } catch (error) {
        res.status(404).json(error);
    }

})

//get individual user 
router.get('/individualuser/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const indivisualUser = await users.findById({_id:id});
        res.status(201).json(indivisualUser);
        // console.log(indivisualUser);
    } catch (error) {
        res.status(422).json(error);
    }
}) 
//get individual user 
router.patch('/updateuser/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const updateUser = await users.findByIdAndUpdate(id,req.body,{
            new:true
        });
        res.status(201).json(updateUser);
        console.log(updateUser);
    } catch (error) {
        res.status(422).json(error);
    }
}) 

// delete individual user
router.delete('/deleteuser/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const delIndiUser = await users.findByIdAndDelete({_id:id});
        res.status(201).json(delIndiUser);
        console.log(delIndiUser);
    } catch (error) {
        console.log(error);
    }
})
module.exports = router;