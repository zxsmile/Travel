<template>
<div class="login">
   <regist-header></regist-header>
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
                 <input type="text" name="user" value='' class='input' placeholder="用户名" v-model="userName" @input="changeInput()" />
                 <input type="password" name="password" value='' class='input' placeholder="密码" v-model="userPaw" @input="changeInput()" />
                 <p class='error'></p>
                 <input type="button"  value='注册' class='input-botton' @click='getRegistInfo' :disabled='showDisabled'/>
              </div>
            </div>
            <div class="submit-inform" @click='Login'>登录</div>
        </div>
    </div>
 </div>
</template>

<script>
import RegistHeader from './components/Header'
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
  name: 'Regist',
  components: {
    RegistHeader,
    RegistImg,
    
  },
  data:function(){
   return{
      userName:this.userName,
      userPaw:this.userPaw,
      showDisabled:true,
      showGallary:false,
      img:'',
      showImg:'',
      uploadImg:true
     } 
  },
  // computed:{
  //   img:function(){
  //      let imgFile = document.getElementById('input')
  //      console.log(imgFile)
  //      if(imgFile){
  //        return imgFile.name
  //      }
  //   }
  // },
  methods:{
    clearForm() {
        this.userName=''
        this.userPaw=''
        let error = document.getElementsByClassName('error')
        error[0].style.visibility='hidden'
        this.uploadImg=true
    },
    changeFile (e) {
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
        that.img=''
      }
  }   
     
    },
   changeInput() {
        if(this.userName&&this.userPaw){
          this.showDisabled=false
        }else{
           this.showDisabled=true
           let error = document.getElementsByClassName('error')
           error[0].style.visibility='hidden'
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
// getBase64Image(img) {  
//      var canvas = document.createElement("canvas");  
//      canvas.width = img.width;  
//      canvas.height = img.height;  
//      var ctx = canvas.getContext("2d");  
//      ctx.drawImage(img, 0, 0, img.width, img.height);  
//      var ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase();  
//      var dataURL = canvas.toDataURL("image/"+ext);  
//      return dataURL;  
// }  ,
    getRegistInfo:function(){
         let formdata = new FormData()
         let img=document.getElementById('img')
         let imgSrc = ''
         if(!this.uploadImg){
          var blob = this.dataURItoBlob(img.src);
         formdata.append('file',img.src)
         }
       
        //  formdata.append('imgfile',this.file)
         formdata.append('userName',this.userName)
         formdata.append('userPaw',this.userPaw)
        this.instance.post('/api/user/regist',formdata)
         .then(this.getRegistInfoSuccess,function(){
           console.log('获取数据失败')
         })
     },
     getRegistInfoSuccess:function(res){
         let data = eval("("+res.data+")")  
         let error = document.getElementsByClassName('error')
         if(!data.state){
           error[0].style.visibility='visible'
           error[0].innerHTML=data.msg

         }else{
          error[0].style.visibility='visible'
          error[0].innerHTML=data.msg
         }
      },
      Login() {
        this.$router.push({ 
                  path:'/user/login'
            })
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
    
  },
  activated:function(){
    this.clearForm()
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
