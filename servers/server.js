const express = require('express')
const expressStatic = require('express-static')
const bodyParser = require('body-parser')
const multer  =require('multer')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser')
// const consolidate = require('consolidate')

var server = express();
server.listen(8081)
var took=0
//1.解析cookie
server.use(cookieParser('jdjahcbuiiHSHIihchchacbcuus'))

//2.使用session
var arr=[]
for(i=0;i<10000000;i++){
    arr.push('key'+Math.random());
}
server.use(cookieSession({name:'user',keys:arr,maxAge:1*60*1000}))

//3.post数据
server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
//server.use(multer({dest:'./www/upload/'}).any())

//4.router

 server.use('/',require('./API/api.js')())
 server.use('/user',require('./user/user.js')())
 server.use('/admin',require('./admin/admin.js')())
//6.static数据

server.use(expressStatic('./'))