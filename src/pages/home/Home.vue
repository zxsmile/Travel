<template>
    <div>
        <home-header></home-header>
        <home-swiper :SwiperList='SwiperList'></home-swiper>
        <home-icons :IconsList='IconsList'></home-icons>
        <home-recommend :recommandList='recommandList'></home-recommend>
        <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
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
     lastCity:''
   } 
  },
  methods:{
     getHomeInfo:function(){
       axios.get('/api/index.json?city='+this.$store.state.city)
         .then(this.getHomeInfoSuccess)
     },
     getHomeInfoSuccess:function(res){
        res=res.data
        if(res.ret&&res.data){
          const data = res.data
          this.SwiperList=data.SwiperList
          this.IconsList=data.IconsList
          this.recommandList=data.recommandList
          this.weekendList=data.weekendList
        }
     }
  },
  mounted:function(){
     this.lastCity = this.$store.state.city
     this.getHomeInfo()
  },
  activated:function(){
    if(this.lastCity!==this.$store.state.city){
          this.lastCity = this.$store.state.city
          this.getHomeInfo()
    }
  }
}
</script>

<style>
    /* *{
        margin:0;
        font-size:14px;
        padding:0;
        box-sizing:border-box;
    } */
</style>
