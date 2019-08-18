<template >
   <div class='icons'>
      <swiper :options='swiperOption'>
       <swiper-slide v-for="(page,index) of pages" :key="index" >
          <router-link  
          tag='div' 
          class='icon' 
          v-for="item of page" 
          :to="cityId+'/swiper-list/' + (item.iconList_id-1)" 
          :key="item.parentId">
              <div class="icon-img">
                 <img :src='item.ImgUrl' class='icon-img-content'> 
               </div>
               <div class="icon-name">
                 <p class="icon-name-content">{{item.name}}</p>
               </div>
          </router-link>
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
                 
                  autoplay:false
              } ,
         
      }
  },

  props:{
      IconsList:Array,
      cityId:String
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
          margin-top: 10px;
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