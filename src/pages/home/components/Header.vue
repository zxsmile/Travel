<template>
    <div class='header'>
        <div class='header-left'>
            <div class='iconfont back-icon' @click='handleClickBack'>&#xe624;</div>
        </div>
        <!-- <div class='header-middle'> -->
            <i class='iconfont search' v-show = 'searchIcon'>&#xe632;</i>
            <input type='text' placeholder='输入城市/景点/游玩主题' class='header-middle' v-model="searchData" />
        <!-- </div> -->
        <router-link :to="'/'+this.$store.state.city+'/city'">
            <div class='header-right'>
                <div class='header-right-content'>
               {{this.$store.state.city}}
               </div>
               <span class='iconfont arrow-icon'>&#xe64a;</span>
            </div>
        </router-link>
        <div class="search-content" ref='content' v-show="searchData" >
            <ul>
                <li 
                v-for="item of list" 
                :key='item.parentId'
                @click='handleClick(item.scenicid)' 
                class="search-list border-bottom"
                >{{item.name}}</li>
                <li class="search-list border-bottom" v-show='hasNoList'>没有匹配的数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HomeHeader',
   mounted:function(){
        this.scroll = new BScroll(this.$refs.content)
       
    },
   data:function(){
        return {
            searchData:'',
            list:[],
            timer:null,
            searchIcon:true
        }
    },
     methods:{
        handleClick:function(id){
           
            this.$router.push({  
             path:'/'+this.$store.state.id+'/search-detail/'+ (id-1)
           })
           
        },
        handleClickBack:function(){
            this.$router.push({  
             path:'/'
           })
           
        }
    },
     props:{
        scenic:Object,
        cityId:String
    },
     computed:{
        hasNoList:function(){
            return !this.list.length
        }
    },
    watch:{
        searchData:function(){
            if(this.searchData){
                 this. searchIcon=false
            }
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.searchData){
                this. searchIcon=true
                this.list=[]
              return
            }
            this.timer = setTimeout(() => {
                const result=[]
                for(let i in this.scenic){
                     this.scenic[i].forEach(value => {
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
   
   .header{
       width:100%;
       height:43px;
       line-height:43px;
       background-color:#DCDCDC;
       display: flex;
       color:white;
   }
   .header-left{
       width:32px;
       float:left;
    } 
   .back-icon{
       text-align:center;
       font-size: 20px;
    }
    
   .header-middle{
      height:31px;
      line-height: 31px;
      padding-left:4px;
      background-color: white;
      flex:auto;
      border-radius: 5px;
      /* margin-top:12px;
      margin-left:10px; */
      margin:6px 0px 6px 5px;
      color:#ccc;
      padding-left: 22px;
      }
      input:-ms-input-placeholder{
            color: #ccc;
        }/* Internet Explorer 10+ */
        input::-webkit-input-placeholder{
            color: #ccc;
        }/* WebKit browsers */
        input::-moz-placeholder{
            color: #ccc;
        } /* Mozilla Firefox 19+ */
        input:-moz-placeholder{
            color: #ccc;
        }/* Mozilla Firefox 4 to 18 */
        .search{
            position:absolute;
            margin-left: 40px;
            color: #ccc;
            line-height: 43px;
        }
   .header-right{
       min-width:42px;
       padding:0 5px;
       float:right;
       text-align: center;
       color:#fff;
       display:flex;
       flex-wrap: nowrap;
      
    }

    .header-right-content{
        /* width:36px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;  */
        
       
    }
    .arrow-icon{
       font-size:12px;
       margin-left:2px;
    }
    .search-content{
    position:absolute;
    top:43px;
    left:0;
    right:0;
    bottom:0;
    /* overflow: hidden; */
    background-color: #ccc;
    z-index:100;
}
.search-list{
   line-height:32px;
   padding-left: 10px;
   color:#666;
   background-color: #fff;
   
}
.border-bottom{
        /* border-bottom:0.1px solid #ccc; */

    }

</style>
