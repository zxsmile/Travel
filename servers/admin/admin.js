const express = require('express')
const mysql = require('mysql')
const multer  =require('multer')
//const db = mysql.createPool({host:'localhost',user:'root',password:'081232xl',database:'Travel'})
const pool = mysql.createPool({host:'localhost',user:'root',password:'081232xl',database:'Travel'})
const common = require('../common/common')
const fs = require('fs')

module.exports=function(){
    var router = express.Router();
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, './www/upload/adminImg')
        },
        filename: function (req, file, cb) {
        cb(null,(new Date().getTime())+file.originalname)
        console.log(file)
        }
       })
       var upload = multer({ storage: storage })
       var took = 0;

       router.post('/regist',function(req,res){
        var userName = req.body.userName
        var userPaw = common.md5(req.body.userPaw)
        var  imgName ='covers3.jpg'
        console.log()
        pool.getConnection(function(err, connection){
          connection.query(`SELECT * FROM admin_login WHERE user_name = '${userName}'`,(err,data)=>{
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
            connection.query(`INSERT INTO admin_login (user_name,password,imgUrl) VALUE ('${userName}','${userPaw}','${imgName}')`,(err,data)=>{
                  if(err){
                      console.log(err)
                      res.status(500).send('database error').end()
                  }else{
                      res.send({
                        state:1,
                          msg:'*添加成功*',
                      }).end()
                  }
            }) 
         }
          
         }
     connection.release();
      })
        })
     })

    router.post('/login',upload.single('imgfile'),function(req,res){
    var userName = req.body.userName
    var userPaw = common.md5(req.body.userPaw)
    if(req.body.file){
      var imgData = req.body.file
      var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
      var dataBuffer = new Buffer(base64Data, 'base64');
      var imgName= userName+'img.jpg'
      var path = 'E:/Travel/src/assets/images/admin/'+imgName
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
      connection.query(`SELECT * FROM admin_login WHERE user_name = '${userName}'`,(err,data)=>{
        if(err){
          console.log(err)
          res.status(500).send('database error').end()
      }else{
       if(data.length==0){
         took=0
         res.send({
           state:0,
           msg:'*用户名或密码输入错误*',
           took:took,
         }).end()
       }else{
           if(data[0].password=== userPaw){
             if(req.body.file||!data[0].imgUrl){
               connection.query(`UPDATE admin_login SET imgUrl = '${imgName}' WHERE user_name = '${data[0].user_name}'`,(err,datas)=>{
                  if(err){
                    console.log(err)
                    res.status(500).send('database error').end()
                  }
                })
             }
                
            req.session['user_id']=data[0].user_id
           took=1
           res.send({
               state:1,
               msg:'登陆成功',
               took:took,
               result:{
                 imgUrl:data[0].imgUrl,
                 userNameBack:data[0].user_name
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
    })
  })
  router.post('/user',function(req,res){

    pool.getConnection(function(err, connection){
      connection.query(`SELECT * FROM user_regist `,(err,data)=>{
      if(err){
        console.log(err)
        res.status(500).send('database error').end()
     }else{
        res.send(data).end()
     }
 connection.release();
  })
    })

  
 })

 router.post('/revise',function(req,res){
  var userName = req.body.userName
  var userPaw = common.md5(req.body.userPaw)
  pool.getConnection(function(err, connection){
    connection.query(`UPDATE user_regist SET password = '${userPaw}' WHERE user_name = '${userName}'`,(err,data)=>{
    if(err){
      console.log(err)
      res.status(500).send('database error').end()
  }else{
    res.send({
      state:0,
      msg:'*修改成功*'
}).end()
 }

 connection.release();
})
  })
  
})



router.post('/del',function(req,res){
  var userName = req.body.userName
  pool.getConnection(function(err, connection){
    connection.query(`DELETE FROM user_regist WHERE user_name = '${userName}'`,(err,data)=>{
    if(err){
      console.log(err)
      res.status(500).send('database error').end()
  }else{
    res.send({
      state:1,
      msg:'*删除成功*'
}).end()
 }
 connection.release();
})

  })
  
})

router.post('/outLogin',function(req,res){
  req.session['user_id']=undefined
  took=null
  res.send({
     state:1,
     msg:'*登出成功*',
     took:took
  }).end()
   
})
  return router
}