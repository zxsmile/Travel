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
               introduceBack:'/swiper-list'
           }
       },
         methods:{
           getIntroduceInfo:function(){
               axios.get('/api/introduce.json')
               .then(this.getIntroduceInfoSuccess)
           },
           getIntroduceInfoSuccess:function(res){
               res = res.data
              if(res.ret&&res.data){
                  const data = res.data
                  this.introduceList = data[this.$route.params.parentId].introduceList[this.$route.params.listId].introduceContent
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