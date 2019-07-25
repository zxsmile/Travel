<template>
     <div>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header :back="back+ cityId"></detail-header>
        <detail-content 
        :address='address'
        :list='list' 
        :introduce="introduce +cityId+'/detail/' +parentId +'/introduce'"
        :date="date +cityId+'/detail/' +parentId+'/date'"
        :orderInformation="date +parentId+'/recommand-order-information'"
        :MapAddress ="date +parentId+'/recommand-map-address'"
        >
        </detail-content>
        
     </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailContent from './components/Content'
import DetailOrder from './components/Order'
import axios from 'axios'
   export default{
       name:'Detail',
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
            cityId:'',
            date:'/',
            
           }
       },
      
       methods:{
           getDetailInfo:function(){
               axios.get('/api/index.json?city='+this.$store.state.city)
               .then(this.getDetailInfoSuccess)
           },
           getDetailInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data[this.$route.params.cityId].detail[this.$route.params.parentId]
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.address = data.address
                  this.list = data.list
                  this.bannnerName = data.bannnerName
                  this.parentId = this.$route.params.parentId
                    this.cityId = this.$route.params.cityId
              }
           }
           
       },
       mounted:function(){
           this.getDetailInfo()

        },
        activated:function(){
            this.getDetailInfo()
        
        }
   }
</script>

<style scoped>
  
</style>