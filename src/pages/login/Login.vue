<template>
<div class="login">
   <login-header></login-header>
    <div class="welcome">
        <div class='submit'>
            <div class='submit-title'>
                  <div class="img"></div>
            </div>
            <div class='submit-input-box'>
              <div class='submit-input'>
                 <input type="text" name="user" value='' class='input' placeholder="用户名" />
                 <input type="password" name="password" value='' class='input' placeholder="密码" />
                 <input type="button"  value='登录' class='input-botton' />
              </div>
            </div>
            <div class="submit-inform">注册</div>
        </div>
    </div>
 </div>
</template>

<script>
import LoginHeader from './components/Header'
import axios from 'axios'
export default {
  name: 'Login',
  components: {
    LoginHeader
  },
  data:function(){
   return{
     
     
   } 
  },
  methods:{
    getLoginInfo:function(){
       axios.get('/api/user/login')
         .then(this.getLoginInfoSuccess,function(){
           console.log('获取数据失败')
         })
     },
     getLoginInfoSuccess:function(res){
         
          console.log('成功')
      }
  },

  mounted:function(){
     this.getLoginInfo()
  },
  activated:function(){
   
    this.getLoginInfo()
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
      height:20px;
      line-height: 20px;
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
     .input-botton{
       margin-top: 30px;
       padding:5px 20px;
       border-radius: 10px;
     }
     .submit-inform{
       line-height:14px;
       width:50px;
       right:0;
       bottom:20px;
        position:absolute;
     }
</style>
