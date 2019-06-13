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
              loop:true,
              autoplay : 3000,
              autoplayDisableOnInteraction : false,
              paginationClickable: true
         } ,
     
      }
  },
  props:{
           SwiperList:Array
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
