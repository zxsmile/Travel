<template>
     <div>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header :back='back'></detail-header>
        <detail-content 
        :list='list' 
        :introduce="introduce + parentId +'/introduce'"
        :date="date +parentId+'/date'"
        :orderInformation="date +parentId+'/search-order-information'"
        :MapAddress ="date +parentId+'/search-map-address'"
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
       name:'SearchDetail',
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
            introduce:'/search-detail/',
            date:'/search-detail/',
            parentId:''
           }
       },
       methods:{
           getSwiperListDetailInfo:function(){
               axios.get('/api/search-detail.json?id='+ this.$route.params.id)
               .then(this.getSwiperListDetailInfoSuccess)
           },
           getSwiperListDetailInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data[this.$route.params.id]
                 
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.list = data.list
                  this.bannnerName = data.bannnerName
                  this.parentId = this.$route.params.id
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