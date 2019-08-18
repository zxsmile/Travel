<template>
     <div>
        <introduce-header :introduceBack = "introduceBack + parentId "></introduce-header>
        <introduce-content :introduceList='introduceList'></introduce-content>
     </div>
</template>

<script>
import IntroduceHeader from '../introduce/components/Header'
import IntroduceContent from '../introduce/components/Content'
import  axios from 'axios'
   export default{
       name:'WeekendIntroduce',
       components:{
           IntroduceHeader,
           IntroduceContent
       },
       data:function(){
           return {
               introduceList:[],
               parentId:'',
               listId:'',
               introduceBack:'/'+this.$route.params.cityId+'/weekend-detail/',
               
           }
       },
         methods:{
           getIntroduceInfo:function(){
               axios.get('/api/weekend-introduce')
               .then(this.getIntroduceInfoSuccess,function(){
                   console.log('数据请求失败')
               })
           },
           getIntroduceInfoSuccess:function(res){
                  res = res.data
                  let data=''
                  if(!res[this.$store.state.city]){
                      data =  res[this.$store.state.city][this.$route.params.parentId]
                  }else{
                      data =  res['北京'][this.$route.params.parentId]
                  }
                  this.introduceList = data.introduceList
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