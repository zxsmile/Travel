<template>
   <div>
       <div class="title">周末去哪儿</div>
       <router-link :to="'./weekend-detail/' + item.parentId"  tag='div' class=" weekend" v-for='item of weekendList' :key='item.parentId'>
           <div class=' weekend-img'>
               <img  class="img" :src="item.weekendImgSrc" />
           </div>
           <div class=' weekend-content'>
               <p class=" weekend-title">{{item.weekendTitle}}</p>
               <p class=" weekend-describe">{{item.weekendDescribe}}</p>
           </div>
       </router-link>
   </div>
</template>

<script>
export default{
   name:'HomeWeekend',
   data:function(){
       return {
          
    }
   },
   props:{
       weekendList:Array
   }
}
</script>

<style scoped>
    .title{
        background-color:#eee;
        line-height:40px;
        height:40px;
        text-indent:10px;
    }
    
    .weekend-img{
        width:100%;
        height:0;
        overflow: hidden;
        padding-bottom:50.6%;
      
    }
    .img{
       width:100%;
       
    }
    .weekend-content{
        padding:5px;
        
    }
    .weekend-title{
        height:27px;
        line-height: 27px;
        font-size: 16px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .weekend-describe{
        height:20px;
        line-height: 20px;
        color: #ccc;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
   
</style>