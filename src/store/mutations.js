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
    }
}