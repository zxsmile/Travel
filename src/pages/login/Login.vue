<template>
    <div class="welcome">
        <div class='submit'>
            <div class='submit-title'>登录</div>
            <div class='submit-input-box'>
              <div class='submit-input'>
                 <input type="text" name="user" value='' class='input' />
                 <input type="password" name="password" value='' class='input' />
                 <input type="button"  value='登录' class='input-botton' />
              </div>
            </div>
            <div class="submit-inform">注册</div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'Login',
 
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
      display: flex;
      align-items:center;
      justify-content:center;
      position:absolute;
      background-color: turquoise;
    }
    .submit{
      width:80%;
      height:0;
      padding-bottom:80%;
      overflow:hidden;
      background-color: white;
      display:flex;
      flex-direction: column;
      position: relative;
      border: 1px solid;
      box-shadow: 5px 5px 10px #ccc;
    }
    .submit-title{
      margin: 0 auto;
      font-size: 20px;
      font-weight: 800;
      height:20px;
      line-height: 20px;
      padding:10px;
      margin-top: 10px;
    }
    
    .submit-input{
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      padding: 20px 0;
      margin-top: 20px;
    }
    .input{
      border:1px solid black; 
      width:80%;
      margin:15px 0;
     }
     .input-botton{
       margin-top: 30px;
       padding:5px 20px;
       border-radius: 10px;
       background-color: turquoise;
       /* color: white; */
     }
     .submit-inform{
       line-height:14px;
       width:50px;
       right:0;
       bottom:20px;
        position:absolute;
     }
</style>
