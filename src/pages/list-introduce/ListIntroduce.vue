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
       name:'ListIntroduce',
       components:{
           IntroduceHeader,
           IntroduceContent
       },
       data:function(){
           return {
               introduceList:[],
               parentId:'',
               listId:'',
               introduceBack:'/'+this.$route.params.cityId+'/detail/',
               
           }
       },
         methods:{
           getIntroduceInfo:function(){
               axios.get('/api/index.json?city='+this.$store.state.city)
               .then(this.getIntroduceInfoSuccess)
           },
           getIntroduceInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data[this.$route.params.cityId].recommandIntroduce[this.$route.params.parentId]
                 this.introduceList = data.introduceList
                  this.parentId = this.$route.params.parentId
                  this.listId = this.$route.params.listId
                  
           }
           
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