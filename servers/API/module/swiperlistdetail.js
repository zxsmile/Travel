module.exports=function (data){
    let datas=[]
               data.forEach((element)=>{
                   if(!datas[element.data_id]||!datas[element.data_id].detail){
                       datas.push({
                           "detail":[{
                            "bannerName":element.bannerName,
                            "bannerImg": element.bannerImg,
                            "gallaryImgs":eval('('+element.gallaryImgs+')'),
                            "address":element.address,
                            "list":[{
                                "title":element.list_title,
                                "children":[{
                                    "orderShow":false,
                                    "title":element.children_title,
                                    "content":element.chiledren_content,
                                    "money":element.children_money,
                                    "order":[{
                                        "title":element.title,
                                        "time":element.time,
                                        "money":element.money
                                   }]
                               }]
                            }]
                        }]
                       })
                   }else if(!datas[element.data_id].detail[element.detail_id]||datas[element.data_id].detail[element.detail_id].bannerName!==element.bannerName){
                    
                    datas[element.data_id].detail.push({
                        "bannerName":element.bannerName,
                        "bannerImg": element.bannerImg,
                        "gallaryImgs":eval('('+element.gallaryImgs+')'),
                        "address":element.address,
                        "list":[{
                            "title":element.list_title,
                            "children":[{
                                "orderShow":false,
                                "title":element.children_title,
                                "content":element.chiledren_content,
                                "money":element.children_money,
                                "order":[{
                                    "title":element.title,
                                    "time":element.time,
                                    "money":element.money
                               }]
                           }]
                        }]})
                       
                }else if(!datas[element.data_id].detail[element.detail_id].list[element.list_id]||datas[element.data_id].detail[element.detail_id].list[element.list_id].title!=element.list_title){
                    datas[element.data_id].detail[element.detail_id].list.push({
                        "title":element.list_title,
                        "children":[{
                            "orderShow":false,
                            "title":element.children_title,
                            "content":element.chiledren_content,
                            "money":element.children_money,
                            "order":[{
                                "title":element.title,
                                "time":element.time,
                                "money":element.money
                           }]
                       }]
                    })
                }else if(!datas[element.data_id].detail[element.detail_id].list[element.list_id].children[element.children_id]||datas[element.data_id].detail[element.detail_id].list[element.list_id].children[element.children_id].title!=element.children_title){
                    datas[element.data_id].detail[element.detail_id].list[element.list_id].children.push({
                            "orderShow":false,
                            "title":element.children_title,
                            "content":element.chiledren_content,
                            "money":element.children_money,
                            "order":[{
                                "title":element.title,
                                "time":element.time,
                                "money":element.money
                           }]
                       })
                }else if(!datas[element.data_id].detail[element.detail_id].list[element.list_id].children[element.children_id].order[element.order_id]||datas[element.data_id].detail[element.detail_id].list[element.list_id].children[element.children_id].order[element.order_id].title!=element.title){
                    datas[element.data_id].detail[element.detail_id].list[element.list_id].children[element.children_id].order.push({
                        "title":element.title,
                        "time":element.time,
                        "money":element.money
                   })
                }
                
            
                
                  
               })
               return datas
}