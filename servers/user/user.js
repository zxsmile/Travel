const express = require('express')
const mysql = require('mysql')
const db = mysql.createPool({host:'localhost',user:'root',password:'081232xl',database:'Travel'})


module.exports=function(){
    var router = express.Router();

     router.get('/admin',function(req,res){
       if(!req.session['admin_id']){
         res.redirect('/login')
       }
   })
    
   router.get('/login',function(req,res){
      db.query('SELECT * FROM user_login',(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send('database error').end()
        }else{
           
            res.send('login').end()
        }
    })
    })

    router.get('/regist',function(req,res){
      db.query('SELECT * FROM user_regist',(err,data)=>{
        if(err){
            console.log(err)
            res.status(500).send('database error').end()
        }else{
           
            res.send('login').end()
        }
    })
    })
    

    return router
}