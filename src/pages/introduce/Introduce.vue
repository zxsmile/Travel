<template>
     <div>
        <introduce-header :introduceBack = "introduceBack +'/'+ parentId +'/swiper-list-detail/'+listId"></introduce-header>
        <introduce-content :introduceList='introduceList'></introduce-content>
     </div>
</template>

<script>
import IntroduceHeader from './components/Header'
import IntroduceContent from './components/Content'
import  axios from 'axios'
   export default{
       name:'Introduce',
       components:{
           IntroduceHeader,
           IntroduceContent
       },
       data:function(){
           return {
               introduceList:[],
               parentId:'',
               listId:'',
               introduceBack:'/'+this.$route.params.cityId+'/swiper-list'
           }
       },
         methods:{
           getIntroduceInfo:function(){
               axios.get('/api/swiperlist-introduce')
               .then(this.getIntroduceInfoSuccess,function(){
                   console.log('数据请求失败')
               })
           },
           getIntroduceInfoSuccess:function(res){
                  let data= res.data
                if(!data[this.$store.state.city]){
                    this.introduceList =data['北京'][this.$route.params.parentId].introduceList[this.$route.params.listId].introduceContent
                }else{
                    this.introduceList =data[this.$store.state.city][this.$route.params.parentId].introduceList[this.$route.params.listId].introduceContent
                }
                  this.parentId = this.$route.params.parentId
                  this.listId = this.$route.params.listId
                  
           }
           
         },
       mounted:function(){
           this.getIntroduceInfo()
        },
        activated:function(){
            this.getIntroduceInfo()
        
        }
}
</script>

<style scoped>
  
</style>