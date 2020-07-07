const express = require("express");
const credential = require("./data");
const model = require("./model");
const router = express.Router();


router.post('/',(req,res) =>{
    const email = credential.find(user => user.email==req.body.email);
    if(email){
        res.sendStatus(400);
        console.log(`user already exist`);
        
    }
    else{
        res.sendStatus(200);
        credential.push({email:req.body.email,password:req.body.password});
        console.log(credential);
        credential.copyWithin();
        console.log(`user added sucessfully`);
    }
})
console.log(credential);
module.exports = router;