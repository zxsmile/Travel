<template>
     <div>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header :back='back+cityId'></detail-header>
        <detail-content
        :address='address' 
        :list='list' 
        :introduce="introduce +cityId+'/weekend-detail/'+ parentId +'/introduce'"
        :date="date +cityId+'/weekend-detail/'+parentId+'/date'"
        :orderInformation="date +cityId+'/weekend-detail/'+parentId+'/weekend-order-information'"
        :MapAddress ="date +cityId+'/weekend-detail/'+parentId+'/weekend-map-address'"
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
            address:'',
            list:[],
            back:'/',
            introduce:'/',
             parentId:'',
             date:'/',
            cityId:'',
           }
       },
       methods:{
           getSwiperListDetailInfo:function(){
               axios.get('/api/weekend-detail')
               .then(this.getSwiperListDetailInfoSuccess,function(){

                   console.log('获取数据失败')
               })
           },
           getSwiperListDetailInfoSuccess:function(res){
                  res = res.data
                  let data = ''
                  if(!res[this.$store.state.city]){
                      data = res['北京'][this.$route.params.parentId]
                  }else{
                      data = res[this.$store.state.city][this.$route.params.parentId]
                  }
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.address = data.address
                  this.list = data.list
                  this.bannnerName = data.bannerName
                  this.parentId = this.$route.params.parentId
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