module.exports=function (data){
                let datas=[]
                data.forEach(element=>{
                    if(!datas[element.datas_id]||!datas[element.datas_id].introduceList){
                        datas.push({
                            "introduceList":[{
                                "title":element.title,
                                "content":[{
                                   "title":element.content_title
                                }]
                                }]
                            })
                    }else if(!datas[element.datas_id].introduceList[element.introduceList_id]||datas[element.datas_id].introduceList[element.introduceList_id].title!==element.title){
                        datas[element.datas_id].introduceList.push({
                            "title":element.title,
                            "content":[{
                               "title":element.content_title
                            }]
                            })  
                    }else if(!datas[element.datas_id].introduceList[element.introduceList_id].content[element.content_id]||datas[element.datas_id].introduceList[element.introduceList_id].content[element.content_id].title!==element.content_title){
                        datas[element.datas_id].introduceList[element.introduceList_id].content.push({
                            "title":element.content_title
                         })
                    }
                })

                return datas
}