<template>
    <div class='list' ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title">当前城市</div>
                <div class='city-list'>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class='city-list'>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                    <div class="list-wrapper">
                        <div class="list-content">西安</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                <div class="city-item border-bottom">
                    <div class="item ">阿里</div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
    name:'CityList',
    mounted:function(){
        this.scroll = new BScroll(this.$refs.wrapper)
        console.log(this.scroll)
    }
}
</script>

<style scoped>
   .list{
       /* overflow: hidden;
       position:absolute;
       top:86px;
       left:0;
       right:0;
       bottom: 0; */
       /* height:100%;
       width:100%; */
     
   }
   /* .content{
       height:581px;
       width:100%;
   } */
   .title{
       width:100%;
       height:22px;
       line-height: 22px;
       background-color: #eee;
       text-indent:10px;
   }
   .city-list{
       overflow: hidden;
       padding:5px 20px 5px 5px;
    }
    .list-wrapper{
        width:33.3%;
        float:left;
        }
    .list-content{
        text-align: center;
        padding: 5px 0;
        border: 1px solid #ccc;
        margin:5px;
        border-radius: 3px;
    }
    .city-item{
        width:100%;
        padding-left:10px;
        line-height: 40px;
    }
    .border-bottom{
        border-bottom:1px solid #ccc;

    }
</style>