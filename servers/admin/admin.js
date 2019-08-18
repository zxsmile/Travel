const express = require('express')
const mysql = require('mysql')
const db = mysql.createPool({host:'localhost',user:'root',password:'081232xl',database:'Travel'})


module.exports=function(){
    var router = express.Router();

     router.use('/admin',function(req,res){
       if(!req.session['admin_id']){
         res.redirect('/admin_login')
       }else{
           next()
       }

       console.log('admin')
   })
    
   router.get('/admin_login',function(req,res){
    db.query('SELECT * FROM admin_login',(err,data)=>{
      if(err){
          console.log(err)
          res.status(500).send('database error').end()
      }else{
         
         console.log('admin_login')
      }
  })
  })
  return router
}