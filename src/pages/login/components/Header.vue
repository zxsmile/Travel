<template>
   <div class='header'>
            <div>
                <div class='iconfont back-icon' @click="backLogin">&#xe624;</div>
            </div>
            <div class='header-title'>用户登录</div>
    </div>

</template>

<script>
export default {
  name: 'LoginHeader',
  methods:{
    backLogin() {
      this.$router.go(-1)
    }
  }
  
}
</script>

<style scoped>
    
    .header{
      width:100%;
      height:43px;
      /* background-color: turquoise; */
  }
  .header-title{
    text-align:center;
    line-height:43px;
    color: #fff;
    font-size: 18px;
  }
  .back-icon{
      font-size:20px;
      float:left;
      line-height: 43px;
      color:#fff;
      margin-left:10px;
  }
</style>
