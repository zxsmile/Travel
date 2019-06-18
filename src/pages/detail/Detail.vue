<template>
     <div class='ee'>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header></detail-header>
        <detail-list :list='list'></detail-list>
     </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
   export default{
       name:'Detail',
       components:{
           DetailBanner,
           DetailHeader,
           DetailList
       },
       data:function(){
           return {
            bannnerName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[],
           }
       },
       methods:{
           getDetailInfo:function(){
               axios.get('/api/detail.json?id='+this.$route.params)
               .then(this.getDetailInfoSuccess)
           },
           getDetailInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.list = data.list
                  this.bannnerName = data.bannnerName
              }
           }
           
       },
       mounted:function(){
           this.getDetailInfo()
        }
   }
</script>

<style scoped>
  .ee{
      height:1800px;
  }
</style>