<template>
  

    <div class="orderb" >
       
        <span class='iconfont back-icon' @click='hanleClick'>&#xe66f;</span>
        <div class='order'>
            <div class="order-title"> 
                {{this.$store.state.title}}
                 
            </div>
            <p class="order-money">{{this.$store.state.money+'起/张'}}</p>
        </div> 
        <p class='order-date-title'>选择日期</p>
        <div class="order-date-wrapper">
                <div class="order-date-box" >
                    <div class="order-date-month" @click='hanleDateClick'>
                        今天
                        <p>{{today}}</p>
                    </div>
                    </div>
                <div class="order-date-box">
                    <div class="order-date-month" @click='hanleDateClick'>
                        明天
                        <p class="order-date">{{tomorrow}}</p>
                    </div>
                </div>
                <div class="order-date-box">
                    <div class="order-date-month" @click='hanleDateClick'>
                        后天
                        <p>{{afterTomorrow}}</p>
                    </div>
                </div>
                 <router-link
                 tag='div' 
                 class="order-date-box" 
                 :to="date"
                 >
                    <div class="order-date-month" @click='hanleChooseDateClick'>
                        其他日期
                      <p>{{this.$store.state.month}}月{{this.$store.state.day}}日</p>
                    </div>
                 </router-link>
                
        </div>  
        <p class='order-date-content'>需要在游玩当天的16：45前预定；预定后30分钟才能入园</p>
        <router-link class='button' :to="orderInformation" tag="div">
              <button class="order-button">立即预定</button>
        </router-link>
    </div>
 
</template>

<script>
 

   export default{
       name:'DetailOrder',
       data:function(){
           return {
               today:'',
               tomorrow:'',
               afterTomorrow:''
           }
       },
       props:{
           OrderShow:String,
            date:String,
            orderInformation:String

       },
      methods:{
         hanleDateClick:function(e){
             let div=document.getElementsByClassName('order-date-month')
             div = Array.from(div)
             div.forEach((element,index) => {
              
                    element.style.backgroundColor='white'
               
              if(e.target.tagName === 'P'){
                  e.target.parentNode.style.backgroundColor = 'turquoise'
             }else{
                 e.target.style.backgroundColor = 'turquoise'
             }

             });
         },
         hanleChooseDateClick:function(e){
                this.hanleDateClick(e)

         },
        
         hanleClick:function(){
             this.$emit('handleClickDisapper')
              let div=document.getElementsByClassName('order-date-month')
             div = Array.from(div)
             div.forEach((element,index) => {
              
                    element.style.backgroundColor='white'
               
            
             });
         }
      },
      mounted:function(){
           let date1 = new Date();
           let month1 = date1.getMonth()+1;
           let day1 = date1.getDate()
           this.today = month1+"月"+ day1+"日"
           let date2 = new Date()
           date2.setTime(date2.getTime()+ 24*60*60*1000);
           let month2 = date2.getMonth()+1;
           let day2 = date2.getDate()
           this.tomorrow = month2+"月"+ day2+"日"
           let date3 = new Date()
           date3.setTime(date3.getTime()+ 2*24*60*60*1000);
           let month3 = date3.getMonth()+1;
           let day3 = date3.getDate()
           this.afterTomorrow = month3+"月"+ day3+"日"
           if(this.today===this.$store.state.month+'月'+this.$store.state.day+'日'){
                  let div=document.getElementsByClassName('order-date-month')
                  div = Array.from(div)
                  div[0].style.backgroundColor='turquoise'
             }
      },
       activated:function(){
             if(this.today===this.$store.state.month+'月'+this.$store.state.day+'日'){
                  let div=document.getElementsByClassName('order-date-month')
                  div = Array.from(div)
                    div.forEach((element,index) => {
                       element.style.backgroundColor='white'
                    });
                  div[0].style.backgroundColor='turquoise'
             }
             if(this.tomorrow===this.$store.state.month+'月'+this.$store.state.day+'日'){
                  let div=document.getElementsByClassName('order-date-month')
                  div = Array.from(div)
                    div.forEach((element,index) => {
                       element.style.backgroundColor='white'
                    });
                  div[1].style.backgroundColor='turquoise'
             }
             if(this.afterTomorrow===this.$store.state.month+'月'+this.$store.state.day+'日'){
                  let div=document.getElementsByClassName('order-date-month')
                  div = Array.from(div)
                    div.forEach((element,index) => {
                       element.style.backgroundColor='white'
                    });
                  div[2].style.backgroundColor='turquoise'
             }
        }
   }
</script>

<style scoped>

   .orderb{
       position: fixed; 
       width: 100%;
       background-color:white;
       bottom:0;
       opacity: 1;
       z-index: 100;
       top:190px;
       height: 484px; 
   }
   .back-icon{
     right:2px;
     position:absolute;
     top:21px;
     text-align: center;
     width: 20%;
   }
   .order{
       display:flex;
       flex-direction: column;
       padding: 20px 10px;
       top:20px;
   }
    .order-title{
       font-size: 16px;
       font-weight: 800;
       line-height: 20px;
       padding: 0 10px;
       width: 80%;
       height: 40px;
       margin-top: 10px;
       
   }
   .order-money{
       font-size: 18px;
        color:coral;
        margin-top: 10px;
        padding:0 10px;
   }
   .order-date-title{
       padding: 20px 22px;
   } 
   .order-date-wrapper{
       overflow: hidden;
       /* display: flex;
       justify-content: space-between; */
   }
   .order-date-box{
       width:25%;
       float: left;
    }
   .order-date-month{
       border: 0.3px solid;
       line-height: 22px;
       text-align: center;
       margin: 5px;
       border-radius: 3px; 
       padding: 3px 0;
       height: 51px;
       display: flex;
       flex-direction: column;
       justify-content: center;
    }
    .order-date{
        width:100%;
        height: 51px;
    }
    .order-date-content{
         padding: 30px 22px;
         line-height: 20px;
         color:coral;
    }
    .order-button{
        background-color: coral;
        width: 100%;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
        color: #fff;
        font-weight: 500;
        bottom:0;
        position:absolute;
        margin: 25px 0;
        border-radius: 5px;
        /* left: 50%;
         transform: translateX(-50%); */
    }
   
</style>