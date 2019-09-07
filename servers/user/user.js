const express = require('express')
const mysql = require('mysql')
const multer  =require('multer')
//const db = mysql.createPool({host:'localhost',user:'root',password:'081232xl',database:'Travel'})
const pool = mysql.createPool({host:'localhost',user:'root',password:'081232xl',database:'Travel'})
const common = require('../common/common')
const fs = require('fs')

module.exports=function(){
    // var upload = multer({dest:'./www/upload/'}).any()
    var router = express.Router();
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, './www/upload/userImg')
      },
      filename: function (req, file, cb) {
      cb(null,(new Date().getTime())+file.originalname)
      }
     })
     var upload = multer({ storage: storage })
   
   router.post('/login',function(req,res){
      var userName = req.body.userName
      var userPaw = common.md5(req.body.userPaw)
      pool.getConnection(function(err, connection){
       connection.query(`SELECT * FROM user_regist WHERE user_name = '${userName}'`,(err,data)=>{
           if(err){
                console.log(err)
                res.status(500).send('database error').end()
           }else{
                if(data.length===0){
                    took=0
                    res.send({
                        state:0,
                        msg:'*用户名或密码输入错误*',
                        took:took,
                    }).end()
               }else{
                   if(data[0].password=== userPaw){
                        req.session['user_id']=data[0].user_id
                        req.session['took']=1
                        res.send({
                           state:1,
                           msg:'登录成功',
                           took: 1,
                           result:{
                               imgUrl:data[0].imgUrl,
                               userName:data[0].user_name,
                               userPaw:req.body.userPaw
                            }
                       }).end()
                   }else{
                       took=0
                       res.send({
                          state:0,
                          took:took,
                          msg:'*用户名或密码输入错误*'
                      }).end()
                   }
               }
            }  
            connection.release();
       })
     
   });

    })

    
   router.post('/publish',function(req,res){
    var userName = req.body.userName
    var userPaw = common.md5(req.body.userPaw)
   req.session['user_id']=undefined
        took=0
        res.send({
           state:1,
           msg:'*登出成功*',
           took:took
        }).end()
      })

  

    router.post('/regist',upload.single('imgfile'),function(req,res){
      var userName = req.body.userName
      var userPaw = common.md5(req.body.userPaw)
      // var imgUrl = (new Date().getTime())+req.file.originalname
      if(req.body.file){
        var imgData = req.body.file
        var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
        var dataBuffer = new Buffer(base64Data, 'base64');
        var imgName= (new Date().getTime())+'img.jpg'
        var path = 'E:/Travel/src/assets/images/'+imgName
        fs.writeFile(path,dataBuffer,function(err){//用fs写入文件
          if(err){
              console.log(err);
          }else{
              console.log('写入成功！');
          }
        })
      }else {
        imgName ='covers3.jpg'
      }
 
      pool.getConnection(function(err, connection){
        connection.query(`SELECT * FROM user_regist WHERE user_name = '${userName}'`,(err,data)=>{
          if(err){
              console.log(err)
              res.status(500).send('database error').end()
          }else{
              if(data.length!==0){
                 res.send({
                   state:0,
                   msg:'*此用户已存在*'
                 }).end()
              }else{
                connection.query(`INSERT INTO user_regist (user_name,password,imgUrl) VALUE ('${userName}','${userPaw}','${imgName}')`,(err,data)=>{
                   if(err){
                    console.log(err)
                    res.status(500).send('database error').end()
                   }else{
                    res.send({
                      state:1,
                       msg:'*注册成功*',
                    }).end()
                   }
                 }) 
                 
              }
          }
          connection.release();
      })
      
      })
    })
    

    return router
}