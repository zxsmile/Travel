<template>
        <div class='city'>
            <city-header></city-header>
            <city-search></city-search>
            <city-list></city-list>
            <city-alphabet></city-alphabet>
        </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default{
    name:'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
  },
}
</script>

<style>
   /* *{
        margin:0;
        font-size:14px;
        padding:0;
        box-sizing:border-box;
    }
    .city{
        height:100%;
        width:100%;
    } */
</style>