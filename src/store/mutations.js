export default{
    changeCityData:function(state,city){
        state.city=city
        try{
            localStorage.city = city
        }catch(e){

        }
        
    },
    changeIdData:function(state,id){
        state.id=id
        try{
            localStorage.id = id
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
    handleGetDateData:function(state,date){
        state.date = date
        try{
            localStorage.date = date
        }catch(e){

        }
    },

    changeTookData:function(state,{took,userNameBack,imgUrlBack,userPawBack}){
        state.took = took
        state.userNameBack = userNameBack
        state.imgUrlBack = imgUrlBack
        state.userPawBack=userPawBack
        try{
            localStorage.took = took
            localStorage.userNameBack=userNameBack
            localStorage.imgUrlBack = imgUrlBack
            localStorage.userPawBack=userPawBack
        }catch(e){

        }
    },

    

}