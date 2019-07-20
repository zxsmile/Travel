export default{
    changeCityData:function(state,city){
        state.city=city
        try{
            localStorage.city = city
        }catch(e){

        }
        
    },
    changeTitleData:function(state,title){
        state.title = title
        try{
            localStorage.title = title
        }catch(e){

        }
    },
    changeMoneyData:function(state,money){
        state.money = money
        try{
            localStorage.money = money
        }catch(e){

        }
    },
    GetYearData:function(state,year){
        state.year = year
        try{
            localStorage.year = year
        }catch(e){

        }
    },
    GetMonthData:function(state,month){
        state.month = month
        try{
            localStorage.month = month
        }catch(e){

        }
    },
    GetDayData:function(state,day){
        state.day = day
        try{
            localStorage.day = day
        }catch(e){

        }
    },
    // changeParentId:function(state,parentId){
    //     state.parentId = parentId
    // }
}