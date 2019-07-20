<template>
     <div>
        <detail-banner :imgs='gallaryImgs' :bannerImg='bannerImg' :bannnerName='bannnerName'></detail-banner>
        <detail-header :back='back'></detail-header>
        <detail-content 
        :list='list' 
        :introduce="introduce + parentId +'/introduce'"
        :date="date +parentId+'/date'"
        :orderInformation="date +parentId+'/recommand-order-information'"
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
            list:[],
            back:'/',
            introduce:'/detail/',
            parentId:'',
            date:'/detail/'
           }
       },
      
       methods:{
           getDetailInfo:function(){
               axios.get('/api/detail.json?id='+this.$route.params.parentId)
               .then(this.getDetailInfoSuccess)
           },
           getDetailInfoSuccess:function(res){
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
           this.getDetailInfo()

        },
        activated:function(){
            this.getDetailInfo()
        
        }
   }
</script>

<style scoped>
  
</style>