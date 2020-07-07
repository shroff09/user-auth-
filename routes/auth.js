const express = require('express');
const credential = require("./data");
const router = express.Router();
 
router.post('/', (req,res) =>{
   const email = credential.find(user => user.email==req.body.email);
   const password =  credential.find(pass =>pass.password==req.body.password);
       if(email && password){
            res.sendStatus(200);
            console.log(`credential confirmed`);
       }
       else{
           res.sendStatus(400);
           console.log(`invalid email or password`);
           console.log(req.body.email,req.body.password);
       }
})



module.exports = router