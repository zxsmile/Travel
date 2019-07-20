<template>
    <div id="all">
             <div class='header'>
               <router-link 
               tag='div' 
               :to="'/search-detail/'+ parentId" 
               class='iconfont header-back'
              
               >
               &#xe624;
               </router-link>
                <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style">
           </div>
  
    <div id="allmap"></div>
    </div>
</template>
<script>
 //import {MP} from '../../map'
   export default {
       name:'SearchMapAddress',
       data(){
           return {
               address_detail: null, //详细地址
               userlocation: {lng: "", lat: ""},
               parentId:'',
               listId:''
           }
       },
       mounted(){
           this.$nextTick(function () {

                   var th = this
                   // 创建Map实例
                   var map = new BMap.Map("allmap");
                   // 初始化地图,设置中心点坐标，
                   var point = new BMap.Point(121.160724,31.173277); // 创建点坐标，汉得公司的经纬度坐标
                   map.centerAndZoom(point, 15);
                   map.enableScrollWheelZoom();
                   var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
                       {
                           "input": "suggestId"
                           , "location": map
                       })
                   var myValue
                   ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
                       var _value = e.item.value;
                       myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
                       this.address_detail = myValue
                       setPlace();
                   });

                   function setPlace() {
                       map.clearOverlays();    //清除地图上所有覆盖物
                       function myFun() {
                           th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                           map.centerAndZoom(th.userlocation, 18);
                           map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
                       }

                       var local = new BMap.LocalSearch(map, { //智能搜索
                           onSearchComplete: myFun
                       });
                       local.search(myValue);

                       //测试输出坐标（指的是输入框最后确定地点的经纬度）
                       map.addEventListener("click",function(e){
                           //经度
                           console.log(th.userlocation.lng);
                           //维度
                           console.log(th.userlocation.lat);

                       })
                   }

           }) 
           this.parentId = this.$route.params.parentId
           this.listId = this.$route.params.listId
          
       },
      
        activated:function(){
           this.parentId = this.$route.params.parentId
           this.listId = this.$route.params.listId
          
        }
 
   }
</script>
<style scoped>
   #allmap{
        width: 375px;
        height: 644px;
        font-family: "微软雅黑";
        border:1px solid #ccc;
    }
    #all{
        text-align: center;
        background-color: aquamarine;
        height: 100%;
    }
      .header{
       display:flex;
       flex-direction: row;
       width:100%;
      

   }
   .header-back{
        line-height: 40px;
        font-size: 22px;
        width:15%;
    }
    .input_style{
        border:solid 1px #ccc;
        width:270px;
        margin: 5px;
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
</style>



