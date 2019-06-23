<template>
     <div>
       <swiper-header></swiper-header>
       <list :recommandList='recommandList'></list>
     </div>
</template>

<script>
import SwiperHeader from './components/Header'
import List from './components/List'
import axios from 'axios'
   export default{
       name:'SwiperList',
       components:{
           List,
           SwiperHeader
       },
       data:function(){
           return {
               recommandList:[]
           }
       },
       methods:{
           getSwiperListInfo:function(){
               axios.get('/api/swiper-list.json?id='+this.$route.params.id)
               .then(this. getSwiperListInfoSuccess)
           },
           getSwiperListInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data
                  this.recommandList = data.recommandList

              }
           }

       },
       mounted:function(){
           this.getSwiperListInfo()
       }
        
   }
</script>

<style scoped>
</style>