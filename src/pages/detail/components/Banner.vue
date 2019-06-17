<template>
   <div>
     <div class='banner' @click='handleBannerClick'>
        <img class='banner-img' src='http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg' />
        <div class='banner-info'>
            <div class='banner-title'>中国景区</div>
            <div class='banner-number'>
                <span class='iconfont banner-icon'>&#xe606;</span>
                 36
           </div>
        </div>
      </div>
     <common-gallary :imgs='imgs' v-show='showGallary' @change = 'handleChangeClick'></common-gallary>
   </div>
</template>

<script>
 import CommonGallary from 'common/gallary/Gallary'
   export default{
       name:'DetailBanner',
       components:{
        CommonGallary
       },
       data:function(){
           return {
               showGallary:false,
               imgs:['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg']
           }
       },
       methods:{
           handleBannerClick:function(){
                this.showGallary=true;
           },
           handleChangeClick:function(){
               this.showGallary=false;
           }
       }
   }
</script>

<style scoped>
  .banner{
      width:100%;
      height:0;
      overflow:hidden;
      padding-bottom:55%;
      position:relative;
  }
  .banner-img{
      width:100%;
     
  }
  .banner-info{
      position: absolute;;
      line-height:30px;
      left:0;
      right:0;
      bottom:0;
      top:160px;
      display: flex;
      color:#fff;

}
.banner-title{
        flex:1;
        line-height:30px;
        height:30px;
        padding: 0 10px;
        font-size:16px;

}
.banner-number{
   margin-top:7px;
   padding:0 20px;
   border-radius: 10px;
   background-color: black;   
   height:16px;
   line-height: 16px;
   font-size:12px;
}
.banner-icon{
    font-size:12px;
}
</style>