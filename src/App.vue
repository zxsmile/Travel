<template>
  <div id="app">
    <keep-alive exclude='Detail'>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    margin:0;
    padding:0;
  }
</style>
