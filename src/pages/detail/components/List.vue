<template>
   <div>
      <div v-for="(item,index) of list" :key='index' class="list">
          <div class="list-title border-bottom">
              <span class="list-title-icon"></span>
              {{item.title}}
          </div>
          <detail-list :list='item.children' class='list-children'></detail-list>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props:{
      list:Array
  }
 
}
</script>

<style scoped>
   .list-title{
       line-height:40px;
       padding:0 10px;
       font-size: 16px;  
   }
    
   .border-bottom{
       border-bottom:1px solid #ccc;

    }
    .list-title-icon{
      width:18px;
      height:18px;
      display: inline-block;
      position: relative;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22.5px no-repeat;
      left:3px;
      top:3px;
      margin-right: 5px;
      background-size: 20px 150px;
    }
    .list-children{
        padding:0 12px;
    }
  
</style>
