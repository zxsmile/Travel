<template>
        <div class='search'>
            <input type='text' placeholder='输入城市名或拼音' class="search-input" />
        </div>
</template>

<script>
export default{
    name:'CitySearch'
}
</script>

<style scoped>
  .search{
      height:43px;
      background-color: turquoise; 
      padding:0 10px;
      overflow: hidden;
  }
  .search-input{
      width:100%;
      height:33px;
      line-height:33px;
      text-align: center;
      border-radius: 5px;
      padding: 0 5px;
}

  
</style>