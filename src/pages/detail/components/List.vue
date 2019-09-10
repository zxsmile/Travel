<template>
    <div class='wrapper' ref='wrapper'>
        <div class="list border-bottom-content">
            <div v-for="(item,index) of list" :key='index' class="list-content">
                    <div class="list-title border-bottom">
                        <span class="list-title-icon"></span>
                        {{item.title}}
                    </div>
                    <div v-for="(child,index) of item.children" :key="index">
                        <div class="children border-bottom" @click="handleClickOrder(child)">
                            <div class="children-title">
                                <b>{{child.title}}</b>
                                <div class="children-content">{{child.content}}</div>
                            </div>
                            <div class="children-money">
                                <div class='children-money-content'>
                                    {{'￥'+child.money}}
                                </div>
                                <div class="list-title-icon-right iconfont">&#xe633;</div>
                            </div> 
                        </div>
                        <div  v-if="child.orderShow">
                            <div class="order border-bottom" v-for="(order,index) of child.order" :key="index">
                                <div class="children-title">
                                    <b>{{order.title}}</b>
                                    <div class="children-content">{{order.time}}</div>
                                </div>
                                <div class="order-money">
                                    <div class='order-money-content'>{{'￥'+order.money}}</div>
                                    <button class="recommend-button" @click.stop="handleClickOrderShow(order.title,order.money)">预定</button>
                                </div> 
                            </div>
                        </div>
                    </div> 
            </div>
            <detail-order v-show='OrderShow' @handleClickDisapper='handleClickOrder1' :date='date' :orderInformation='orderInformation'> </detail-order>
        </div>
    </div>
</template>
<script>
import DetailOrder from './Order'
export default {
  name: 'DetailList',
  data:function(){
      return {
          OrderShow:false
      }
  },
   props:{
     date:String,
      list:Array,
      orderInformation:String

 },
   components:{
           DetailOrder
       },
  methods:{
       handleClickOrder:function(child){
        child.orderShow=!child.orderShow;
       },
       handleClickOrder1:function(){
        this.OrderShow=false
         this.$root.Bus.$emit('hiddenDiv')
       },
       
       handleClickOrderShow:function(title,money){
              this.$store.dispatch('changeTitle',title)
              this.$store.dispatch('changeMoney',money)
              this.OrderShow = !this.OrderShow;
              this.$root.Bus.$emit('displayDiv')
              this.$root.Bus.$emit('disabledOrderButton')
              this.$root.Bus.$emit('hiddenOrederButton')
       },
       handleClickOrderhidden:function(){
            
           if(this.OrderShow){ 
            this.OrderShow = false
        }
           
       }
  },
 
   mounted(){
        
      
  },
   activated() {
     
      
   },
 
 
}
</script>

<style scoped>
   .wrapper{
       /* overflow: hidden;
       position:absolute;
       top:43px;
       left:0;
       right:0;
       bottom: 0; */
   }
   .list{
       margin-top: 10px;
       position: relative;
   }
   .list-title{
       height:40px;
       line-height:40px;
       padding:0 10px;
       font-size: 16px;  
       white-space: normal;
       color:cornflowerblue;
   }
   .border-bottom{
       border-bottom:1px solid #ccc;

    }
    
   .border-bottom-content{
       border-bottom:0px solid #F5F5DC;
       border-radius: 5px;
      
    }
    .list-title-icon{
      width:18px;
      height:18px;
      display: inline-block;
      position: relative;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22.5px no-repeat;
      left:3px;
      top:3px;
      margin-right: 5px;
      background-size: 20px 150px;
      
    }
    
    .children{
        display: flex;
        flex-direction: row;
        height:150px;
        
        
    }
    .children-title{
        width:70%;
        font-size: 15px;
        color:black;
        /* font-weight: 800; */
        padding:0 10px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        line-height: 20px;
    }
    .children-content{
       margin-top: 8px;
       line-height: 15px;
       color:darkgrey;
       font-size: 13px;
   }
    .children-money{
        min-width: 30%; 
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        font-size: 18px;
        color:coral;
        height: 150px;
        line-height: 150px;
        letter-spacing: 0px;
    }
    .children-money-content{
         min-width: 70%;
        white-space: normal;
        overflow: hidden;
        text-align: right;
    }
    .list-title-icon-right{
       font-size: 14px;
       color: darkgrey;
       padding: 0 2px;
       margin-top: 0px;
       vertical-align: middle;
    }
    .order{
        display: flex;
        flex-direction: row;
        height:150px;
        background-color: #F5F5DC;
        
    }
    .order-money{
        display:flex;
        flex-direction: column;
        justify-content: center;
        font-size: 18px;
        color:coral;
        height: 150px;
    }
     .order-money-content{
        white-space: normal;
        overflow: hidden;
    }
   .recommend-button{
       background-color: #ff9300;
       border-radius: 10px;
       padding: 0 10px;
       color: #fff;
      margin-top: 10px;
    }
</style>
