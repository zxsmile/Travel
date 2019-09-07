<template>
    <div class="container">
        <div class='showImg'>
            <div class='canvasBox'>
               <canvas class='canvas' id='canvas'></canvas>
           </div>
           <div class='wrapper'  id='wrapper' >
              <img :src='img' class='img' id='img' @changeImg='changeImg' @touchstart='touchstart' @touchmove='touchmove' @touchend='touchend'/>
              <div class='imgDiv' id="imgDiv" v-show='imgChoose'></div>
              <canvas  id="imgChoose" class='imgChoose'  v-show='imgChoose'></canvas>
          </div>
            <div class='button'>
               <button class='rightButton' @click='saveImg'>确定</button>
               <button class='cancelButton' @click='cancelImg'>取消</button>
            </div>
        </div>
    </div> 
</template>

<script>

   export default{
       name:'RegistImg',
       data:function(){
           return{
              imgChoose:false,
              canvasImg:false
           }
       },
      props:{
        img:String,
        showGallary:Boolean
      },
      methods:{
          changeImg(imgSrc) {
               var image = new Image();
               image.src=imgSrc
               image.onload=function(){
                    let imgWidth = this.width
                    let imgHeight = this.height
                    let width = this.width
                    let height = this.height
                    if(imgWidth>imgHeight&&imgHeight<=350){
                        let scale = imgHeight/imgWidth
                        width= 350
                        height=scale*imgWidth
                   }else if(imgWidth<imgHeight&&imgWidth<=350){
                        let scale = imgWidth/imgHeight
                        width = imgHeight*scale
                        height=350
                   }else if(imgWidth>350&&imgHeight>350){
                        if(imgWidth>=imgHeight){
                          let scale = imgHeight/imgWidth
                          height = 350*scale
                          width = 350
                        }else if(imgWidth<imgHeight){
                         let scale = imgWidth/imgHeight
                         height = 350
                         width = 350*scale
                       }
                   }
                   let img=document.getElementById('img')
                   img.style.height=height+'px'
                   img.style.width=width+'px'
               }
                this.clearCanvas()
          },
        showImg(e){
          let img=document.getElementById('img')
          let canvas = document.getElementById('canvas')
          let imgChoose=document.getElementById('imgChoose')
           var touch =  e.touches[0];
          let imgChooseWidth = touch.clientX-40
          let imgChooseHeight = touch.clientY-40
          let canvasWidth = canvas.offsetLeft
          let canvasHeight = canvas.offsetTop
          let imgWidth = img.offsetLeft
          let imgHeight = img.offsetTop
          let x = imgChooseWidth-canvasWidth
          let y = imgChooseHeight-canvasHeight
          var touch =  e.touches[0];
          var image = new Image() 
          image.src = img.src
           image.onload=function(){
              let ctx = canvas.getContext("2d");
              ctx.clearRect( 0, 0,canvas.width, canvas.height);
              ctx.drawImage( image,touch.pageX-imgWidth-40,touch.pageY-imgHeight-40,80,80,0,0,300,150) 
          }
          
        },
         touchstart(e) {
             this.imgChoose=true
             this.canvasImg=true
             var touch =  e.touches[0];
             let imgDiv = document.getElementById('imgDiv')
             let img=document.getElementById('img')
             let imgChoose=document.getElementById('imgChoose')
             imgDiv.style.top=e.target.offsetTop+'px'
             imgDiv.style.height=img.style.height
             imgDiv.style.width=img.style.width
             imgChoose.style.top= touch.clientY-40+'px'
             imgChoose.style.left= touch.clientX-40+'px'
             this.showImg(e)
             let imgTop = e.target.offsetTop
             let imgLeft = e.target.offsetLeft
              if(touch.pageY<imgTop+40||touch.pageX <imgLeft+40||touch.pageX>imgLeft+parseInt(img.style.width)-40||touch.pageY>imgTop+parseInt(img.style.height)-40){
                 this.imgChoose=false
             }
              
         },
         touchmove(e) {
             this.canvasImg=true
             var touch =  e.touches[0];
             let img=document.getElementById('img')
             let imgChoose=document.getElementById('imgChoose')
             let imgDiv = document.getElementById('imgDiv')
             let imgTop = e.target.offsetTop
             let imgLeft = e.target.offsetLeft
             imgChoose.style.top= touch.clientY-40+'px'
             imgChoose.style.left= touch.clientX-40+'px'
             if(touch.pageY<imgTop+40||touch.pageX <imgLeft+40||touch.pageX>imgLeft+parseInt(img.style.width)-40||touch.pageY>imgTop+parseInt(img.style.height)-40){
                 this.imgChoose=false
             }
               this.showImg(e)
                // console.log(img.offsetLeft+'px')
                //  console.log(img.offsetTop+'px')
         },

         touchend(e) {
         this.imgChoose=false
         
      },
      saveImg() {
          let canvas = document.getElementById('canvas')
           let img=document.getElementById('img')
          let canvasUrl = canvas.toDataURL('image/jpeg',0.92)
          if(this.canvasImg){
               this.$emit('showImgClick',canvasUrl)
          }
      },
      cancelImg() {
          let canvas = document.getElementById('canvas')
          let canvasUrl = canvas.toDataURL('image/jpeg',0.92)
          this.$emit('hiddenImg',canvasUrl)
      },
      clearCanvas() {
          let canvas = document.getElementById('canvas')
          let ctx = canvas.getContext("2d");
          ctx.clearRect( 0, 0,canvas.width, canvas.height);
      }
    },
        

     
      mounted:function(){
           this.$root.Bus.$on('changeImg',(imgSrc)=>{
             this.$nextTick(()=>{
                this.changeImg(imgSrc)
           })
        })
  },
    activated:function(){
      this.$root.Bus.$on('changeImg',(imgSrc)=>{
             this.$nextTick(()=>{
               this.changeImg(imgSrc)
           })
        })
   }
   }
</script>

<style scoped>
    
  
    .container{
        background-color: #ccc;
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display:flex;
        flex-direction: column;
        z-index:100;
        overflow: inherit;
        
    }
    .showImg{
         display:flex;
         flex-direction: column;
         margin: 0 auto;
         padding-top: 30px;
         height: 100%;
    }
    .canvasBox{
      margin: 20px;
      flex-grow:2;
     }
   .canvas{
       
       width: 80px;
       height: 80px;
       border-radius: 50%;
       background-color: white;
       display:flex;
       flex-direction: column;
       justify-content: center;
    }
    .wrapper{
          /* justify-content: center; */
          margin: 0 auto;
          width:100%;
          padding:10px;
          padding-bottom: 0;
          flex-grow:6;
    }
    
    .img{
       width: 100%;
       }
   
    .imgDiv{
      width:100%;
      opacity: 0.6;
      background-color: white;
      position: fixed;
    }
    .imgChoose{
      width: 80px;
      height: 80px;
      position: fixed;
      border-radius: 50%;
      border:solid 1px black;
      /* opacity:0; */
    }
    .button{
        margin: 0 auto;
        padding:20px;
        padding-top:0;
        flex-grow:2;
    }
    .rightButton{
        margin: 40px 20px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color:cornflowerblue;
    }
    .cancelButton{
        margin: 40px 20px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: cornflowerblue;
    }
</style>