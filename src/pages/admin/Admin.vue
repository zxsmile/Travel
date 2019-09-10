<template>
<div class="login">
   <admin-header></admin-header>
    <div class="welcome">
       <div class='submit'>
           <div class='submit-title'>
                 <input type="file" id='input' name='imgfile' @change="changeFile"  />
                  <label for="input"></label>
                   <div  class="img" v-if='uploadImg'>
                      <div class='iconfont add-icon'> &#xe715;</div>
                  </div> 
                  <img :src='showImg' class="img" id='img' v-else />
                   <regist-img v-show='showGallary' :img='img' @hiddenImg='hiddenImg' @showImgClick='showImgClick'></regist-img>
            </div>
          <div class='submit-input-box'>
              <div class='submit-input'>
                 <input type="text" name="user" value='' class='input' placeholder="用户名" v-model="userName" @input="changeInput()" :readonly='write'/>
                 <input type="password" name="password" value='' class='input' placeholder="密码" v-model="userPaw" @input="changeInput()" :readonly='write' />
                 <p class='error'></p>
                 <input type="button"  value='登录' class='input-botton' @click='getAdminInfo' :disabled='showDisabled' />
              </div>
           </div>
           <div class="submit-inform" @click='Regist'>登入</div>
        </div>
    </div>
 </div>
</template>

<script>
import AdminHeader from './components/Header'
import RegistImg from './components/Img'
import Vue from 'vue' 
import axios from 'axios'



 const instance=axios.create({
    // baseURL:'http://127.0.0.1/', // 通常配置基础的接口入口地址 
    // timeout:5000, // 请求超时时间
    headers:{// 这里可设置所有的请求头
        'Content-Type':'application/x-www-form-urlencoded', //该项建议设置 如果未 POST请求时 数据未做处理时会出现错误，最理想的解决方法就是 直接设置该项
    },
    withCredentials:true,//是否允许发送Cookie 如果为true 则服务器的 Access-control-Allow-Credentials 必须为 true 来源为 XMLHttpRequest的withCredentials配置项

    // 以下两项为拦截器配置 可最后再看
    transformRequest: [function (data) {//准备发送请求触发的事件 类型：Array || Function 可以是一个函数或数组 data 为发送的数据 get 为undefined
        //console.log('准备发送请求：',data)
        // 此处可对发送的数据进行处理      
        return data; //最终数据
    }],
    transformResponse: [function (data) {//接收到数据首先处理的函数 ，data 为服务器返回的数据（// 1.响应结构 里的  rs.data）
        //console.log('接收到数据：',data)
        return data;//最终数据 
    },function (data) {//当为数组时 窜行操作  data 为上一步中的最终数据
        //console.log('before',data)
        return data;
    }],
})

instance.all=axios.all;
Vue.prototype.instance=instance;

export default {
  name: 'Admin',
  components: {
    AdminHeader,
    RegistImg
  },
  data:function(){
   return{
      userName:this.userName,
      userPaw:this.userPaw,
      showDisabled:true,
      showGallary:false,
      img:'',
      showImg:'',
      uploadImg:true,
      write:false
     } 
  },
  methods:{
    clearForm() {
        this.userName=''
        this.userPaw=''
        let error = document.getElementsByClassName('error')
        error[0].style.visibility='hidden'
    },
    
     changeFile (e) {
       this.uploadImg=true
      this.file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(this.file);//发起异步请求
      let that = this 
      reader.onload = function(){
      //读取完成后，数据保存在对象的result属性中
      //console.log(this.result)
       if(that.file){
        that.showGallary=true
        that.img = this.result
        that.$root.Bus.$emit('changeImg',this.result)
        
      }else{
        that.showGallary=false
        that.img='../../assets/images/covers3.jpg'
      }
  }   
     
    },
   changeInput() {
     if(!sessionStorage.getItem('took')){
          this.write=false
          if(this.userName&&this.userPaw){
              this.showDisabled=false
          }else {
              this.showDisabled=true
              let error = document.getElementsByClassName('error')
              error[0].style.visibility='hidden'
           }
     }else if(sessionStorage.getItem('took')==1){
       this.showDisabled=true
       this.write=true
     }
    
       
    },
     dataURItoBlob(dataURI) {//图片转成Buffer
    
             var byteString = atob(dataURI.split(',')[1]);
             var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
             var ab = new ArrayBuffer(byteString.length);
             var ia = new Uint8Array(ab);
             for (var i = 0; i < byteString.length; i++) {
                 ia[i] = byteString.charCodeAt(i);
             }
             return new Blob([ab], {type: mimeString});
         },
    getAdminInfo:function(){
         let formdata = new FormData()
         let img=document.getElementById('img')
         let imgSrc = ''
         if(!this.uploadImg){
          var blob = this.dataURItoBlob(img.src);
         formdata.append('file',img.src)
         }
         formdata.append('userName',this.userName)
         formdata.append('userPaw',this.userPaw)
        this.instance.post('/api/admin/login',formdata)
         .then(this.getAdminInfoSuccess,function(){
           console.log('获取数据失败')
         })
     },
     getAdminInfoSuccess:function(res){
         let data = eval("("+res.data+")")  
         let took = data.took
          let error = document.getElementsByClassName('error')
          if(data.state){
               error[0].innerHTML=data.msg
              window.sessionStorage.setItem('took',took);
              window.localStorage.setItem("adminImg",data.result.imgUrl);
               this.$router.push({ 
                  path:'/admin/users'
                })
            }else{
              error[0].style.visibility='visible'
              error[0].innerHTML=data.msg
            }
        
      },
    Regist() {
       if(sessionStorage.getItem('took')==1){
          this.$router.push({ 
                  path:'/admin/users'
            })
       }
     },
      showImgClick(canvasUrl){
        this.showGallary=false
        this.uploadImg =false
        this.showImg=canvasUrl
      },
      hiddenImg(canvasUrl) {
        this.showGallary=false
        this.uploadImg =true
        this.showImg=''
      }
  },
  mounted:function(){
    this.clearForm()
    if(sessionStorage.getItem('took')==1){
       this.showDisabled=true
       this.write=true
    }else if(!sessionStorage.getItem('took')){
      this.showDisabled=true
      this.write=false
    }
  },
  activated:function(){
    this.clearForm()
     if(sessionStorage.getItem('took')==1){
       this.showDisabled=true
       this.write=true
    }else if(!sessionStorage.getItem('took')){
      this.showDisabled=true
      this.write=false
    }
  },
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
      /* font-size: 20px;
      font-weight: 800;
      height:40%;
      padding:10px; */
      margin-top: 20px;
      /* margin-bottom:40px; */
      position: relative;
    }
     #input{
       position: absolute;
       left: -9999px;
    }
     label {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
    /* z-index: 10; 这个z-index之后说到 */
}
    .img{
       width: 80px;
       height: 80px;
       border-radius: 50%;
       background-color: white;
    }
     .add-icon{
     font-size:60px;
     padding-top: 10px;
     padding-left: 10px;
    
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
      padding: 10px 0;
      margin-top: 10px;
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
