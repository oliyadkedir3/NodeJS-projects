const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
// const express = require("express");
// const mongoose = require("mongoose");
// const app = express()
// mongoose.connect("mongodb://localhost:27017/latesdb",{
//   useNewUrlParser : true,useUnifiedTopology:true
// },(err)=>{
//   if(!err) 
//   {
//      console.log(err)
//   }else{
//     console.log("successfully connected")
//   }
//   })
//   app.listen(5000,()=>{
//     console.log("on port 5000 !!!")
//   })
// Welcome page
router.get('/' , (req,res) => res.render('welcome'));
// Dashboard
router.get('/dashboard',ensureAuthenticated, (req,res) => res.render('dashboard',{
  name:req.user.name

}));

module.exports = router;