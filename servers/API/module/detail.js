module.exports=function (data){
                let detail=[]
                data.forEach((element)=>{
                 if(!detail[element.detail_id]||detail[element.detail_id].bannerName!==element.bannerName){
                     
                     detail.push({
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
                        
                 }else if(!detail[element.detail_id].list[element.list_id]||detail[element.detail_id].list[element.list_id].title!=element.list_title){
                     detail[element.detail_id].list.push({
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
                 }else if(!detail[element.detail_id].list[element.list_id].children[element.children_id]||detail[element.detail_id].list[element.list_id].children[element.children_id].title!=element.children_title){
                     detail[element.detail_id].list[element.list_id].children.push({
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
                 }else if(!detail[element.detail_id].list[element.list_id].children[element.children_id].order[element.order_id]||detail[element.detail_id].list[element.list_id].children[element.children_id].order[element.order_id].title!=element.title){
                     detail[element.detail_id].list[element.list_id].children[element.children_id].order.push({
                         "title":element.title,
                         "time":element.time,
                         "money":element.money
                    })
                 }
                 
            })
            return detail
}