<template>
    <div class='list' ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title">当前城市</div>
                <div class='city-list'>
                    <div class="list-wrapper">
                        <div class="list-content">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class='city-list'>
                    <div class="list-wrapper" v-for='item of hotCities' :key='item.id' >
                        <div class="list-content" @click='handleClick(item.name)'>{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities" :key='key' :ref='key'>
                <div class="title">{{key}}</div>
                <div class="city-item border-bottom" v-for='innerItem of item' :key='innerItem.id'>
                    <div class="item " @click='handleClick(innerItem.name)'>{{innerItem.name}}</div>
                </div>
                
            </div>
            
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
    name:'CityList',
    methods:{
        handleClick:function(city){
           this.$store.dispatch('changeCity',city)
            this.$router.push('./')
        }
    },
    mounted:function(){
        this.scroll = new BScroll(this.$refs.wrapper)
       
    },
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    watch:{
        letter:function(){
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
    }
    }
    
}
</script>

<style scoped>
   .list{
       overflow: hidden;
       position:absolute;
       top:86px;
       left:0;
       right:0;
       bottom: 0;
       /* height:100%;
       width:100%; */
     
   }
   /* .content{
       height:581px;
       width:100%;
   } */
   .title{
       width:100%;
       height:22px;
       line-height: 22px;
       background-color: #eee;
       text-indent:10px;
   }
   .city-list{
       overflow: hidden;
       padding:5px 20px 5px 5px;
    }
    .list-wrapper{
        min-width:33.3%;
        float:left;
        }
    .list-content{
        text-align: center;
        padding: 5px;
        border: 1px solid #ccc;
        margin:5px;
        border-radius: 3px;
    }
    .city-item{
        width:100%;
        padding-left:10px;
        line-height: 40px;
        
    }
    .border-bottom{
        border-bottom:1px solid #ccc;

    }
</style>