<template>
   <div>
       <div class="title">热销推荐</div>
       <router-link
        :to="cityId+'/detail/'+  (item.recommandList_id-1)"
        tag='div'
        class="recommend"
        v-for='item of  recommandList'
        :key='item.parentId'>
           <img class='recommend-img' :src="item.recommandImgSrc" />
           <div class='recommend-content'>
               <p class="recommend-title">{{item.recommandTitle}}</p>
               <p class="recommend-describe">{{item.recommendDescribe}}</p>
               <button class="recommend-button">查看详情</button>
           </div>
       </router-link>
   </div>
</template>

<script>
export default{
   name:'HomeRecommend',
   props:{
       recommandList:Array,
       cityId:String
   },
}
</script>

<style scoped>
    .title{
        background-color:#eee;
        margin-top:10px;
        line-height:40px;
        height:40px;
        text-indent:10px;
    }
    .recommend{
        width:100%;
        height:94px;
        display: flex;
        overflow:hidden;
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
       background-color: #ff9300;
       line-height:20px;
       margin-top: 5px;
       border-radius: 5px;
       padding: 0 10px;
       color: #fff;
    }
</style>