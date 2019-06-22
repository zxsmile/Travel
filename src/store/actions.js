export default{

    
        changeCity:function(ctx,city){
            ctx.commit('changeCityData',city)
        },
        changeTitle:function(ctx,title){
            ctx.commit('changeTitleData',title)
           
        },
        changeMoney:function(ctx,money){
            ctx.commit('changeMoneyData',money)
           
        }
}