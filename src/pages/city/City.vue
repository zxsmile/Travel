<template>
        <div class='city'>
            <city-header :id='id'></city-header>
            <city-search :cities='cities' :id='id'></city-search>
            <city-list :cities='cities' :hotCities="hotCities" :letter="letter" :id='id'></city-list>
            <city-alphabet :cities='cities' @change='handleClickChange'></city-alphabet>
        </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default{
    name:'City',
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
  },
  data:function(){
        return{
            cities:{},
            hotCities:[],
            letter:'',
            id:''
        }
  },
  methods:{
     getCityInfo:function(){
         axios.get('/api/city.json')
           .then(this.getCityInfoSuccess)
     },
     getCityInfoSuccess:function(res){
         res=res.data;
         if(res.ret&&res.data){
            let data = res.data;
             this.cities=data.cities
             this.hotCities = data.hotCities
             this.id = this.$route.params.id
             
         }
     },
     handleClickChange:function(res){
           this.letter=res;
     }
  },
  mounted:function(){
      this.getCityInfo()
  },
  activated:function(){
    this.getCityInfo()
        
  }
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