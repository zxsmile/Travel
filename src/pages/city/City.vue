<template>
        <div>
            <city-header></city-header>
            <city-search></city-search>
        </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default{
    name:'City',
    components: {
      CityHeader,
      CitySearch
  },
}
</script>

<style>
   *{
        margin:0;
        font-size:14px;
        padding:0;
        box-sizing:border-box;
    }
</style>