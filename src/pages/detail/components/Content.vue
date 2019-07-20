<template>
   <div>
     <div class="address">
         <span class="address-icon iconfont">&#xe61e;</span>
         <router-link :to='MapAddress' class="address-content" tag='div'>陕西省西安市雁塔曲江新区芙蓉西路99号</router-link>
         <span class="address-icon-right iconfont">&#xe612;</span>
     </div>
     <div class="introduce">
         <span class="introduce-icon iconfont">&#xe606;</span>
         <div class="introduce-content">查看景点简介及开放时间</div>
         <router-link :to='introduce' tag="span" class="introduce-icon-right iconfont">&#xe612;</router-link>
    </div>
     <div class="list">
      <detail-list :list='list' :date='date' :orderInformation='orderInformation'></detail-list>
     </div>
  </div>
</template>

<script> 
import DetailList from './List'
export default {
  name: 'DetailContent',
  components:{
      DetailList
  },
 props:{
     list:Array,
     introduce:String,
     date:String,
     orderInformation:String,
     MapAddress:String

 }
}
</script>

<style scoped>
  .address{
      width: 100%;
      display:flex;
       white-space:nowrap;
      padding:10px;
      line-height: 20px;
      margin-top:10px;
      
  }
  .address-content{
    width:85% ;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;  
  }
  .address-icon{
      margin-right: 10px;
      font-size: 14px;
  }
  .address-icon-right{
      width: 15%;
      font-size: 20px;
  }
  .introduce{
        width: 100%;
       display:flex;
       white-space:nowrap;
      padding:10px;
      line-height: 20px;
      margin-top:5px;
  }
  .introduce-content{
      width:85%;
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;  
  }
  .introduce-icon{
      margin-right: 10px;
      font-size: 12px;
  }
  .introduce-icon-right{
      width:15%;
      font-size: 20px;
  }
  .list{
      margin-top:30px;
  }
</style>
