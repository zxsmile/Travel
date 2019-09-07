<template>
        <div>
           <div class='header'>
               <div
               class='iconfont header-back'
                @click="getBackDetail"
               >
               &#xe624;
               </div>
               <p class="header-title">游玩日期</p>
           </div>
            <div class='weeks'>
             <div class='week'>日</div>
             <div class='week'>一</div>
             <div class='week'>二</div>
             <div class='week'>三</div>
             <div class='week'>四</div>
             <div class='week'>五</div>
             <div class='week'>六</div>
           </div>
           <div class='date boder'>
               {{this.year}}年{{this.month}}月
               
            </div>
           <div class='days'>
             <div class='day' v-for='(item,index) of DayWeek' :key='index' @click='gethandleClick'>{{item}}</div>
           </div>
            <div class='date boder'>
               {{this.year2}}年{{this.month2}}月
            </div>
           <div class='days'>
             <div class='day2' v-for='(item,index) of DayWeek2' :key='index' @click='gethandleClick2'>{{item}}</div>
           </div>
        </div>
</template>

<script>
import ListVue from '../city/components/List.vue';

export default{
    name:'SeachDate',
    components: {
     
  },
 data:function(){
        return{
           parentId:'' ,
           listId:'',
           cityId:'',
           year:'',
           month:'',
           day:'',
           DayWeek:[],
            year2:'',
           month2:'',
           day2:'',
           DayWeek2:[],
           
        }
  },
  methods:{
      // 返回当前月天数
    getMonthDays:function (year,month){
        return new Date(year,month,0).getDate();
    },
    // 返回数字几则是星期几
   getWeekday:function (year,month,day){
    return new Date(year, month-1, day).getDay();
    },
    // 返回当前月包含几个星期
   getweeksInMonth:function (year,month){

    let days = this.getMonthDays(year,month);
    let FirstDayWeekday = this.getWeekday(year, month, 1);
    let weeks = (days-7+FirstDayWeekday)/7
    return Math.ceil(weeks);
   },
   getCalendar:function(){
           let date = new Date();
           this.year = date.getFullYear();
           this.month = date.getMonth()+1;
           this.day = date.getDate();
           let days= this.getMonthDays(this.year,this.month);
           let FirstDayWeek = this.getWeekday(this.year,this.month,1);
           let LaststDayWeek = this.getWeekday(this.year,this.month,days);
           let weeks = this.getweeksInMonth(this.year,this.month);
           let  j=1;
           
           for(let k=0;k<FirstDayWeek;k++){
                this.DayWeek[k]=' '
           }
           for(let i=0; i<days; i++){
              this.DayWeek.push(j)
              j++;
           }
   },
   getNextCandar() {
           let date = new Date();
           this.year = date.getFullYear();
           this.month = date.getMonth()+1;
           this.day = date.getDate();
           this.year2 =this.year
           this.month2 = parseInt(this.month) + 1
           if (this.month2 == 13) {
                this.year2 = parseInt(this.year2) + 1;
                this.month2 = 1;
            }
           let days2= this.getMonthDays(this.year2,this.month2);
           let FirstDayWeek2 = this.getWeekday(this.year2,this.month2,1);
           let LaststDayWeek2 = this.getWeekday(this.year2,this.month2,days2);
           let weeks2 = this.getweeksInMonth(this.year2,this.month2);
            let  j=1;
           
           for(let k=0;k<FirstDayWeek2;k++){
                this.DayWeek2[k]=' '
           }
           for(let i=0; i<days2; i++){
              this.DayWeek2.push(j)
              j++;
           }
   },
   gethandleStatic:function(){
       let dayDocument = document.getElementsByClassName('day')
        let date = new Date();
            dayDocument = Array.from(dayDocument)
             dayDocument.forEach((element,index) => {
                 element.style.color='black'
                 if(element.innerHTML == this.day){
                    element.style.color='red'
                 }
                  if(element.innerHTML<this.day){
                   element.style.pointerEvents ='none'
                   element.style.color='#ccc'
                    }
            });
   },
     getBackDetail() {
       this.$router.push({ 
            path:'/'+this.cityId+'/search-detail/'+ this.parentId
            })
       this.$store.state.day=''
       this.$store.state.month=''
    },  
   gethandleClick:function(e){
        let dayDocument = document.getElementsByClassName('day')
        let date = new Date();
            dayDocument = Array.from(dayDocument)
             dayDocument.forEach((element,index) => {
                
                    element.style.color='black'
                    e.target.style.color='red'
                   
            });
            this.$store.dispatch('GetYear',this.year)
            this.$store.dispatch('GetMonth',this.month)
            this.$store.dispatch('GetDay',e.target.innerHTML)
            this.$router.push({ 
            path:'/'+this.cityId+'/search-detail/'+ this.parentId
            })
             this.$root.Bus.$emit('orderButtonColor')
   },
    gethandleClick2:function(e){
        let dayDocument = document.getElementsByClassName('day2')
        let date = new Date();
            dayDocument = Array.from(dayDocument)
             dayDocument.forEach((element,index) => {
                
                    element.style.color='black'
                    
                   
            });
            this.$store.dispatch('GetYear',this.year2)
            this.$store.dispatch('GetMonth',this.month2)
            this.$store.dispatch('GetDay',e.target.innerHTML)
            this.$router.push({ 
            path:'/'+this.cityId+'/detail/'+this.parentId
            })
             this.$root.Bus.$emit('orderButtonColor')
   }
      
},
 
  mounted:function(){
           this.parentId = this.$route.params.parentId
           this.listId = this.$route.params.listId
           this.cityId = this.$route.params.cityId
           this.getCalendar()
            this.getNextCandar()
           this.gethandleStatic()
        },
  activated:function(){
           this.parentId = this.$route.params.parentId
           this.listId = this.$route.params.listId
           this.cityId = this.$route.params.cityId
           this.gethandleStatic()
        },
  updated:function(){
      this.gethandleStatic()
  }
}
</script>

<style scoped>
  .header{
       display:flex;
       flex-direction: row;
       width:100%;
       padding: 10px;

   }
   .header-back{
        line-height: 40px;
        font-size: 22px;
        width:40%;
    }

    .header-title{
        line-height: 40px;
        font-size: 18px;
        font-weight: 800;
        /* text-align: center; */
        width: 60%;
    }
    .weeks{
       display:flex;
       flex-direction: row;
       width:100%;
       flex-wrap: wrap;
    }
    .week{
        width:14%;
        text-align:center;
       
    }
    .date{
        text-align: center;
        padding: 20px 0 10px 0;
        font-size: 18px;
        border-bottom: 0.1px solid #ccc;
    }
    .days{
       display:flex;
       flex-direction: row;
       width:100%;
       flex-wrap: wrap;
    }
    .day{
        width:14%;
        text-align:center;
        padding: 10px 0 30px 0;
        /* pointer-events:none */
    }
     .day2{
        width:14%;
        text-align:center;
        padding: 10px 0 30px 0;
        /* pointer-events:none */
    }
</style>