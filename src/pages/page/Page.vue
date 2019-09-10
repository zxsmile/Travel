<template>
    <div class="welcome">
      <div class='container'>
        <img class="user-avatar" :src="showImg" />
        <div class="user-name">Hello，{{showUserName}}</div>
        <div class="moto-container" >
          <div class="moto" @click='handleClickButton'>开启去哪儿之旅</div>  
        </div>
        <div class="loginButton">
           <div class="login" @click='handleClickLogin'>登录</div>
           <div class='regist' @click='handleClickRegist'>注册</div>
           <div class='regist' @click='handleClickAdmin'>管理员</div>
        </div>
      </div>
    </div>
        
    
</template>

<script>
import axios from 'axios'

export default {
  name: 'Page',
 
  data:function(){
   return{
     showImg:'',
     showUserName:''
     
   } 
  },
  methods:{
    handleClickButton:function(){
         this.$router.push('/'+ this.$store.state.city)
    },
    handleClickLogin() {
        this.$router.push('/user/login')
    },
    handleClickRegist() {
        this.$router.push('/user/regist')
    },
     handleClickAdmin() {
        this.$router.push('/admin/login')
    },
    changeMassage() {
       if(this.$store.state.took==1){
          this.showImg= require("../../assets/images/"+this.$store.state.imgUrlBack)
          this.showUserName = this.$store.state.userNameBack
       }else if(this.$store.state.took==0){
         this.showImg= require("../../assets/images/covers3.jpg")
         this.showUserName = 'roly*'
       }
         
          
    },
     
  },
  mounted:function(){
     this.changeMassage()
     var time = 1000*60*60*24*7;  //1000*60*60*24*7;
     var storage = window.localStorage; 
     var oldTimestamp = storage.getItem('timestamp');//以前存的时间戳 
     oldTimestamp=eval('('+oldTimestamp+')')
     var nowTimestamp = new Date().getTime();//当前时间戳
     var sumTimestamp = oldTimestamp + time;
     if(nowTimestamp > sumTimestamp){ 
        if (storage.getItem('timestamp')&&!sessionStorage.getItem('greenPath')){
         // 如果当前时间戳> 前面存的时间戳+过期时间 表示已经过期
           let userNameBack = this.$store.state.userNameBack
           let imgUrlBack =this.$store.state.imgUrlBack
           let  userPawBack = ''
           let took = 0
           this.$store.dispatch('changeTook',{took,userNameBack ,imgUrlBack, userPawBack})
            let msg = '登录已过期，请重新登录'
           window.sessionStorage.setItem('msg',msg);
       }
   }else{
    window.sessionStorage.setItem('greenPath',1);
   }
 console.log(window.sessionStorage.getItem('msg'))
  },
  activated:function(){
     this.changeMassage()
     var time =1000*60*60*24*7;  //1000*60*60*24*7;
     var storage = window.localStorage; 
     var oldTimestamp = storage.getItem('timestamp');//以前存的时间戳 
     oldTimestamp=eval('('+oldTimestamp+')')
     var nowTimestamp = new Date().getTime();//当前时间戳
     var sumTimestamp = oldTimestamp + time;
     if(nowTimestamp > sumTimestamp){ 
        if (storage.getItem('timestamp')&&!sessionStorage.getItem('greenPath')){
         // 如果当前时间戳> 前面存的时间戳+过期时间 表示已经过期
           let userNameBack = this.$store.state.userNameBack
           let imgUrlBack =this.$store.state.imgUrlBack
           let userPawBack = ''
           let took = 0
           let msg = '登录已过期，请重新登录'
           this.$store.dispatch('changeTook',{took,userNameBack ,imgUrlBack, userPawBack})
            window.sessionStorage.setItem('msg',msg);
       }
   }
   else{
    window.sessionStorage.setItem('greenPath',1);
   }
  console.log(window.sessionStorage.getItem('msg'))
  }
}
</script>

<style scoped>
   .welcome{
      width:100%;
      height:100%;
       background-color: #DCDCDC;
    }
   .container{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
   .user-avatar {
    width: 80px;
    height: 80px;
    margin-top: 160px;
    border-radius: 50%;
  }

.user-name {
  margin-top: 50px;
  font-size: 16px;
  font-weight: bold;
}

.moto {
  font-size: 14px;
  font-weight: bold;
  line-height: 40px;
  color: #405f80;
  cursor: pointer;
}

.moto-container {
  margin-top: 100px;
  border: 1px solid#405f80;
  width: 130px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
}
.loginButton{
   display:flex;
   flex-direction: row;
   margin-top:20px;
   color: #405f80;
}
.login{
  padding:2px;
  cursor: pointer;
}
.regist{
  padding:2px;
  cursor: pointer;
}
</style>
