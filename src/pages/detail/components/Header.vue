<template>
   <div>
      <div class="header-circle" v-show='showCircle'>
         <router-link tag='div' :to='back' class='iconfont header-back'>&#xe624;</router-link>
      </div>
      <div class='header-fixed' v-show='!showCircle' :style="opacityStyle">
         <div class='header-fixed-title'>
             <router-link :to='back'>
                 <div class='iconfont header-fixed-icon'>&#xe624;</div>
             </router-link>
             景点详情
         </div>
      </div>
      <div class="he" @click="handleOrderHidden"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  props:{
     back:String
  },
  data:function(){
      return {
          showCircle:true,
          opacityStyle:{
              opacity:0
          },
          
          }
  },
  methods:{
    hanleScroll:function(){
        let top = document.documentElement.scrollTop;
        if(top>60){
            let opacity = top/140;
            opacity = opacity === 1 ? 1:opacity;
            this.opacityStyle = {
                opacity:opacity
            }
            this.showCircle = false
        }else{
            this.showCircle = true
        }
    },
    handleOrderHidden:function(){
      const hiddenDiv = document.getElementsByClassName('he')[0]
      this.$root.Bus.$emit('orderHidden',hiddenDiv)
    }
  },
  activated:function(){
       window.addEventListener('scroll',this.hanleScroll)
       
  },
  deactivated:function(){
      window.removeEventListener('scroll',this.hanleScroll)
  },
  created(){
    this.$root.Bus.$on('displayDiv', function(){
        const hiddenDiv = document.getElementsByClassName('he')[0]
        hiddenDiv.style.display="block"
        
    })
     this.$root.Bus.$on('hiddenDiv', function(){
        const hiddenDiv = document.getElementsByClassName('he')[0]
        hiddenDiv.style.display="none"
    })
  },
}
</script>

<style scoped>
    .he{
        background-color:black;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display:flex;
        flex-direction: column;
        justify-content: center;
        z-index:100;
        opacity: 0.5;
        display:none;
    }
    .header-circle{
        position:absolute;
        height:40px;
        width:40px;
        left:10px;
        top:10px;
        border-radius: 20px;
        background-color: black;
        text-align: center;
    }
    .header-back{
        color: #fff;
        line-height: 40px;
        font-size: 20px;
       
    }
    .header-fixed{
      z-index:99;
      width:100%;
      height:43px;
      background-color: #DCDCDC;
      position:fixed;
      top:0;
      left:0;
      right:0;
    }
   .header-fixed-title{
    text-align:center;
    line-height:43px;
    color: #fff;
    font-size: 16px;
   }
    .header-fixed-icon{
      font-size:20px;
      float:left;
      line-height: 43px;
      color:#fff;
      margin-left:10px;
  }
</style>
