<template>
    <div>
        <div class='header'>
                <div class='header-title'>用户管理页面</div>
        </div>
        <div class='container'>
            <div class='massage'>
                  <div class='massage-header'>
                      <div class='massage-img'>
                            <img :src="this.imgUrl" class='img' />
                            <div class='user_name'>blue</div>
                      </div>
                     
                  </div>
                  <div class='massage-content'>
                      <div class='content'>
                        
                          <router-link to='/' tag='div' class='content-list'><span>首页</span></router-link>
                           <router-link to='/admin/login' tag='div' class='content-list'><span>登录页面</span></router-link>
                          <div class='content-list' @click='showAddUserClick'><span>添加管理员</span></div>
                          <div class='content-list out' @click='handleOutLogin'><span>退出登录</span></div>
                      </div>
                  </div>
          </div>
          <div class='user-massage'>
            <div class='page'>
               <p class='pages'>共{{number}}/{{pages}}页</p>
              <div class='first' @click='first'>首页</div>
              <button class='next' @click='prev' :disabled='prevDisabled'>prev</button>
              <input type="text" name="page" value='' class='page_input' placeholder="页码" v-model='number' />
              <button class='go' @click='getUserInfo'>go</button>
              <button class='next' @click='next' :disabled='nextDisabled'>next</button>
              <div class='end' @click='end'>尾页</div>
             
            </div>
              <table>
                 <tr>
                   <th>ID</th>
                   <th>用户名</th>
                   <th>密码</th>
                   <th>图像</th>
                   <th>操作</th>
                 </tr>
                 <tr v-for="(item,index) of users" :key='index'>
                      <td >{{item.user_id}}</td>
                      <td>{{item.user_name}}</td>
                      <td width='30%'>{{item.password}}</td>
                      <td width='20%'>
                        <img :src="require('../../assets/images/'+item.imgUrl)" class='img' />
                      </td>
                      <td class='button-td'>
                        <div class='buttonBox'>
                            <button class='button' @click.stop='handleShowInput'>修改</button>
                            <button class='button' @click.stop='handleDelInput'>删除</button>
                        </div>
                      </td>
                 </tr> 
              </table>

          </div>
      </div>
      <div class='shadow' v-show='showinput'>
         <div class='submit'>
            <div class='submit-title'>
              <div class='img'>
                  <img :src='imgUrl' class='img' id='img'/>
              </div>
            </div>
            <div class='submit-input-box'>
              <div class='submit-input'>
                 <input type="text" name="user" value='' class='input' placeholder="用户名" v-model="userName" :readonly='write' />
                 <input type="password" name="password" value='' class='input' placeholder="密码" v-model="userPaw" />
                 <p class='error'></p>
                <div class='button-box'>
                    <input type="button"  value='修改' class='input-botton' @click='handleReviseClick' />
                    <input type="button"  value='取消' class='input-botton' @click='handleRemoveInput' />
                </div>
              </div>
            </div>
        </div>
      </div>
       <div class='shadow' v-show='showAddUser'>
         <div class='submit'>
            <div class='submit-input-box'>
              <div class='submit-input'>
                 <input type="text" name="user" value='' class='input' placeholder="用户名" v-model="userNameAdd"  />
                 <input type="password" name="password" value='' class='input' placeholder="密码" v-model="userPawAdd" />
                 <p class='errors'></p>
                <div class='button-box'>
                    <input type="button"  value='添加' class='input-botton' @click='handleAddClick' />
                    <input type="button"  value='取消' class='input-botton' @click='handleRemoveClick' />
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class='shadow' v-show='showDelUser'>
         <div class='submit'>
            <div class='submit-input-box'>
              <div class='submit-input'>
                 <p>确定删除？</p>
                <div class='button-box'>
                    <input type="button"  value='确定' class='input-botton' @click='handleDel' />
                    <input type="button"  value='取消' class='input-botton' @click='handleDelRemoveClick' />
                </div>
              </div>
            </div>
        </div>
      </div>
      <!-- <common-animation> 
        <add-user v-show='showAddUser' @hiddenUser='hiddenUser'></add-user>
    </common-animation> -->
  </div>      
    
</template>

<script>
import axios from 'axios'
import AddUser from 'common/add-user/AddUser'
 import CommonAnimation from 'common/animation/Animation'

export default {
  name: 'AdminUsers',
 
  data:function(){
   return{
     userName:'',
     userPaw:'',
     showinput:false,
     write:true,
     users:{},
     imgUrl:'',
     showAddUser:false,
     showDelUser:false,
     userNameAdd:'',
     userPawAdd:'',
     number:1,
     pages:0,
     prevDisabled:true,
     nextDisabled:false
   } 
  },
   beforeRouteEnter:(to,from,next)=>{
     if(window.sessionStorage.getItem('took')){
        next()
     }else{
      next('/admin/login')
     } 
    },
  components:{
        AddUser,
        CommonAnimation
       },
  methods:{
    handleShowInput(e) {
      this.showinput=true;
      let tr =e.target.parentNode.parentNode.parentNode
      let tds = tr.getElementsByTagName("td")
      this.userName = tds[1].innerText
      this.userPaw = tds[2].innerText
      this.imgUrl = tds[3].getElementsByTagName("img")[0].src
    },
    handleDelInput(e) {
      let tr =e.target.parentNode.parentNode.parentNode
        let tds = tr.getElementsByTagName("td")
        this.userName = tds[1].innerText
      this.showDelUser=true;
    },
    handleRemoveInput() {
      this.showinput=false;
    },
     getAdminInfo() {
        axios.post('/api/admin/login')
         .then(this.getAdminInfoSuccess,function(){
           console.log('获取数据失败')
         })
     },
       getAdminInfoSuccess:function(res){
          let data = res.data
        
          console.log(data)
          console.log('成功')
      },
     getUserInfo:function(){
       axios.post('/api/admin/user',{
         number:this.number
       })
         .then(this.getUserInfoSuccess,function(){
           console.log('获取数据失败')
         })
     },
     getUserInfoSuccess:function(res){
           console.log(this.number)
           let data = res.data[0]
           this.users=data
           this.pages=Math.ceil(res.data[1][0].TOTAL/5)
           if(this.number<=1){
             this.prevDisabled=true
             this.nextDisabled=false
             let first = document.getElementsByClassName('first')[0]
             first.style.visibility='hidden'
             let end = document.getElementsByClassName('end')[0]
              end.style.visibility='visible'
            
           }else if(this.number<this.pages){
              this.prevDisabled=false
              this.nextDisabled=false
             let first = document.getElementsByClassName('first')[0]
             first.style.visibility='visible'
             let end = document.getElementsByClassName('end')[0]
              end.style.visibility='visible'
           }else{
             this.prevDisabled=false
              this.nextDisabled=true
             let first = document.getElementsByClassName('first')[0]
             first.style.visibility='visible'
             let end = document.getElementsByClassName('end')[0]
              end.style.visibility='hidden'
           }
          console.log('成功')
      },
      handleReviseClick() {
          axios.post('/api/admin/revise',{
            userName:this.userName,
            userPaw:this.userPaw
          })
         .then(this.handleReviseClickSuccess,function(){
           console.log('获取数据失败')
         })
      },
      handleReviseClickSuccess(res) {
        this.showinput=false
           let userNameBack = this.$store.state.userNameBack
           let imgUrlBack =this.$store.state.imgUrlBack
           let  userPawBack = ''
           let took = 0
           this.$store.dispatch('changeTook',{took,userNameBack ,imgUrlBack, userPawBack})
           this.$router.push({ 
                  path:'/user/login'
            })
            let msg = '密码已修改，请重新登录'
           window.sessionStorage.setItem('msg',msg);
           console.log('成功')
      },
      handleDelRemoveClick() {
            this.showDelUser=false
      },
      handleDel(e) {
      
           axios.post('/api/admin/del',{
            userName:this.userName,
          })
         .then(this.handleDelSuccess,function(){
           console.log('获取数据失败')
         })
        
        
        
      },
      handleDelSuccess(res) {
        this.getUserInfo()
        setTimeout(()=>{
           this.showDelUser=false
         },3000)
         console.log('成功')
      },
      handleOutLogin() {
          axios.post('/api/admin/outLogin')
         .then(this.handleOutLoginSuccess,function(){
           console.log('获取数据失败')
         })
      },
      handleOutLoginSuccess(res) {
         let data = res.data
         let took = data.took
         window.sessionStorage.removeItem('took');
          this.$router.push({ 
                  path:'/admin/login'
            })
        console.log('成功')
      },
     showAddUserClick() {
         this.showAddUser=true
         this.userNameAdd=''
         this.userPawAdd=''
      },
     handleRemoveClick(){
        this.showAddUser=false
      },
     handleAddClick() {
         axios.post('/api/admin/regist',{
            userName:this.userNameAdd,
            userPaw:this.userPawAdd
          })
         .then(this.handleAddClickSuccess,function(){
            this.showAddUser=false
           console.log('获取数据失败')

         })
     },
     handleAddClickSuccess(res) {
        let data = res.data
        console.log(data)
         let error = document.getElementsByClassName('errors')
         if(!data.state){
           error[0].style.visibility='visible'
           error[0].innerHTML=data.msg

         }else{
          error[0].style.visibility='visible'
          error[0].innerHTML=data.msg
         }
         setTimeout(()=>{
           this.showAddUser=false
         },3000)
         //this.showAddUser=false
        console.log('成功')
     },
     first() {
       this.number=1
       axios.post('/api/admin/user',{
         number:this.number
        })
         .then(this.handlefirstSuccess,function(){
           console.log('获取数据失败')
         })
     },

     handlefirstSuccess(res) {
        let data = res.data[0]
        this.users=data
        this.prevDisabled=true
        this.nextDisabled=false
        let first = document.getElementsByClassName('first')[0]
        first.style.visibility='hidden'
        let end = document.getElementsByClassName('end')[0]
        end.style.visibility='visible'
        console.log('成功')
     },
    prev() {
      axios.post('/api/admin/user',{
          number:this.number-1
        })
         .then(this.handleprevSuccess,function(){
           console.log('获取数据失败')
         })
    },
    handleprevSuccess(res) {
            this.number--
            console.log(this.number)
            if(this.number>1){
                this.prevDisabled=false
                let first = document.getElementsByClassName('first')[0]
                first.style.visibility='visible'
                if(this.number<this.pages){
                  this.nextDisabled=false
                  let end = document.getElementsByClassName('end')[0]
                   end.style.visibility='visible'
                }else{
                  this.nextDisabled=true
                  let end = document.getElementsByClassName('end')[0]
                  end.style.visibility='hidden'
                }
           }else{
            this.prevDisabled=true
            this.nextDisabled=false
            let first = document.getElementsByClassName('first')[0]
            first.style.visibility='hidden'
            let end = document.getElementsByClassName('end')[0]
             end.style.visibility='visible'
           }

         let data = res.data[0]
        this.users=data
        console.log('成功')
    },
     next() {
        axios.post('/api/admin/user',{
          number:this.number+1
        })
         .then(this.handlenextSuccess,function(){
           console.log('获取数据失败')
         })
     },

     handlenextSuccess(res) {
        this.number++
        console.log(this.number)
         if(this.number<this.pages){
              this.number++
              this.nextDisabled=false
              if(this.number>1){
                this.prevDisabled=false
                let first = document.getElementsByClassName('first')[0]
                first.style.visibility='visible'
              }else{
                this.prevDisabled=true
                let first = document.getElementsByClassName('first')[0]
                first.style.visibility='hidden'
              }
           }else{
              this.nextDisabled=true
              this.prevDisabled=false
              let end = document.getElementsByClassName('end')[0]
              end.style.visibility='hidden'
              let first = document.getElementsByClassName('first')[0]
              first.style.visibility='visible'
           }
         let data = res.data[0]
         this.users=data
         console.log('成功')
     },
     end() {
        this.number=this.pages
        axios.post('/api/admin/user',{
           number:this.number
        })
         .then(this.handleendSuccess,function(){
           console.log('获取数据失败')
         })
     },
     handleendSuccess(res) {
        this.prevDisabled=false
        this.nextDisabled=true
        let data = res.data[0]
         this.users=data
          let end = document.getElementsByClassName('end')[0]
          end.style.visibility='hidden'
          let first = document.getElementsByClassName('first')[0]
          first.style.visibility='visible'
        console.log('成功')
     },
    getUserName() {
      // axios.post('/api/admin/userName')
      //    .then(this.handleUserNameSuccess,function(){
      //      console.log('获取数据失败')
      //    })
    },
    handleUserNameSuccess(res) {
      // console.log(res.data)
    }
  },
  mounted:function(){
    this.imgUrl=require("../../assets/images/admin/"+ window.localStorage.getItem('adminImg')) 
  },
  activated:function(){
        this.getUserInfo()
        let first = document.getElementsByClassName('first')[0]
         first.style.visibility='hidden'
        this.imgUrl=require("../../assets/images/admin/"+ window.localStorage.getItem('adminImg')) 
  }
}
</script>

<style scoped>
  .header{
      width:100%;
      height:43px;
      background-color:#ccc;
      left:50px;
       position:fixed;
  }
  .header-title{
    text-align:center;
    line-height:43px;
    color: #fff;
    font-size: 18px;
  }
  .back-icon{
      font-size:14px;
      float:left;
      line-height: 43px;
      color:#fff;
      /* margin-left:10px; */
      display:flex;
      flex-direction: row;
      padding: 0 10px
  }
  .home{
    padding:0 5px;
  }
  .container{
    display:flex;
    flex-direction: row;
    width:100%;
    height:100%;
  }
  .massage{
    background-color: #DCDCDC;
    height:100%;
    width:200px;
    color: #fff;
    position:fixed;
  }
  .massage-header{
    width:100%;
    /* margin:0 auto; */
    /* margin: 20px; */

  }
  .massage-img{
    display:flex;
    flex-direction:column;
    justify-items: center;
    margin:20px;
  } 
  .img{
    width:80px;
    height:80px;
    border-radius: 50%;
    margin:0 auto;

  }
  .user_name{
    line-height: 20px;
    padding:10px;
    text-align:center
    
  }
  .massage-content{
    display: flex;

  }
  .content{
    width:100%;
    /* margin-top:20px;  */
    margin-top:20px; 
  }
  .content-list{
     text-align:center;
     margin: 10px;
     padding:25px;
  }
  span{
    cursor: pointer;
  }
  .out{
    bottom:0;
  }
  .user-massage{
    flex-grow:9;
    margin:80px 50px 0 250px;
  }
  table {
    border-collapse: collapse;
    width:100%;
    padding:5px;
    margin: 5px;
    text-align: center;
}
  table, td, th {
    border: 1px solid black;
    padding:5px;
    
}
th{
  background-color:#ccc;
  

}
td{
  background-color:ghostwhite;
}
.button-td{
  padding: 0;
  width:20%;
}
.buttonBox{
  display: flex;
  flex-direction: column;
   margin: 0 auto;
}
.button{
  /* padding:5px 20px; */
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  width:30%;
   cursor: pointer;
}
.shadow{
  position: fixed;
  background-color: #000;
  opacity: 0.8;
  width:100%;
  height:100%;
  top:0;
  left:0;
  display: flex;
  align-items:center;
  justify-content:center;
  }
  .submit{
      border: 1px solid;
       background-color:#E6E6FA;
       width:20%;
       
    }
    .submit-title{
      margin: 0 auto;
      margin-top: 20px;
      position: relative;
    }
     #input{
       position: absolute;
       left: -9999px;
    }
     label {
    position: absolute;
    top: 0;left: 0;right: 0;bottom: 0;
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
     .errors{
      color:red;
      visibility: hidden;
    }
     .input-botton{
       margin-top: 20px;
       padding:5px 20px;
       border-radius: 10px;
       bottom: 0px;
       background-color: #ccc;
       margin-left:5px; 
     }
     .page{
       display: flex;
       flex-direction: row;
       margin-bottom: 30px;
     }
     .page_input{
      border:1px solid #ccc; 
      /* width:80%; */
     
      padding:5px;
     }
     .pages{
       line-height: 23px;
       padding:5px;
       cursor: pointer;
    }
    .first{
       line-height: 23px;
       padding:5px;
       cursor: pointer;
    }
    .go{
       padding:3px 10px;
       margin: 0 5px;
       border-radius:5px;
    }
    .next{
      padding:3px 5px;
       margin:0 5px;
       border-radius:5px;
    }
    .end{
       line-height: 23px;
       padding:5px;
       cursor: pointer;
    }
</style>
