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
       name:'SearchIntroduce',
       components:{
           IntroduceHeader,
           IntroduceContent
       },
       data:function(){
           return {
               introduceList:[],
               parentId:'',
               listId:'',
               introduceBack:'/'+this.$route.params.cityId+'/search-detail/',
               
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
                  const data = res.data[this.$route.params.cityId].searchIntroduce[this.$route.params.id]
                  this.introduceList = data.introduceList
                  this.parentId = this.$route.params.id
                  this.listId = this.$route.params.id
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