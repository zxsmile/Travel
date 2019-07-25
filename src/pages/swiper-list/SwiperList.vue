<template>
     <div>
       <swiper-header :title='title' :cityId='cityId'></swiper-header>
       <list :recommandList='recommandList' :parentId = "parentId"></list>
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
               recommandList:[],
               title:'',
               parentId:'',
               cityId:''
           }
       },
       methods:{
           getSwiperListInfo:function(){
               axios.get('/api/index.json?city='+this.$store.state.city)
               .then(this. getSwiperListInfoSuccess)
           },
           getSwiperListInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data[this.$route.params.cityId].swiperList[this.$route.params.parentId]
                  this.recommandList = data.recommandList
                  this.title = data.title
                  this.parentId = this.$route.params.parentId
                  this.cityId=this.$route.params.cityId
              }
           }

       },
       mounted:function(){
           this.getSwiperListInfo()
       },
        activated:function(){
            this.getSwiperListInfo()
       }
        
   }
</script>

<style scoped>
</style>