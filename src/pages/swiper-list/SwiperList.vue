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
               axios.get('/api/swiper-list')
               .then(this. getSwiperListInfoSuccess,function(){
                   console.log('获取数据失败')
               })
           },
           getSwiperListInfoSuccess:function(res){
                  res = res.data
                  let data=''
                  if(!res[this.$store.state.city]){
                    data = res['北京'][this.$route.params.parentId]
                  }else{
                    data = res[this.$store.state.city][this.$route.params.parentId]
                  }
                  this.recommandList = data.recommandList
                  this.title = data.title
                  this.parentId = this.$route.params.parentId
                  this.cityId=this.$route.params.cityId
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