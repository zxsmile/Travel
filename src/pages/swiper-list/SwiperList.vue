<template>
     <div>
       <swiper-header :title='title'></swiper-header>
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
               parentId:''
           }
       },
       methods:{
           getSwiperListInfo:function(){
               axios.get('/api/swiper-list.json?id='+ this.$route.params.parentId)
               .then(this. getSwiperListInfoSuccess)
           },
           getSwiperListInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data[this.$route.params.parentId]
                  this.recommandList = data.recommandList
                  this.title = data.title
                  this.parentId = this.$route.params.parentId
                  
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