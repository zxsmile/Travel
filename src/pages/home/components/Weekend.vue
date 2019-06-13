<template>
   <div>
       <div class="title">周末去哪儿</div>
       <div class=" weekend" v-for='item of weekendList' :key='item.id'>
           <div class=' weekend-img'>
               <img  class="img" :src="item.  weekendImgSrc" />
           </div>
           <div class=' weekend-content'>
               <p class=" weekend-title">{{item. weekendTitle}}</p>
               <p class=" weekend-describe">{{item. weekendDescribe}}</p>
           </div>
        </div>
   </div>
</template>

<script>
export default{
   name:'HomeWeekend',
   data:function(){
       return {
           weekendList:[{
               id:'001',
                weekendImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
                weekendTitle:'大唐芙蓉园',
                weekendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'002',
                weekendImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
                weekendTitle:'大唐芙蓉园',
                weekendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'003',
               weekendImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
                weekendTitle:'大唐芙蓉园',
                weekendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'004',
                weekendImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
                weekendTitle:'大唐芙蓉园',
                weekendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'005',
                weekendImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
                weekendTitle:'大唐芙蓉园',
                weekendDescribe:'进入中国盛唐文化之旅'
           },{
               id:'006',
               weekendImgSrc:'http://img1.qunarzz.com/sight/p0/1508/db/dbd0bef45fbc36b3.img.jpg_1190x550_e996629c.jpg',
               weekendTitle:'大唐芙蓉园',
               weekendDescribe:'进入中国盛唐文化之旅'
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
    
    .weekend-img{
        width:100%;
        height:0;
        overflow: hidden;
        padding-bottom:33.9%;
      
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