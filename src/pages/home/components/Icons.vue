<template >
   <div class='icons'>
      <swiper :options='swiperOption'>
       <swiper-slide v-for="(page,index) of pages" :key="index" >
         <div class='icon' v-for="item of page" :key="item.id">
              <div class="icon-img">
                 <img :src='item.ImgUrl' class='icon-img-content'> 
               </div>
               <div class="icon-name">
                 <p class="icon-name-content">{{item.name}}</p>
               </div>
         </div>
       </swiper-slide>
      </swiper>
     </div>
 
</template>

<script>
    export default {
  name: 'HomeIcons',
  data:function(){
      return{
         swiperOption: {
                  setWrapperSize:false,
                  autoplay:false
              } ,
         IconsList:[{
                  id:'001',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                  name:'景点门票'
              },{
                  id:'002',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
                  name:'滑雪季'
              },{
                  id:'003',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
                  name:'泡温泉'
              },{
                  id:'004',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
                  name:'动植物园'
              },{
                  id:'005',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
                  name:'一日游'
              },{
                  id:'006',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                  name:'温泉'
              },{
                  id:'007',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                  name:'温泉'
              },{
                  id:'008',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                  name:'温泉'
              },{
                  id:'009',
                  ImgUrl:'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
                  name:'温泉'
              }]
      }
  },
  computed:{
     pages:function(){
          const pages=[];
          this.IconsList.forEach((item,index)=>{
               const page=Math.floor(index/8);
               if(!pages[page]){
                    pages[page]=[]
               }
               pages[page].push(item)
          })
               
         return pages
     }  
  }
}
</script>

<style scoped>
     .icons >>> .swiper-container{
          width:100%;
          height:0;
          padding-bottom:50%;
          overflow: hidden;
     }

     .icon{
          width:25%;
          height:0;
          padding-bottom:25%;
          overflow: hidden;
   
          position:relative;
          float:left;
     }
     .icon-img{
          
          top:0;
          left:0;
          right:0;
          bottom:22px;
          position:absolute
     }
     .icon-img-content{
          margin:0 auto;
          display: block;
          height:100%;
          
     }
     .icon-name{
          position:absolute;
          left:0;
          right:0;
          bottom:0;
          top:71.75px
     }
      .icon-name-content{
       text-align: center;
       height:22px;
       line-height:22px;
       overflow:hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
      }
</style>