<template>
    <div>
        <div class='search'>
            <input v-model="searchData" type='text' placeholder='输入城市名或拼音' class="search-input"  />
        </div>
        <div class="search-content" ref='content' v-show="searchData">
            <ul>
                <li v-for="(item,index) of list" :key='index' class="search-list border-bottom">{{item.name}}</li>
                <li class="search-list border-bottom" v-show='hasNoList'>没有匹配的数据</li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
    name:'CitySearch',
     mounted:function(){
        this.scroll = new BScroll(this.$refs.content)
       
    },
    data:function(){
        return {
            searchData:'',
            list:[],
            timer:null
        }
    },
    props:{
        cities:Object
    },
    computed:{
        hasNoList:function(){
            return !this.list.length
        }
    },
    watch:{
        searchData:function(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.searchData){
                this.list=[]
              return
            }
            this.timer = setTimeout(() => {
                const result=[]
                for(let i in this.cities){
                     this.cities[i].forEach(value => {
                     if(value.name.indexOf(this.searchData) > -1 || value.spell.indexOf(this.searchData)>-1){
                         result.push(value) 
                       
                    }
                  }) 
               }  
               this.list=result;
            },100)
        }
    }
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
      border-radius: 6px;
      padding: 0 5px;
      color:#666;
      box-sizing: border-box;
     
}
.search-content{
    position:absolute;
    top:86px;
    left:0;
    right:0;
    bottom:0;
    overflow: hidden;
    background-color: #ccc;
    z-index:1;
}
.search-list{
   line-height:32px;
   padding-left: 10px;
   color:#666;
   background-color: #fff;
}
.border-bottom{
        /* border-bottom:0.2px solid #ccc; */

    }
  
</style>