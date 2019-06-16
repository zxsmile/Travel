export default{
    changeCityData:function(state,city){
        state.city=city
        try{
            localStorage.city = city
        }catch(e){

        }
        
    }
}