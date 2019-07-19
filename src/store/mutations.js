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
    },
    changeMoneyData:function(state,money){
        state.money = money
    },
    GetYearData:function(state,year){
        state.year = year
    },
    GetMonthData:function(state,month){
        state.month = month
    },
    GetDayData:function(state,day){
        state.day = day
    },
    // changeParentId:function(state,parentId){
    //     state.parentId = parentId
    // }
}