<template>
   <div>
     <div class='banner' @click='handleBannerClick'>
        <img class='banner-img' :src='bannerImg' />
        <div class='banner-info'>
            <div class='banner-title'>{{bannnerName}}</div>
            <div class='banner-number'>
                <span class='iconfont banner-icon'>&#xe606;</span>
                 {{this.imgs.length}}
           </div>
        </div>
      </div>
    <common-animation>
        <common-gallary :imgs='imgs' v-show='showGallary' @change = 'handleChangeClick'></common-gallary>
    </common-animation>
   </div>
</template>

<script>
 import CommonGallary from 'common/gallary/Gallary'
 import CommonAnimation from 'common/animation/Animation'
   export default{
       name:'DetailBanner',
       components:{
        CommonGallary,
        CommonAnimation
       },
       props:{
          bannerImg:String,
          imgs:Array,
          bannnerName:String

       },
       data:function(){
           return {
               showGallary:false,
               
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