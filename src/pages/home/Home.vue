<template>
    <div>
        <home-header :cities="cities" :cityId='cityId'></home-header>
        <home-swiper :SwiperList='SwiperList'></home-swiper>
        <home-icons :IconsList='IconsList' :cityId='cityId'></home-icons>
        <home-recommend :recommandList='recommandList' :cityId='cityId'></home-recommend>
        <home-weekend :weekendList='weekendList' :cityId='cityId'></home-weekend>
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
     lastCity:'',
     cities:{},
     cityId:'',
     
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
          const data = res.data[this.$route.params.cityId]
          this.SwiperList=data.SwiperList
          this.IconsList=data.IconsList
          this.recommandList=data.recommandList
          this.weekendList=data.weekendList
          this.cities = data.cities
          this.cityId = this.$route.params.cityId
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
