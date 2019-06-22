<template>
    <div class="orderb">
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
                 <div class="order-date-box">
                    <div class="order-date-month" @click='hanleDateClick'>其他日期</div>
                </div>
                
        </div>  
        <p class='order-date-content'>需要在游玩当天的16：45前预定；预定后30分钟才能入园</p>
        <button class="order-button">立即预定</button>
        
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
       },
      methods:{
         hanleDateClick:function(e){
             let div=document.getElementsByClassName('order-date-month')
             div = Array.from(div)
             div.forEach(element => {
               element.style.backgroundColor='mintcream'
                if(e.target.tagName === 'P'){
                  e.target.parentNode.style.backgroundColor = 'oldlace'
             }else{
                 e.target.style.backgroundColor = 'oldlace'
             }
             });
            
         },
         hanleClick:function(){
             this.$emit('handleClickDisapper')
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
           
      }
   }
</script>

<style scoped>
   .orderb{
       /* width: 100%;
       height: 100%;
       background-color:dimgrey;
       position:fixed;
       top:0;
       left:0;
       right: 0;
       bottom: 0;
       z-index: 99;
       opacity: 0.3; */ 
       position: fixed; 
       width: 100%;
       background-color:mintcream;
       bottom:0;
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
       padding:10px;

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
       padding: 10px 22px;
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
         padding: 10px 22px;
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
    }
</style>