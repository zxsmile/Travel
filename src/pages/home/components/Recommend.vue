<template>
   <div>
       <div class="title">热销推荐</div>
       <div class="recommend" v-for='item of  recommandList' :key='item.id'>
           <img class='recommend-img' :src="item. recommandImgSrc" />
           <div class='recommend-content'>
               <p class="recommend-title">{{item.recommandTitle}}</p>
               <p class="recommend-describe">{{item.recommendDescribe}}</p>
               <button class="recommend-button">查看详情</button>
           </div>
        </div>
   </div>
</template>

<script>
export default{
   name:'HomeRecommend',
   data:function(){
       return {
           recommandList:[{
               id:'001',
               recommandImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
               recommandTitle:'大唐芙蓉园',
               recommendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'002',
               recommandImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
               recommandTitle:'大唐芙蓉园',
               recommendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'003',
               recommandImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
               recommandTitle:'大唐芙蓉园',
               recommendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'004',
               recommandImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
               recommandTitle:'大唐芙蓉园',
               recommendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'005',
               recommandImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
               recommandTitle:'大唐芙蓉园',
               recommendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'006',
               recommandImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
               recommandTitle:'大唐芙蓉园',
               recommendDescribe:'进入中国盛唐文化之旅'
           }]
    }
   }
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