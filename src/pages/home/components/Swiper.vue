<template>
   <div class="swiper">
    <swiper :options="swiperOption" >
       <!-- slides -->
        <swiper-slide v-for="item of SwiperList" :key="item.id">
            <img class='swiper-img' :src="item.ImgUrl">
        </swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination" slot='pagination'></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data:function(){
      return{
         swiperOption: {
              pagination:'.swiper-pagination',
              loop:true
         } ,
         SwiperList:[{
                  id:'001',
                  ImgUrl:'https://img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg'
              },{
                  id:'002',
                  ImgUrl:'https://h-des-activity-fecp.qunarzz.com/h_des_activity_fe_h_des_activity_fe/973dc1ae0da73a58410186df08ff25cb.jpg'
              }]
      }
  }
}
</script>

<style scoped>
     .swiper >>> .swiper-pagination-bullet-active {
         background-color: #fff;
     }
    .swiper{
        width:100%;
        height:0;
        padding-bottom:31.25%;
        overflow:hidden;
    }
    .swiper-img{
        width:100%;
    }
    

</style>
