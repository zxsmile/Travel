<template>
     <div>
        <detail-banner 
        :imgs='gallaryImgs' 
        :bannerImg='bannerImg' 
        :bannnerName='bannnerName'
        >
        </detail-banner>
        
        <detail-header 
        :back="back+ cityId+'/swiper-list/'+ parentId"
        >
        </detail-header>
        
        <detail-content 
        :list='list' 
        :address='address'
        :parentId='parentId' 
        :introduce=" introduce +  cityId+'/swiper-list/'+parentId+'/swiper-list-detail/'+ listId+'/introduce'" 
        :date="date +  cityId+'/swiper-list/'+parentId+'/swiper-list-detail/'+ listId+'/date'"
        :orderInformation="date +  cityId+'/swiper-list/'+parentId+'/swiper-list-detail/'+ listId+'/order-information'"
        :MapAddress="date +  cityId+'/swiper-list/'+parentId+'/swiper-list-detail/'+ listId+'/swiper-list-map-address'"
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
       name:'SwiperListDetail',
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
            listId:'',
            cityId:'',
            date: '/',
           
           }
       },
       methods:{
           getSwiperListDetailInfo:function(){
               axios.get('/api/swiper-list-detail')
               .then(this.getSwiperListDetailInfoSuccess,function(){
                   console.log('失败')
               })
           },
           getSwiperListDetailInfoSuccess:function(res){
                  res = res.data
                  let datas=''
                  if(!res[this.$store.state.city]){
                      datas = res['北京'][this.$route.params.parentId].detail
                  }else{
                      datas = res[this.$store.state.city][this.$route.params.parentId].detail
                  }
                  const data = datas[this.$route.params.listId]
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.address = data.address
                  this.list = data.list
                  this.bannnerName = data.bannerName
                  this.parentId = this.$route.params.parentId
                  this.listId = this.$route.params.listId
                  this.cityId = this.$route.params.cityId
                  console.log('成功')
                 
              } 
        
           
       },
       mounted:function(){
           this. getSwiperListDetailInfo()
           
        },
        activated:function(){
            this. getSwiperListDetailInfo()
            // const parentId = this.$route.params.parentId
            //  this.$store.dispatch('changeParentId',parentId)
        
        }
   }
</script>

<style scoped>
  
</style>