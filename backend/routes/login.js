const express = require('express');
const router = express.Router();

//Demo login
var login={
    username: "Abhinash",
    password: "123456"
 }

router.post('/', (req, res)=>{

    let username = req.body.username
    let password= req.body.password
    
   if(!username){
      res.send({msg:'username is required'})
   }

   else if(!password){
      res.send({msg:'password is required'})
   }
    
   else if(username == login.username && password == login.password){
      res.send({msg:'successful','username': login.username})
   }
   else{
       res.send({msg:'Invalid Credintials'})
   }
});

module.exports = router;