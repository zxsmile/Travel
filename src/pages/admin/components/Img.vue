<template>
    <div class="container">
        <div class='showImg'>
            <div class='canvasBox'>
               <canvas class='canvas' id='canvas' width="80" height="80"></canvas>
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
              canvasImg:false,
              width:0,
              height:0,
              imgChooseWidth:0,
              imgChooseHeight:0,
              imgChooseTop:0,
              imgChooseLeft:0,
              scaleX:0,
              scaleY:0,
              scale:0,
              imgWidth:0,
              imgHeight:0
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
               var that = this
               image.onload=function(){
                    that.imgWidth = this.width
                    that.imgHeight = this.height
                    let width = this.width
                    let height = this.height
                    if(that.imgWidth>that.imgHeight&&that.imgHeight<=350){
                        that.scale = that.imgHeight/that.imgWidth
                        width= 350
                        height=that.scale*that.imgWidth
                   }else if(that.imgWidth<that.imgHeight&&that.imgWidth<=350){
                       that.scale = that.imgWidth/that.imgHeight
                        width = that.imgHeight*that.scale
                        height=350
                   }else if(that.imgWidth>350&&that.imgHeight>350){
                        if(that.imgWidth>=that.imgHeight){
                          that.scale = that.imgHeight/that.imgWidth
                          height = 350*that.scale
                          width = 350
                        }else if(that.imgWidth<that.imgHeight){
                         that.scale = that.imgWidth/that.imgHeight
                         height = 350
                         width = 350*that.scale
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
          let canvasWidth = canvas.offsetLeft
          let canvasHeight = canvas.offsetTop
          let imgWidth = img.offsetLeft
          let imgHeight = img.offsetTop
          let imgTop = e.target.offsetTop
          let imgLeft = e.target.offsetLeft
          var image = new Image() 
          image.src = img.src
          var that = this
           this.scaleX=this.imgWidth/parseInt(img.style.width)
           this.scaleY=this.imgHeight/parseInt(img.style.height)
           this.imgChooseWidth =  this.imgChooseWidth*this.scaleX
           this.imgChooseHeight = this.imgChooseHeight*this.scaleY
           var imgStart = (this.imgChooseLeft-e.target.offsetLeft)*this.scaleX
           var imgEnd = (this.imgChooseTop-e.target.offsetTop)*this.scaleY
           image.onload=function(){
              let ctx = canvas.getContext("2d");
              ctx.clearRect( 0, 0,canvas.width, canvas.height);
              ctx.drawImage( image,imgStart,imgEnd,that.imgChooseWidth,that.imgChooseHeight,0,0,80,80) 
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
        	   imgChoose.style.top= touch.clientY+'px'
             imgChoose.style.left= touch.clientX+'px'
             let imgTop = e.target.offsetTop
             let imgLeft = e.target.offsetLeft
             this.width=touch.clientX-imgLeft 
             this.height=touch.clientY-imgTop 
             this.imgChooseLeft=touch.clientX
             this.imgChooseTop=touch.clientY
         },
         touchmove(e) {
             this.canvasImg=true
             var touch =  e.touches[0];
             let img=document.getElementById('img')
             let imgChoose=document.getElementById('imgChoose')
             let imgDiv = document.getElementById('imgDiv')
             let imgTop = e.target.offsetTop
             let imgLeft = e.target.offsetLeft
    
             if(this.imgChooseLeft>=touch.clientX&&this.imgChooseTop>=touch.clientY){
                this.imgChooseWidth=this.imgChooseLeft-touch.clientX
                this.imgChooseHeight=this.imgChooseTop-touch.clientY
                imgChoose.style.left =touch.clientX+'px'
                imgChoose.style.top=touch.clientY+'px'
                if((this.imgChooseWidth-this.imgChooseLeft+imgLeft)>0||(this.imgChooseHeight-this.imgChooseTop+imgTop)>0){
                this.imgChooseWidth=0
                this.imgChooseHeight=0
             }
             }else if(this.imgChooseLeft>=touch.clientX&&this.imgChooseTop<=touch.clientY){
                  this.imgChooseWidth=this.imgChooseLeft-touch.clientX
                  this.imgChooseHeight=touch.clientY-this.imgChooseTop
                  imgChoose.style.left =touch.clientX+'px'
                  if((this.imgChooseWidth-this.imgChooseLeft+imgLeft)>0||(this.imgChooseHeight+this.imgChooseTop-imgTop)*this.scaleY>this.imgHeight){
                    this.imgChooseWidth=0
                    this.imgChooseHeight=0
                }
             }else if(this.imgChooseLeft<=touch.clientX&&this.imgChooseTop>=touch.clientY){
               this.imgChooseWidth=touch.clientX-this.imgChooseLeft
                this.imgChooseHeight=this.imgChooseTop-touch.clientY
                imgChoose.style.top=touch.clientY+'px'
                if((this.imgChooseWidth+this.imgChooseLeft-imgLeft)*this.scaleX>this.imgWidth||(this.imgChooseHeight-this.imgChooseTop+imgTop)>0){
                    this.imgChooseWidth=0
                    this.imgChooseHeight=0
                }
             }else if(this.imgChooseLeft<=touch.clientX&&this.imgChooseTop<=touch.clientY){
                this.imgChooseWidth=touch.clientX-this.imgChooseLeft
                this.imgChooseHeight=touch.clientY-this.imgChooseTop
                if((this.imgChooseWidth+this.imgChooseLeft-imgLeft)*this.scaleX>this.imgWidth||(this.imgChooseHeight+this.imgChooseTop-imgTop)*this.scaleY>this.imgHeight){
                this.imgChooseWidth=0
                this.imgChooseHeight=0
             }
             }

             imgChoose.style.width =  this.imgChooseWidth+'px'
             imgChoose.style.height = this.imgChooseHeight+'px'
         },

         touchend(e) {
           this.imgChoose=false
           this.imgChooseTop = parseInt(imgChoose.style.top)
           this.imgChooseLeft = parseInt(imgChoose.style.left)
           this.showImg(e)
           imgChoose.style.width=0
           imgChoose.style.height=0
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
       background-color: white;
       display:flex;
       flex-direction: column;
       justify-content: center;
        border-radius: 50%;
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
      cursor: pointer;
     
    }
    .imgChoose{
      width: 0;
      height: 0;
      position: fixed;
      /* border-radius: 50%; */
      border:solid 1px black;
      
     
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