<template>
     <div>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header :back="back+ cityId"></detail-header>
        <detail-content 
        :address='address'
        :list='list' 
        :introduce="introduce +cityId+'/detail/' +parentId +'/introduce'"
        :date="date +cityId+'/detail/' +parentId+'/date'"
        :orderInformation="date+cityId+'/detail/'+parentId+'/recommand-order-information'"
        :MapAddress ="date +cityId+'/detail/'+parentId+'/recommand-map-address'"
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
               axios.get('/api/recommend-detail')
               .then(this.getDetailInfoSuccess,function(){
                   console.log('获取数据失败')
               })
           },
           getDetailInfoSuccess:function(res){
                  res = res.data
                  let data =''
                  if(!res[this.$store.state.city]){
                      data =res['北京'][this.$route.params.parentId]
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
                  console.log('成功')
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