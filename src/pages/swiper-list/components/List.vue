<template>
   <div>
       <router-link :to="'./swiper-list-detail/'+ item.id" tag='div' class="recommend border-bottom" v-for='item of  recommandList' :key='item.id'>
           <img class='recommend-img' :src="item. recommandImgSrc" />
           <div class='recommend-content'>
               <p class="recommend-title">{{item.recommandTitle}}</p>
               <p class="recommend-describe">{{item.recommendDescribe}}</p>
               <p class="recommend-button">￥39起</p>
           </div>
       </router-link>
   </div>
</template>

<script>
export default{
   name:'List',
   props:{
       recommandList:Array
   }
}
</script>

<style scoped>
    .recommend{
        width:100%;
        height:94px;
        display: flex;
        overflow:hidden;
        margin-top:10px;
    }
    .border-bottom{
       border-bottom:1px solid #ccc;

    }
    .recommend-img{
        width:78px;
        height:78px;
        padding:5px;
    }
    .recommend-content{
        padding:5px;
        min-width: 0;
    }
    .recommend-title{
        height:27px;
        line-height: 27px;
        font-size: 16px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .recommend-describe{
        height:20px;
        line-height: 20px;
        color: #ccc;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .recommend-button{
       color: #ff9300;
       line-height:20px;
       margin-top: 5px;
       font-size: 16px;
      
    }
</style>