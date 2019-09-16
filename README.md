# Travel项目简介
<hr/>

### 项目介绍
这是一个旅游购票vue项目，根据不同城市展示不同景点。

### 项目所用技术
* 框架vue
* html，css，js
* 后台使用了nodejs的express框架
* MySQL
### 项目目录介绍
   ├── index.html -----------------------入口页面<br/>
    ├── build ------------------------------构建脚本目录<br/>
    │   ├── build-server.js ---------------运行本地构建服务器，可以访问构建后的页面<br/>
    │   ├── build.js  ------------------------生产环境构建脚本<br/>
    │   ├── utils.js -------------------------构建相关工具方法<br/>
    │   ├── webpack.base.conf.js -----wabpack基础配置<br/>
    │   ├── webpack.dev.conf.js  -------wabpack开发环境配置<br/>
    │   └── webpack.prod.conf.js ------wabpack生产环境配置<br/>
    ├── config -----------------------------项目配置<br/>
    │   ├── dev.env.js  ---------------------开发环境变量<br/>
    │   ├── index.js  ------------------------项目配置文件<br/>
    │   ├── prod.env.js --------------------生产环境变量 <br/>
    ├── node_modules ------------------依赖包     <br/>                     
    ├── src ---------------------------------项目源码目录 <br/>
    │   ├── assets---------------------------资源目录，这里的资源会被wabpack构建<br/>
    │   │   └── images -----------------------用户和管理员的头像<br/>
    │   │   │   └── admin <br/>
    │   │   │   └── covers3.jpg<br/>
    │   │   └── styles<br/>
    │   │   │   └── iconfont<br/>
    │   │   │   └──border.css<br/>
    │   │   │    └──iconfont.css<br/>
    │   │   │    └──reset.css<br/>
    │   ├── common ------------------------公共组件目录<br/>
    │   │   └── animation<br/>
    │   │    │   └── Animation.vue<br/>
    │   │   └──gallary<br/>
    │   │     │  └── Gallary.vue<br/>
    │   └── pages ---------------------------页面目录<br/>
    │   │   └── admin -------------------------管理员登录页面<br/>
    │   │    │  └── Admin.vue<br/>
    │   │   └── admin-users -----------------管理用户页面<br/>
    │   │    │  └── AdminUsers.vue<br/>
    │   │   └── city ----------------------------城市选择页面<br/>
    │   │    │  └── components<br/>
    │   │    │   │  └── Alphabet.vue<br/>
    │   │    │   │   └── Header.vue<br/>
    │   │    │   │   └── List.vue<br/>
    │   │    │   │   └── Search.vue<br/>
    │   │    │  └── City.vue<br/>
    │   │   └── detail ------------------------热销推荐详情页面<br/>
    │   │   │ └── components<br/>
    │   │   │   │  └── Banner.vue<br/>
    │   │   │   │        └── Content.vue<br/>
    │   │   │   │        └── Header.vue<br/>
    │   │   │   │        └── List.vue<br/>
    │   │   │   │        └── Order.vue<br/>
    │   │   │   └── Detail.vue<br/>
    │   │   └── home ------------------------景点展示首页<br/>
    │   │   │ └── components<br/>
    │   │   │   │  └── Header.vue<br/>
    │   │   │   │  └── Icons.vue<br/>
    │   │   │   │  └── Recommend.vue<br/>
    │   │   │   │  └── Swiper.vue<br/>
    │   │   │   │  └── Weekend.vue<br/>
    │   │   │   └── Home.vue<br/>
    │   │   └── introduce ------------------icons景点有关事项介绍<br/>
    │   │    │  └── components<br/>
    │   │    │   │  └── Header.vue<br/>
    │   │    │   │ └── Content.vue<br/>
    │   │    │  └── Introduce.vue<br/>
    │   │    └── list-introduce --------------热销推荐景点有关事项介绍页面<br/>
    │   │    │  └── ListIntroduce.vue<br/>
    │   │   └── login ------------------------用户登陆页面<br/>
    │   │   │ └── components<br/>
    │   │   │   │  └── Header.vue<br/>
    │   │   │   │  └── Login.vue<br/>
    │   │   └── order-information --------------icons订单信息页面<br/>
    │   │    │  └── OrderInformation.vue<br/>
    │   │   └── page ------------------------------首页<br/>
    │   │   │  └── Page.vue<br/>
    │   │   └── recommend-date ---------------热销推荐日期选择页面<br/>
    │   │   │ └── RecommendDate.vue<br/>
    │   │   └── recommend-map-address-----热销推荐地图页面<br/>
    │   │   │ └── RecommendMapAddress.vue<br/>
    │   │   └── recommend-order-information---热销推荐订单信息页面<br/>
    │   │    │ └── RecommendOrderInformation.vue<br/>
    │   │   └── regist ---------------------------------用户注册页面<br/>
    │   │    │  └── components<br/>
    │   │    │   │ └── Header.vue<br/>
    │   │    │   │  └── Img.vue<br/>
    │   │    │   └── Regist.vue<br/>
    │   │   └── search-date -----------------------搜索日期选择页面<br/>
    │   │    │   └── SearchDate.vue<br/>
    │   │   └── search-detail ---------------------搜索详情页面<br/>
    │   │   │  └── SearchDetail.vue<br/>
    │   │   └── search-introduce ---------------搜索景点有关事项介绍页面<br/>
    │   │   │ └── SearchIntroduce.vue<br/>
    │   │   └── search-map-address ----------搜索地图页面<br/>
    │   │   │ └── SearchMapAddress.vue<br/>
    │   │   └── search-order-information -----搜索订单信息页面<br/>
    │   │   │ └── SearchOrderInformation.vue<br/>
    │   │   └── swiper-list ------------------------icons景点列表页面<br/>
    │   │    │  └── components<br/>
    │   │    │   │ └── Header.vue<br/>
    │   │    │   │  └── List.vue<br/>
    │   │   │ └── SwiperList.vue<br/>
    │   │   └── swiper-list-date --------------icons日期选择页面<br/>
    │   │    │   └── SwiperListDate.vue<br/>
    │   │   └── swiper-list-detail -------------icons详情页面<br/>
    │   │    │   └── SwiperListDetail.vue<br/>
    │   │   └── swiper-list-map-address----icons地图页面<br/>
    │   │    │   └── SwiperListMapAddress.vue<br/>
    │   │   └── weekend-date ---------------周末去哪儿日期选择页面<br/>
    │   │    │   └── WeekendDate.vue<br/>
    │   │   └──  weekend-detail -------------周末去哪儿详情页面<br/>
    │   │    │   └── WeekendDetail.vue<br/>
    │   │   └── weekend-introduce --------周末去哪儿景点有关事项介绍页面<br/>
    │   │   │ └── WeekendIntroduce.vue<br/>
    │   │   └──  weekend-map-address ----周末去哪儿地图页面<br/>
    │   │    │   └── WeekendMapAddress.vue<br/>
    │   │   └── weekend-order-information -周末去哪儿订单信息页面<br/>
    │   │   │ └── WeekendOrderInformation.vue<br/>
    │   ├── router ------------------------前端路由<br/>
    │   │   └── index.js<br/>
    │   ├── store -------------------------应用级数据（state）<br/>
    │   │   └── actions.js<br/>
    │   │   └── index.js<br/>
    │   │   └── mutations.js<br/>
    │   │   └── state.js<br/>
    │   ├── App.vue  ------------------- 根组件<br/>
    │   ├── main.js  ---------------------入口js文件<br/>
    ├── static                          纯静态资源，不会被wabpack构建。<br/>
    ├── package.json                    npm包配置文件，里面定义了项目的npm脚本，依赖包等信息<br/>
### 项目所用到的技术点
1 使用iconfont图标管理
2 使用better-scroll做页面滑动效果以及上拉刷新，下拉加载效果
  下载：npm install better-scroll --save
  项目中引入：import BScroll from 'better-scroll'

  ```php
  mounted() { 
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
                this.scroll.on('scroll', (pos) => {
                   this.lazyLoad(-pos.y)
                })
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
              })
    }


3  实现图片的懒加载
 先将img标签的src链接设为‘##’，然后给img标签设置自定义属性（比如 data-src）,然后将真正的图片地址存储在data-src中，当JS监听到该图片元素进入可视窗口时，将自定义属性中的地址存储到src属性中。达到懒加载的效果。
```php
         lazyLoad(pos) {
                  var img = this.$refs.wrapper.getElementsByClassName("recommend-img"); 
                    // 已滚动高度+可视区高度
                    var top = pos + this.$refs.wrapper.clientHeight;
                    for(var i = 0; i < img.length; i++) {
                        if(img[i].offsetTop <= top) {  // 在可视区内则显示图片
                            img[i].src = img[i].getAttribute("datasrc");
                        }
                    } 
              }

           this.scroll.on('scroll', (pos) => {
                     this.lazyLoad(-pos.y)
                })
```
4 使用sessionStorage,localStorage实现登陆过期
 登陆时，使用localStorage存入登录时间，sessionStorage将greenPath的值设为1
   window.localStorage.setItem("timestamp", new Date().getTime());
   window.sessionStorage.setItem('greenPath',1);
  在刚进入首页时获取当前时间戳，如果当前时间戳> 前面存的时间戳+过期时间 表示已经过期，则提示用户“登陆已过期，请重新登陆”
```php
mounted:function(){
     this.changeMassage()
     var time = 1000*60*60*24*7;  //1000*60*60*24*7;
     var storage = window.localStorage; 
     var oldTimestamp = storage.getItem('timestamp');//以前存的时间戳 
     oldTimestamp=eval('('+oldTimestamp+')')
     var nowTimestamp = new Date().getTime();//当前时间戳
     var sumTimestamp = oldTimestamp + time;
     if(nowTimestamp > sumTimestamp){ 
        if (storage.getItem('timestamp')&&!sessionStorage.getItem('greenPath')){
         // 如果当前时间戳> 前面存的时间戳+过期时间 表示已经过期
           let userNameBack = this.$store.state.userNameBack
           let imgUrlBack =this.$store.state.imgUrlBack
           let  userPawBack = ''
           let took = 0
           this.$store.dispatch('changeTook',{took,userNameBack ,imgUrlBack, userPawBack})
            let msg = '登录已过期，请重新登录'
           window.sessionStorage.setItem('msg',msg);
       }
   }else{
    window.sessionStorage.setItem('greenPath',1);
   }
  }
  ```
  5 canvas实现截图
 当用户选择图片以后，要求展示在截取页面上的图片长和宽都要小于等于350px,所以先对图片的大小进行压缩，让图片顺利展示在截取页面。然后通过canvas进行截取想要上传的部分。
 截取部分说明：
   * 在原图的上面有两层div,一层是透明的，一层是标注截取部分。
   * 在鼠标按下时(即touchstart事件发生时)，获取开始截取的位置，让第二层div的left为touch.clientX，top为touch.clientY，这样就会获取到了开始截取的位置。
   * 在鼠标移动时(即touchmove事件发生时)要根据鼠标移动的方向画出截取的矩形部分。根据鼠标的移动方向(上，下，左，右，左上，左下，右上，右下)，计算出矩形的长和宽，以及确定图片的外边不能截取。
   ```php
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
       ```
  * 在鼠标放开时(即touchend事件发生时),隐藏那两层div,并将矩形在原图的起始位置，以及昌都和宽度值获取到，然后利用canvas画图。
       ```php
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
      ```
  ctx.drawImage()有九个参数，第一个原图地址，第二个和第三个是从原图的(0,0)坐标开始截取的x,y坐标，注意是原图，第四个和第五个参数是截取的部分的宽高，这里注意也是相对于原图的宽高，这里很坑，由于我在截取之前将原图的宽高压缩了，导致我这块搞了好久才发现是相对原图，第六个和第七个参数表示在画布上开始画的位置，第八个和第九个表示在画布上展示的图片大小，相当于放缩图片。
6 formdata+axios上传图片
使用canvas.toDataURL('image/jpeg',0.92)，取出画布里面的图片，使用formdata+axios的post请求上传照片的时候又出现了问题，发现formdata里面的内容为空。最后发现，由于业务需要，axios配置了拦截器，在里面做了数据处理，导致formdata无法正常提交，解决方案就是 重新creat一个纯净的axios请求，挂载到vue原型里，然后重新请求。
```php
 const instance=axios.create({
    // baseURL:'http://127.0.0.1/', // 通常配置基础的接口入口地址 
    // timeout:5000, // 请求超时时间
    headers:{// 这里可设置所有的请求头
        'Content-Type':'application/x-www-form-urlencoded', //该项建议设置 如果未 POST请求时 数据未做处理时会出现错误，最理想的解决方法就是 直接设置该项
    },
    withCredentials:true,//是否允许发送Cookie 如果为true 则服务器的 Access-control-Allow-Credentials 必须为 true 来源为 XMLHttpRequest的withCredentials配置项

    // 以下两项为拦截器配置 可最后再看
    transformRequest: [function (data) {//准备发送请求触发的事件 类型：Array || Function 可以是一个函数或数组 data 为发送的数据 get 为undefined
        //console.log('准备发送请求：',data)
        // 此处可对发送的数据进行处理      
        return data; //最终数据
    }],
    transformResponse: [function (data) {//接收到数据首先处理的函数 ，data 为服务器返回的数据（// 1.响应结构 里的  rs.data）
        //console.log('接收到数据：',data)
        return data;//最终数据 
    },function (data) {//当为数组时 窜行操作  data 为上一步中的最终数据
        //console.log('before',data)
        return data;
    }],
})
instance.all=axios.all;
Vue.prototype.instance=instance;
```
7 用户信息分页
后台使用`SELECT SQL_CALC_FOUND_ROWS * FROM user_regist limit ${number*5},5`语句来控制数据的显示，通过点击不同页，改变number来达到分页效果。
* 使用路由守卫来判断管理员登陆状态
由于管理页面需要登陆才能进入，所以必须检查登录状态。用户登陆后，会通过sessionStorage设置一个took值，window.sessionStorage.setItem('took',took);，然后来判断如果有took值，则登陆了可以进管理页面，否则只能去管理员登录页面。
```php
 beforeRouteEnter:(to,from,next)=>{
     if(window.sessionStorage.getItem('took')){
        next()
     }else{
      next('/admin/login')
     } 
    }
```
### 项目存在的问题
* 页面请求次数有点多
* 裁剪部分还不是太完美

