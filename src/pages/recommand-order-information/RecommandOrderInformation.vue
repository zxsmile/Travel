<template>
        <div class="order">
           <div class='header'>
               <div
               class='iconfont header-back'
               @click="handleClickBack" 
               >
               &#xe624;
               </div>
               <p class="header-title">订单填写</p>
               <P class='header-register'>登录</P>
           </div>
           <div class="ticket">
               <div class="ticket-information">
                  <div class="ticket-title">
                    <div class="ticket-title-information">{{this.$store.state.title}}</div>
                    <div class="ticket-date">{{this.$store.state.year}}年{{this.$store.state.date}}</div>
                  </div>
                  <div class="ticket-money">{{'￥'+this.$store.state.money+'/张'}}</div>
               </div>
               <div class="ticket-number">
                   <div class="ticket-number-title">购买数量</div>
                   <div class="ticket-number-information">
                       <div class='iconfont reduce' @click='handleClickReduce'>&#xe615;</div>
                       <p>{{number}}</p>
                       <div class='iconfont add' @click='handleClickAdd'>&#xe715;</div>
                   </div>
               </div>
           </div>
           <div class="visitor">
               <div class="ticket-title-information">游客信息</div>
               <div class="visitor-informations">
                   <div class="visitor-information">
                     <label class="visitor-title">游客1</label>
                     <input 
                      type="text" 
                      placeholder='请填写姓名' 
                      class="visitor-content" 
                      id="name1" 
                      v-model="name" 
                      maxlength="20"
                      @input="handleClickInput" 
                      />
                   </div>
                   <div class="visitor-information">
                     <label class="visitor-title">手机号</label>
                     <input 
                     type="text" 
                     placeholder='请填写手机号码' 
                     class="visitor-content" 
                     id="phone1" 
                     v-model="phone" 
                     @input="handleClickInput" 
                     />
                  </div>
                  <div class="visitor-information">
                     <label class="visitor-title" >证件类型</label>
                     <div class="visitor-content content">身份证</div>
                   </div>
                   <div class="visitor-information">
                     <label class="visitor-title" >证件号码</label>
                     <input 
                     type="text" 
                     placeholder='请填写证件号' 
                     class="visitor-content" 
                     id='card1' 
                     v-model='card' 
                     @input="handleClickInput" 
                     />
                   </div>
                </div>  
                <div class="visitor-informations">
                   <div class="visitor-information">
                     <label class="visitor-title">游客2</label>
                     <input 
                     type="text" 
                     placeholder='请填写姓名' 
                     class="visitor-content" 
                     v-model="name2" 
                     maxlength="20"
                     @input="handleClickInput2" />
                   </div>
                   <div class="visitor-information">
                     <label class="visitor-title">手机号</label>
                     <input 
                     type="text" 
                     placeholder='请填写手机号码' 
                     class="visitor-content" 
                     id="phone2" 
                     v-model="phone2" 
                     @input="handleClickInput2" />
                  </div>
                  <div class="visitor-information">
                     <label class="visitor-title" >证件类型</label>
                     <div class="visitor-content content">身份证</div>
                   </div>
                   <div class="visitor-information">
                     <label class="visitor-title" >证件号码</label>
                     <input 
                     type="text" 
                     placeholder='请填写证件号' 
                     class="visitor-content"
                     v-model='card2'  
                     id='card2' 
                     @input="handleClickInput2"  />
                   </div>
                </div>  
           </div>
           <div class='submit'>
               <div class="submit-money">待支付{{'￥'+money}}</div>
               <button class="submit-button" id="button">提交订单</button>
           </div>
        </div>
</template>

<script>


export default{
    name:'RecommandOrderInformation',
    components: {
     
  },
 data:function(){
        return{
           parentId:'' ,
           listId:'',
           number:1,
           money:this.$store.state.money,
           name:'',
           phone:'',
           card:'',
           name2:'',
           phone2:'',
           card2:''
        }
  },
  methods:{
    handleClickReduce:function(){
       this.number--;
   },
    handleClickAdd:function(){
       this.number++;
   },
   handleClickBack:function(){
          this.$router.push({  
             path:'/'+this.$route.params.cityId+'/detail/'+ this.parentId
           })
           this.name=''
           this.phone=''
           this.card=''
           this.name2=''
           this.phone2=''
           this.card=''
   },
   handleClickInput:function(e){
         const rightPhone= /^1[3-9][0-9]{9}$/
       	 const rightCard= /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ 
        const button = document.getElementById('button');
      if(this.name.length===0||this.phone.length===0||this.card.length===0){
          button.disabled = true
          button.style.backgroundColor = '#ccc'
      }else{
          button.disabled=false
          button.style.backgroundColor = 'coral'
      } 
     if(rightPhone.test(this.phone)){
         button.disabled=false
          button.style.backgroundColor = 'coral'
     }else{
         button.disabled = true
          button.style.backgroundColor = '#ccc'
     }
     if(rightCard.test(this.card)){
         button.disabled=false
          button.style.backgroundColor = 'coral'
     }else{
         button.disabled = true
          button.style.backgroundColor = '#ccc'
     }
   },
   handleClickInput2:function(e){
         const rightPhone= /^1[3-9][0-9]{9}$/
       	 const rightCard= /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/ 
        const button = document.getElementById('button');
      if(this.name2.length===0||this.phone2.length===0||this.card2.length===0){
          button.disabled = true
          button.style.backgroundColor = '#ccc'
      }else{
          button.disabled=false
          button.style.backgroundColor = 'coral'
      } 
     if(rightPhone.test(this.phone2)){
         button.disabled=false
          button.style.backgroundColor = 'coral'
     }else{
         button.disabled = true
          button.style.backgroundColor = '#ccc'
     }
     if(rightCard.test(this.card2)){
         button.disabled=false
          button.style.backgroundColor = 'coral'
     }else{
         button.disabled = true
          button.style.backgroundColor = '#ccc'
     }
   }
},
 watch:{
    number:function(){
          let reduce = document.getElementsByClassName('reduce')[0]
            let add = document.getElementsByClassName('add')[0]
           if(this.number <= 1){
           reduce.style.pointerEvents ='none'
           reduce.style.backgroundColor='beige'
       }
       if(this.number>1){
           reduce.style.pointerEvents ='auto'
           reduce.style.backgroundColor='#ccc'
       }
        if(this.number >= 5){
           add.style.pointerEvents ='none'
           add.style.backgroundColor='beige'
       }
       if(this.number < 5){
           add.style.pointerEvents ='auto'
           add.style.backgroundColor='#ccc'
       } 
       this.money = this.number * this.$store.state.money
     
     },
    
 },
 
  mounted:function(){
           this.parentId = this.$route.params.parentId
           this.listId = this.$route.params.listId
           let reduce = document.getElementsByClassName('reduce')[0]
           this.number = 1;
           reduce.style.pointerEvents ='none'
           reduce.style.backgroundColor='beige'
           const button = document.getElementById('button');
           button.disabled = true
           button.style.backgroundColor = '#ccc'
           
        },
  activated:function(){
           this.parentId = this.$route.params.parentId
           this.listId = this.$route.params.listId
           let reduce = document.getElementsByClassName('reduce')[0]
           this.number = 1;
           reduce.style.pointerEvents ='none'
           reduce.style.backgroundColor='beige'
           const button = document.getElementById('button');
           button.disabled = true
           button.style.backgroundColor = '#ccc'
        },
       
}
</script>

<style scoped>
  .order{
      background-color:turquoise;
  }
  .header{
       display:flex;
       flex-direction: row;
       width:100%;
       padding: 5px;
       flex-wrap: nowrap;
       background-color:turquoise;
       color:#fff
   }
   .header-back{
        line-height: 40px;
        font-size: 22px;
        width:20%;
    }

    .header-title{
        line-height: 40px;
        font-size: 18px;
        font-weight: 800;
        text-align: center;
        width: 60%;
        
    }
    .header-register{
        width:20%;
        line-height: 40px;
        font-size: 16px;
        font-weight: 800;
        text-align: center;
    }
    .ticket{
        display:flex;
        flex-direction: column;
        padding:10px;
        background-color: #fff;
        border-radius: 5px;
        margin: 0 10px;
    }
    .ticket-information{
        display:flex;
        flex-direction: row;
        border-bottom: 0.1px solid #ccc;
       
    }
    .ticket-title{
        display:flex;
        flex-direction: column;
        width: 80%;
        line-height: 20px;
    }
    .ticket-title-information{
       
        font-size: 16px;
        font-weight: 800;
        padding: 5px 0;
    }
    .ticket-date{
        
        padding: 5px 7px;
    }
    .ticket-money{
      padding: 5px 0;
      font-size: 16px;
        color:coral;
    }
    .ticket-number{
        padding: 5px 0;
        line-height: 25px;
        display:flex;
        flex-direction: row;
    }
    .ticket-number-title{
       line-height: 30px;
       margin-bottom: -10px;
       width: 80%;
    }
    .ticket-number-information{
        display:flex;
        flex-direction: row;
        margin-top: 5px;
    }
    .reduce{
        font-size: 15px;
        padding: 0 5px;
        background-color: #ccc;
        border-radius: 10px;
        margin: 0 10px;
    }
    .add{
        font-size: 15px;
        padding: 0 5px;
        background-color:#ccc;
        border-radius: 10px;
        margin-top:1px ;
        margin: 0 10px;
    }
    .visitor{
        display:flex;
        flex-direction: column;
        padding:10px;
        background-color: #fff;
        border-radius: 5px;
        margin: 10px;
        
    }
    .visitor-informations{
        display:flex;
        flex-direction: column;
        padding:10px;
    }
    .visitor-information{
        display:flex;
        flex-direction: row;
        padding: 5px;
        line-height:30px; 
    }
    .visitor-title{
       margin-top: 3px;
       width: 50%;
    }
    .content{
      margin-left:-15px;
    }
     input:-ms-input-placeholder{
            color: #ccc;
        }/* Internet Explorer 10+ */
        input::-webkit-input-placeholder{
            color: #ccc;
        }/* WebKit browsers */
        input::-moz-placeholder{
            color: #ccc;
        } /* Mozilla Firefox 19+ */
        input:-moz-placeholder{
            color: #ccc;
        }/* Mozilla Firefox 4 to 18 */
    .submit{
        display:flex;
        flex-direction: row;
        background-color: #fff;
        padding: 10px;
    }
    .submit-money{
        width:70%;
        font-size: 18px;
        color: coral;
        line-height: 35px;
        font-weight: 800;
    }
    .submit-button{
        font-size: 16px;
        color: #fff;
        background-color: coral;
        font-weight: 800;
        border-radius: 16px;
        text-align: center;
        padding: 8px 20px;
    }
</style>