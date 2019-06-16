<template>
    <div class='header'>
        <div class='header-left'>
            <div class='iconfont back-icon'>&#xe624;</div>
        </div>
        <div class='header-middle'>
            <span class='iconfont'>&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to='/city'>
            <div class='header-right'>
                <div class='header-right-content'>
               {{this.$store.state.city}}
               </div>
               <span class='iconfont arrow-icon'>&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>

<style scoped>
   
   .header{
       width:100%;
       height:43px;
       line-height:43px;
       background-color:turquoise;
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

</style>
