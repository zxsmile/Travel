<template>
     <div class='ee'>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
     </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
   export default{
       name:'Detail',
       components:{
           DetailBanner,
           DetailHeader
       }
   }
</script>

<style scoped>
  .ee{
      height:800px;
  }
</style>