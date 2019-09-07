<template>
<div class="login">
   <login-header></login-header>
    <div class="welcome">
        <div class='submit'>
            <div class='submit-title'>
              <div class='img'>
                  <img :src='this.imgUrl' class='img' id='img'/>
              </div>
            </div>
            <div class='submit-input-box'>
              <div class='submit-input'>
                 <input type="text" name="user" value='' class='input' placeholder="用户名" v-model="userName" @input="changeInput()" :readonly='write'/>
                 <input type="password" name="password" value='' class='input' placeholder="密码" v-model="userPaw" @input="changeInput()" :readonly='write'/>
                 <p class='error'>*用户名或密码输入错误*</p>
                 <input type="button"  value='登录' class='input-botton' @click='getLoginInfo' :disabled='showDisabled' v-if='loginPublish' />
                 <input type="button"  value='登出' class='input-botton' @click='getPublishInfo' :disabled='showDisabled' v-else/>
              </div>
            </div>
            <div class="submit-inform" @click='Regist'>注册</div>
        </div>
    </div>
 </div>
</template>

<script>
import LoginHeader from './components/Header'
import axios from 'axios'
import common from '../../../servers/common/common.js'
export default {
  name: 'Login',
  components: {
    LoginHeader
  },
  data:function(){
   return{
     userName:'',
     userPaw:'',
     imgUrl:'',
     showDisabled:true,
     loginPublish:true,
     write:false,
     
   } 
  },
  methods:{
    changeInput() {
      
        if(this.userName&&this.userPaw){
          this.showDisabled=false
        }else{
           this.showDisabled=true
        }
 
        
    },
    getLoginInfo:function(){
       axios.post('/api/user/login',{
         userName:this.userName,
         userPaw:this.userPaw
       })
         .then(this.getLoginInfoSuccess,function(){
           console.log('获取数据失败')
         })
     },
     getLoginInfoSuccess:function(res){
          let data = res.data
          let took = data.took
          let error = document.getElementsByClassName('error')
          let img = document.getElementById('img')
          if(data.state){
               error[0].innerHTML=data.msg
                this.$router.push({ 
                  path:'/'+this.$store.state.city
                })
                 this.loginPublish=false
                 this.write = true  
                 this.imgUrl=require("../../assets/images/"+data.result.imgUrl)
                 let userNameBack =data.result.userName
                 let imgUrlBack =data.result.imgUrl
                 let userPawBack =data.result.userPaw
                 this.$store.dispatch('changeTook',{took,userNameBack,imgUrlBack,userPawBack})
                 window.localStorage.setItem("timestamp", new Date().getTime());
                 window.sessionStorage.setItem('greenPath',1);
                 window.sessionStorage.removeItem('msg')
            }else{
              error[0].style.visibility='visible'
              error[0].innerHTML=data.msg
            }
      },
    getPublishInfo() {
       axios.post('/api/user/publish',{
         userName:this.userName,
         userPaw:this.userPaw
       })
         .then(this.getPublishfoSuccess,function(){
           console.log('获取数据失败')
         })
    },   

     getPublishfoSuccess:function(res){
          let data = res.data
          let took = data.took
          this.loginPublish=true
          this.userPaw=''
          let userNameBack = this.$store.state.userNameBack
          let imgUrlBack =this.$store.state.imgUrlBack
          let  userPawBack = ''
          let error = document.getElementsByClassName('error')
          error[0].innerHTML=data.msg
          error[0].style.visibility='visible'
           this.$store.dispatch('changeTook',{took,userNameBack ,imgUrlBack, userPawBack})
           this.write = false
           this.showDisabled=true
      },
    Regist() {
        this.$router.push({ 
                  path:'/user/regist'
            })
        
      }
  },
  mounted:function(){
  var storage = window.localStorage; 
  if(storage.getItem('timestamp')){
     if(this.$store.state.took==1){
    this.loginPublish=false
    this.userName = this.$store.state.userNameBack
    this.userPaw=this.$store.state.userPawBack
    this.imgUrl = require("../../assets/images/"+this.$store.state.imgUrlBack)
    this.write = true  
    this.showDisabled=false
   }
   if(this.$store.state.took==0){
     this.loginPublish=true
     this.write = false
     this.userName = this.$store.state.userNameBack
     this.imgUrl =require("../../assets/images/"+this.$store.state.imgUrlBack)
  }
  }else{
     this.loginPublish=true
     this.write = false
     this.userName = ''
     this.imgUrl =require("../../assets/images/covers3.jpg")
  }
    if(window.sessionStorage.getItem('msg')){
      let error = document.getElementsByClassName('error')
      error[0].innerHTML= window.sessionStorage.getItem('msg');
      error[0].style.visibility='visible'
    }else{
         let error = document.getElementsByClassName('error')
         error[0].style.visibility='hidden'   
    }
  console.log(window.sessionStorage.getItem('msg'))
  },
  activated:function(){
  var storage = window.localStorage; 
  if(storage.getItem('timestamp')){
     if(this.$store.state.took==1){
    this.loginPublish=false
    this.userName = this.$store.state.userNameBack
    this.userPaw=this.$store.state.userPawBack
    this.imgUrl = require("../../assets/images/"+this.$store.state.imgUrlBack)
    this.write = true  
    this.showDisabled=false
   }
   if(this.$store.state.took==0){
     this.loginPublish=true
     this.write = false
     this.userName = this.$store.state.userNameBack
     this.imgUrl =require("../../assets/images/"+this.$store.state.imgUrlBack)
  }
  }else{
     this.loginPublish=true
     this.write = false
     this.userName = ''
     this.imgUrl =require("../../assets/images/covers3.jpg")
  }
   
   if(window.sessionStorage.getItem('msg')){
      let error = document.getElementsByClassName('error')
      error[0].innerHTML= window.sessionStorage.getItem('msg');
      error[0].style.visibility='visible'
     }else{
         let error = document.getElementsByClassName('error')
         error[0].style.visibility='hidden'   
    }
    console.log(window.sessionStorage.getItem('msg'))
  }
}
</script>

<style scoped>
 .login{
      background:url(http://hbimg.b0.upaiyun.com/e57a8b9856ed523601d3f9d6afff18131388f1f313ff6-hq7OLK_fw658) 	#DCDCDC;
      background-size:cover;
 }
    .welcome{
      width:100%;
      height:100%;
      display: flex;
      align-items:center;
      justify-content:center;
      position:absolute;
      background:url(http://hbimg.b0.upaiyun.com/e57a8b9856ed523601d3f9d6afff18131388f1f313ff6-hq7OLK_fw658) 	#DCDCDC;
      background-size:cover;
  
    }
  
    .submit{
      width:80%;
      height:0;
      padding-bottom:90%;
      overflow:hidden;
      background-color:#E6E6FA;
      display:flex;
      flex-direction: column;
      position: relative;
      /* border: 1px solid; */
      box-shadow: 5px 5px 10px #ccc;
       
    }
   .submit-title{
      margin: 0 auto;
      font-size: 20px;
      font-weight: 800;
      height:40%;
      padding:10px;
      margin-top: 10px;
      margin-bottom:40px;
    }
    .img{
       width: 80px;
       height: 80px;
       border-radius: 50%;
       background-color: white;
    }
    .submit-input-box{
      width: 100%;
      height: 60%;
    }
    .submit-input{
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      padding: 20px 0;
      margin-top: 20px;
      
      
    }
    .input{
      border:1px solid #ccc; 
      width:80%;
      margin:15px 0;
      padding:5px;
     }
     .error{
      color:red;
      visibility: hidden;
    }
     .input-botton{
       margin-top: 20px;
       padding:5px 20px;
       border-radius: 10px;
       bottom: 0px
     }
     .submit-inform{
       line-height:14px;
       width:50px;
       right:0;
       bottom:20px;
        position:absolute;
     }
</style>
