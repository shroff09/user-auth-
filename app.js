const express = require("express");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const register = require("./routes/register");
const app = express();
const PORT = 3000;

const url =  "mongodb+srv://ankitnidhi:SHURU@ankit9@cluster0.sh4sg.mongodb.net/<dbname>?retryWrites=true&w=majority";
 mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).
 then(()=>{console.log(`connected successfully`)
}).catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/login',auth);
app.use('/signup',register);


//ROUTES
app.get('/',(req,res)=>{
    res.sendStatus(200);    
});

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)
});