<template>
   <div :parentId='parentId' class='wrapper' ref='wrapper'>
        <div class='content'>
            <p class='fresh'>~~上拉刷新~~</p>
            <router-link :to="'./'+parentId+'/swiper-list-detail/'+ item.list_id1" tag='div'  class="recommend border-bottom" v-for='item of  recommandList' :key='item.id'>
                <img class='recommend-img' :src="item. recommandImgSrc" />
                <div class='recommend-content'>
                    <p class="recommend-title">{{item.recommandTitle}}</p>
                    <p class="recommend-describe">{{item.recommendDescribe}}</p>
                    <p class="recommend-button">￥{{item.recommandMoney}}</p>
                </div>
            </router-link>
             <p class='freshs' @click='pullingUp'>~~点击加载更多~~</p>
        </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import axios from 'axios'
export default{
   name:'List',
   props:{
       //recommandList:Array,
       parentId:String
   },
   data:function(){
       return {
           parentIdchange:this.parentId,
            num:1,
            recommandList:[],
           
       }
   },

   methods:{
        getSwiperListInfo:function(){
               axios.post('/api/swiper-list',{
                   num:0,
                   parseInt:this.$route.params.parentId
                })
               .then(this. getSwiperListInfoSuccess,function(){
                   console.log('获取数据失败')
               })
           },
           getSwiperListInfoSuccess:function(res){
                  res = res.data
                  let data=''
                  if(!res[this.$store.state.city]){
                    data = res['北京'][0]
                  }else{
                    data = res[this.$store.state.city][0]
                  }
                   if(data.recommandList.length<7){
                      var freshs = document.getElementsByClassName('freshs')[0]
                      var fresh = document.getElementsByClassName('fresh')[0]
                      freshs.innerHTML = '暂时没有新数据~~'
                      fresh.innerHTML = ''
                  }else{
                      var freshs = document.getElementsByClassName('freshs')[0]
                      var fresh = document.getElementsByClassName('fresh')[0]
                      freshs.innerHTML = '~~点击加载更多~~'
                      fresh.innerHTML = '~~上拉刷新~~'
                  }
                  this.recommandList =data.recommandList
              },
           getpullingDownInfo:function(){
               axios.post('/api/swiper-list-pull',{
                   num:this.num,
                   parseInt:this.$route.params.parentId
                })
               .then(this. getpullingDownSuccess,function(){
                   console.log('获取数据失败')
               })
           },
           getpullingDownSuccess:function(res){
                  this.num++
                  res = res.data
                  let data=''
                  if(!res[this.$store.state.city]){
                    data = res['北京'][0]
                  }else{
                    data = res[this.$store.state.city][0]
                  }
                  this.recommandList =data.recommandList.concat(this.recommandList)
                //   if( this.recommandList.length<=7){
                //       var freshs = document.getElementsByClassName('freshs')[0]
                //       var fresh = document.getElementsByClassName('fresh')[0]
                //       freshs.innerHTML = '暂时没有新数据~~'
                //       fresh.innerHTML = ''
                //   }
              },

           pullingUp:function(){
               axios.post('/api/swiper-list-pull',{
                   num:this.num,
                   parseInt:this.$route.params.parentId
                })
               .then(this. getpullingUpSuccess,function(){
                   console.log('获取数据失败')
               })
           },
           getpullingUpSuccess:function(res){
                  this.num++
                  res = res.data
                  let data=''
                  if(!res[this.$store.state.city]){
                    data = res['北京'][0]
                  }else{
                    data = res[this.$store.state.city][0]
                  }
                  if(data.recommandList.length<=0){
                      var freshs = document.getElementsByClassName('freshs')[0]
                      freshs.innerHTML = '我也是有底线的~~'
                  }
                  this.recommandList =this.recommandList.concat(data.recommandList)
                //    if( this.recommandList.length<=7){
                //       var freshs = document.getElementsByClassName('freshs')[0]
                //       var fresh = document.getElementsByClassName('fresh')[0]
                //       freshs.innerHTML = '暂时没有新数据~~'
                //       fresh.innerHTML = ''
                //   }
              }
   },
   mounted:function() { 
   this.getSwiperListInfo()
      this.$nextTick(()=>{
                if (!this.scroll) {
                     this.scroll = new BScroll(this.$refs.wrapper, {
                            click: true,
                            pullDownRefresh: {
                                threshold: 50,
                                probeType: 3
                            },
                            pullUpLoad: {
                                threshold: 845
                                }
                    })
                
                } else {
                    this.scroll.refresh();
                  }

                this.scroll.on('pullingDown', () => {
                       //发送Ajax从后台拿数据
                       this.getpullingDownInfo()
                        this.$nextTick(() => {
                            this.scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
                        })
                        
                         this.scroll.on('scroll', (pos) => {
                            if (pos.y > 50) { 
                                var fresh = document.getElementsByClassName('fresh')[0]
                                fresh.innerHTML = '松开立即刷新~~'
                            }
                        })
                        this.scroll.finishPullDown() // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
                        
                        this.scroll.on('touchEnd', () => {
                                      var fresh = document.getElementsByClassName('fresh')[0]
                                    setTimeout(()=>{
                                        fresh.innerHTML = '~~上拉刷新~~'
                                    },2000)
                        })
                })

                // this.scroll.on('pullingUp', () => {
                        
                //         this.$nextTick(() => {
                //           this.scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
                //         })
                //           this.scroll.finishPullUp() // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
                //         })
               })
    },

   activated:function() { 
   this.getSwiperListInfo()
     
    },
}

</script>
   
<style scoped>
    .wrapper{
       overflow: hidden;
       position:absolute;
       top:43px;
       left:0;
       right:0;
       bottom: 0;
   }
    .fresh{
      text-align: center;
       padding-top: 10px;
    }
    .freshs{
      text-align: center;
       padding-top: 10px;
    }
    .recommend{
        width:100%;
        height:94px;
        display: flex;
        overflow:hidden;
        margin-top:10px;
    }
    .border-bottom{
       border-bottom:1px solid #ccc;

    }
    .recommend-img{
        width:78px;
        height:78px;
        padding:5px;
    }
    .recommend-content{
        padding:5px;
        min-width: 0;
    }
    .recommend-title{
        height:27px;
        line-height: 27px;
        font-size: 16px;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .recommend-describe{
        height:20px;
        line-height: 20px;
        color: #ccc;
        overflow:hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .recommend-button{
       color: #ff9300;
       line-height:20px;
       margin-top: 5px;
       font-size: 16px;
      
    }
</style>