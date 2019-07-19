<template>
    <div class="container" @click="handleGallaryClick">
        <div class='wrapper'>
             <swiper :options="swiperOption" >
             <!-- slides -->
             <swiper-slide v-for='(item,index) in imgs' :key='index'>
                <img class="img" :src='item'>
             </swiper-slide>
       
        
            <!-- Optional controls -->
            <div class="swiper-pagination" slot='pagination'></div>
               </swiper>
        </div>
    </div> 
</template>

<script>

   export default{
       name:'CommonGallary',
       data(){
           return {
               swiperOption:{
                   pagination:'.swiper-pagination',
                   paginationType:'fraction',
                   observeParents:true,
                   observer:true
               }
           }
       },
       props:{
           imgs:{
               type:Array,
               default:()=> [],
           },
       },
       methods:{
           handleGallaryClick:function(){
               this.$emit('change')
           }
       }

   }
</script>

<style scoped>
  .container >>> .swiper-container{
      overflow: inherit
  }
    .container{
        background-color: black;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display:flex;
        flex-direction: column;
        justify-content: center;
        z-index:100;
    }
    .wrapper{
         width:100%;
         height:0;
         padding-bottom:100%;
         /* overflow:hidden; */
         
    }
    .img{
        width:100%;
    }
    .swiper-pagination{
        color:#fff;
        bottom:-50px;
    }
</style>