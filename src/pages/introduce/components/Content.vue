<template>
     <div>
        <div class="content" v-for="(item,index) in introduceList" :key='index'>
            <div class='content-title'>{{item.title}}</div>
            <div class='content-detail' v-for="(content,index) in item.content" :key="index">
                <p>{{content.title}}</p>
            </div>
        </div>
     </div>
</template>

<script>


   export default{
       name:'IntroduceContent',
       props:{
           introduceList:Array
       }
      
   }
</script>

<style scoped>
   .content{
     display:flex;
     flex-direction: column;
     width:100%;
   }
   .content-title{
       font-size: 20px;
       font-weight: 800;
       line-height: 40px;
       padding: 0 5px;
       margin-top: 5px;
   }
   .content-detail{
       line-height: 20px;
       padding:0 10px 10px 10px;
       color:darkgrey;
   }
</style>