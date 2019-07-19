<template>
     <div>
        <detail-banner 
        :imgs='gallaryImgs' 
        :bannerImg='bannerImg' 
        :bannnerName='bannnerName'
        >
        </detail-banner>
        
        <detail-header 
        :back="back+'/' + parentId"
        >
        </detail-header>
        
        <detail-content 
        :list='list' 
        :parentId='parentId' 
        :introduce=" introduce + '/'+parentId+'/swiper-list-detail/'+ listId+'/introduce'" 
        :date="date + '/'+parentId+'/swiper-list-detail/'+ listId+'/date'"
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
            list:[],
            back:'/swiper-list',
            introduce:'/swiper-list',
            parentId:'',
            listId:'',
            date:'/swiper-list'
           
           }
       },
       methods:{
           getSwiperListDetailInfo:function(){
               axios.get('/api/swiper-list-detail.json?id='+ this.$route.params.listId)
               .then(this.getSwiperListDetailInfoSuccess)
           },
           getSwiperListDetailInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const datas = res.data[this.$route.params.parentId].detail
                  const data = datas[this.$route.params.listId]
                  this.bannerImg = data.bannerImg
                  this.gallaryImgs = data.gallaryImgs
                  this.list = data.list
                  this.bannnerName = data.bannnerName
                  this.parentId = this.$route.params.parentId
                  this.listId = this.$route.params.listId
              } 
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