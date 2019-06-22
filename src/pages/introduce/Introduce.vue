<template>
     <div>
        <introduce-header></introduce-header>
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
               introduceList:[]
           }
       },
         methods:{
           getIntroduceInfo:function(){
               axios.get('/api/introduce.json?id=')
               .then(this.getIntroduceInfoSuccess)
           },
           getIntroduceInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data
                  this.introduceList = data.introduceList
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