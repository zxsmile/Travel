<template>
     <div>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header :back='back'></detail-header>
        <detail-content 
        :list='list' 
        :introduce="introduce + parentId +'/introduce'"
        :date="date +parentId+'/date'"
        >
        </detail-content>
    </div>
</template>

<script>
import DetailBanner from '../detail/components/Banner'
import DetailHeader from '../detail/components/Header'
import DetailList from '../detail/components/List'
import DetailContent from '../detail/components/Content'
import DetailOrder from '../detail/components/Order'
import axios from 'axios'
   export default{
       name:'WeekendDetail',
       components:{
           DetailBanner,
           DetailHeader,
           DetailList,
           DetailContent,
           DetailOrder
       },
       data:function(){
           return {
            bannnerName:'',
            bannerImg:'',
            gallaryImgs:[],
            list:[],
            back:'/',
            introduce:'/weekend-detail/',
             parentId:'',
             date:'/weekend-detail/'
           }
       },
       methods:{
           getSwiperListDetailInfo:function(){
               axios.get('/api/weekend-detail.json?id='+ this.$route.params.parentId)
               .then(this.getSwiperListDetailInfoSuccess)
           },
           getSwiperListDetailInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data[this.$route.params.parentId]
                 
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.list = data.list
                  this.bannnerName = data.bannnerName
                  this.parentId = this.$route.params.parentId
              } 
           }
           
       },
       mounted:function(){
           this. getSwiperListDetailInfo()
           
        },
        activated:function(){
            this. getSwiperListDetailInfo()
        
        }
   }
</script>

<style scoped>
  
</style>