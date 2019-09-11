<template>
    <div class='wrapper' ref='wrapper'>
      <div class='content'>
        <home-header :cityId='cityId' :scenic="scenic"></home-header>
        <home-swiper :SwiperList='SwiperList'></home-swiper>
        <home-icons :IconsList='IconsList' :cityId='cityId'></home-icons>
        <home-recommend :recommandList='recommandList' :cityId='cityId'></home-recommend>
        <home-weekend :weekendList='weekendList' :cityId='cityId'></home-weekend>
      </div>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data:function(){
   return{
     SwiperList:[],
     IconsList:[],
     recommandList:[],
     weekendList:[],
     lastCity:'',
     cityId:'',
     scenic:{}
   } 
  },
  methods:{
     getHomeInfo:function(){
       axios.get('/api')
         .then(this.getHomeInfoSuccess,function(){
           console.log('获取数据失败')
         })
     },
     getHomeInfoSuccess:function(res){
          res=res.data
        if(!res.SwiperList[this.$store.state.city]){
          this.SwiperList=res.SwiperList['北京']
          this.IconsList=res.IconList['北京']
          this.recommandList=res.recommandList['北京']
          this.weekendList=res.weekendList['北京']
        }else{
          this.SwiperList=res.SwiperList[this.$store.state.city]
          this.IconsList=res.IconList[this.$store.state.city]
          this.recommandList=res.recommandList[this.$store.state.city]
          this.weekendList=res.weekendList[this.$store.state.city]
        }
          this.scenic = res.scenic
          this.cityId=this.$store.state.city
          console.log('成功')
      
        
     }
  },
  mounted:function(){
     this.lastCity = this.$store.state.city
    this.getHomeInfo()
     this.$nextTick(()=>{
                if (!this.scroll) {
                     this.scroll = new BScroll(this.$refs.wrapper, {
                            click: true,
                            
                    })
                
                } else {
                    this.scroll.refresh();
                  }

               
                 
               })
  },
  activated:function(){
    if(this.lastCity!==this.$store.state.city){
          this.lastCity = this.$store.state.city
        this.getHomeInfo()
    }
    this.$nextTick(()=>{
                if (!this.scroll) {
                     this.scroll = new BScroll(this.$refs.wrapper, {
                            click: true,
                            
                    })
                
                } else {
                    this.scroll.refresh();
                  }

               
                 
               })
  }
}
</script>

<style>
 .wrapper{
       overflow: hidden;
       position:absolute;
       top:0;
       left:0;
       right:0;
       bottom: 0;
   }
    /* *{
        margin:0;
        font-size:14px;
        padding:0;
        box-sizing:border-box;
    } */
</style>
