<template>
       <div class='header'>
            <router-link :to='introduceBack' >
                <div class='iconfont back-icon'>&#xe624;</div>
            </router-link>
            <div class='header-title'>景点介绍</div>
        </div>
        
</template>

<script>


   export default{
       name:'IntroduceHeader',
      props:{
          introduceBack:String
      }
      
   }
</script>

<style scoped>
   .header{
      width:100%;
      height:43px;
      background-color: turquoise;
  }
  .header-title{
    text-align:center;
    line-height:43px;
    color: #fff;
    font-size: 16px;
  }
  .back-icon{
      font-size:20px;
      float:left;
      line-height: 43px;
      color:#fff;
      margin-left:10px;
  }
</style>