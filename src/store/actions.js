export default{

    
        changeCity:function(ctx,city){
            ctx.commit('changeCityData',city)
        },
        changeId:function(ctx,id){
            ctx.commit('changeIdData',id)
        },
        changeTitle:function(ctx,title){
            ctx.commit('changeTitleData',title)
           
        },
        changeMoney:function(ctx,money){
            ctx.commit('changeMoneyData',money)
           
        },
        GetYear:function(ctx,year){
            ctx.commit('GetYearData',year)
           
        },
        GetMonth:function(ctx,month){
            ctx.commit('GetMonthData',month)
           
        },
        GetDay:function(ctx,day){
            ctx.commit('GetDayData',day)
           
        },
        handleGetDate:function(ctx,date){
            ctx.commit('handleGetDateData',date)
        },
       
        // changeParent:function(ctx,parentId){
        //     ctx.commit('changeParentId',parentId)
        // }
}