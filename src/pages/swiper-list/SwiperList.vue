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
               cityId:'',
               num:0
           }
       },

       methods:{
           getSwiperListInfo:function(){
               axios.post('/api/swiper-list',{
                   num:this.num,
                   parseInt:this.$route.params.parentId
                })
               .then(this. getSwiperListInfoSuccess,function(){
                   console.log('获取数据失败')
               })
           },
           getSwiperListInfoSuccess:function(res){
                  res = res.data
                   let data=''
                  if(!res[this.$store.state.city]){
                     data = res['北京'][1]
                  }else{
                     data = res[this.$store.state.city][1]
                  }
                   this.title = data.title
                   this.parentId = this.$route.params.parentId
                   this.cityId=this.$route.params.cityId
              }
          

       },
       mounted:function(){
           //this.getSwiperListInfo()
       },
        activated:function(){
          this.title=''
          this.getSwiperListInfo()
       }
        
   }
</script>

<style scoped>
</style>