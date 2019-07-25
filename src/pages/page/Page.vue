<template>
    <div class="welcome">
      <div class='container'>
        <img class="user-avatar" src="http://img11.weikeimg.com/data/uploads/2015/01/06/8893656754ab5c58cdaf5.png" />
        <div class="user-name">Hello，smile*</div>
        <div class="moto-container" >
          <div class="moto" @click='handleClickButton'>开启去哪儿之旅</div>  
        </div>
      </div>
    </div>
        
    
</template>

<script>


export default {
  name: 'Page',
 
  data:function(){
   return{
     
     
   } 
  },
  methods:{
    handleClickButton:function(){
         this.$router.push('/'+ this.$store.state.id)
    }
  },
  mounted:function(){
    
  },
  activated:function(){
   
  }
}
</script>

<style scoped>
   .welcome{
      width:100%;
      height:100%;
       background-color: turquoise;
    }
   .container{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
   .user-avatar {
    width: 80px;
    height: 80px;
    margin-top: 160px;
    border-radius: 50%;
  }

.user-name {
  margin-top: 50px;
  font-size: 16px;
  font-weight: bold;
}

.moto {
  font-size: 11px;
  font-weight: bold;
  line-height: 40px;
  color: #405f80;
}

.moto-container {
  margin-top: 100px;
  border: 1px solid#405f80;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  text-align: center;
}


</style>
