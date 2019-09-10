<template>
     <div>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header :back='back+cityId'></detail-header>
        <detail-content 
        :address='address' 
        :list='list' 
        :introduce="introduce +cityId+'/search-detail/'+ parentId +'/introduce'"
        :date="date +cityId+'/search-detail/'+parentId+'/date'"
        :orderInformation="date +cityId+'/search-detail/'+parentId+'/search-order-information'"
        :MapAddress ="date+cityId+'/search-detail/' +parentId+'/search-map-address'"
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
            address:'',
            gallaryImgs:[],
            list:[],
            back:'/',
            introduce:'/',
            date:'/',
            parentId:'',
            cityId:'',
           }
       },
       methods:{
           getSwiperListDetailInfo:function(){
               axios.get('/api/search-detail')
               .then(this.getSwiperListDetailInfoSuccess,function(){
                   console.log('获取数据失败')
               })
           },
           getSwiperListDetailInfoSuccess:function(res){
                  res = res.data
                  const data = res[this.$route.params.id]
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.address = data.address
                  this.list = data.list
                  this.bannnerName = data.bannerName
                  this.parentId = this.$route.params.id,
                  this.cityId = this.$route.params.cityId
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