const express = require('express')
const mysql = require('mysql')
const detail=require('./module/detail')
const swiperlistdetail=require('./module/swiperlistdetail')
const introdeuce=require('./module/introduce')
const swiperlistintrodeuce=require('./module/swiperlistintroduce')
const db = mysql.createPool({host:'localhost',user:'root',password:'081232xl',database:'Travel'})


module.exports=function(){
    var router = express.Router();
    
     router.get('/',function(req,res){
         let home_data ={}
        db.query('SELECT * FROM beijing_swiper', (err,data)=>{
            let SwiperList={}
            if(err){
                console.log(err)
                res.status(500).send('database error').end();
            }else{
                 SwiperList['北京'] = data
                 db.query('SELECT * FROM shanghai_swiper', (err,data)=>{
                    
                    if(err){
                        console.log(err)
                        res.status(500).send('database error').end();
                    }else{
                         SwiperList['上海'] = data
                         home_data.SwiperList = SwiperList
                         
                         db.query('SELECT * FROM beijing_iconlist', (err,data)=>{
                            let IconList={}
                            if(err){
                                console.log(err)
                                res.status(500).send('database error').end();
                            }else{
                                 IconList['北京'] = data
                                 db.query('SELECT * FROM shanghai_iconlist', (err,data)=>{
                                    
                                    if(err){
                                        console.log(err)
                                        res.status(500).send('database error').end();
                                    }else{
                                         IconList['上海'] = data
                                         home_data.IconList = IconList
                                         
                                         db.query('SELECT * FROM beijing_recommandlist', (err,data)=>{
                                            let recommandList={}
                                            if(err){
                                                console.log(err)
                                                res.status(500).send('database error').end();
                                            }else{
                                                recommandList['北京'] = data
                                                 db.query('SELECT * FROM shanghai_recommandlist', (err,data)=>{
                                                    
                                                    if(err){
                                                        console.log(err)
                                                        res.status(500).send('database error').end();
                                                    }else{
                                                        recommandList['上海'] = data
                                                         home_data.recommandList = recommandList
                                                         
                                                         db.query('SELECT * FROM beijing_weekendlist', (err,data)=>{
                                                            let weekendList={}
                                                            if(err){
                                                                console.log(err)
                                                                res.status(500).send('database error').end();
                                                            }else{
                                                                weekendList['北京'] = data
                                                                 db.query('SELECT * FROM shanghai_weekendlist', (err,data)=>{
                                                                    
                                                                    if(err){
                                                                        console.log(err)
                                                                        res.status(500).send('database error').end();
                                                                    }else{
                                                                        weekendList['上海'] = data
                                                                         home_data.weekendList = weekendList
                                                                         
                                                                          db.query('SELECT * FROM scenic', (err,data)=>{
                                                                            var scenic = {'5A':[],'4A':[],'3A':[],'2A':[],'A':[]}
                                                                            if(err){
                                                                                console.log(err)
                                                                                res.status(500).send('database error').end();
                                                                            }else{
                                                                                data.forEach(element=>{
                                                                                    switch(element.grade){
                                                                                        case '5A':
                                                                                          scenic['5A'].push(element)
                                                                                        break;
                                                                                        case '4A':
                                                                                        scenic['4A'].push(element)
                                                                                        break;
                                                                                        case '3A':
                                                                                        scenic['3A'].push(element)
                                                                                        break;
                                                                                        case '2A':
                                                                                        scenic['2A'].push(element)
                                                                                        break;
                                                                                        case 'A':
                                                                                        scenic['A'].push(element)
                                                                                        break;
                                                                                    }
                                                                                    home_data.scenic = scenic
                                                                                })
                                                                             res.send(home_data).end();
                                                                            }
                                                                        })
                                                                        
                                                                    }
                                                                })
                                                                
                                                            }
                                                        })
                                                        
                                                    }
                                                })
                                                
                                            }
                                        })
                                        
                                    }
                                })
                                
                            }
                        })
                    }
                })
                
            }
        })
      
     })
    router.get('/city',function(req,res){
        var city_data = {}
        db.query('SELECT * FROM hotCities',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end();
            }else{
                city_data.hotCities=data 
                db.query('SELECT * FROM city_spell',(err,data)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('database error').end();
                    }else{
                        let cities={'A':[],'B':[],'C':[],'D':[],'E':[],'F':[],'H':[],'J':[],'K':[],'L':[],'M':[],'N':[],'P':[],'Q':[],'R':[],'S':[],'T':[],'X':[],'Y':[],'Z':[]}

                       data.forEach(element => {
                           switch(element.spell[0]){
                               case 'a' : 
                                cities['A'].push(element)
                               break;
                               case 'b' : 
                               cities['B'].push(element)
                               break;
                               case 'c' : 
                               cities['C'].push(element)
                               break;
                               case 'd' : 
                               cities['D'].push(element)
                               break;
                               case 'e' : 
                               cities['E'].push(element)
                               break;
                               case 'f' : 
                               cities['F'].push(element)
                               break;
                               case 'h' :
                               cities['H'].push(element)
                               break;
                               case 'j' : 
                               cities['J'].push(element)
                               break;
                               case 'k' : 
                               cities['K'].push(element)
                               break;
                               case 'l' : 
                               cities['L'].push(element)
                               break;
                               case 'm' : 
                               cities['M'].push(element)
                               break;
                               case 'n' : 
                               cities['N'].push(element)
                               break;
                               case 'P' : 
                               cities['P'].push(element)
                               break;
                               case 'q' : 
                               cities['Q'].push(element)
                               break;
                               case 'r' : 
                               cities['R'].push(element)
                               break;
                               case 's' : 
                               cities['S'].push(element)
                               break;
                               case 't' : 
                               cities['T'].push(element)
                               break;
                               case 'x' : 
                               cities['X'].push(element)
                               break;
                               case 'y' : 
                               cities['Y'].push(element)
                               break;
                               case 'z' : 
                               cities['Z'].push(element)
                               break;
                           }
                           city_data.cities=cities 
                       });
                       res.send(city_data).end()
                    }
                })
            }
        })
    })
    router.get('/swiper-list',function(req,res){
        let swiperList = {}
        db.query('SELECT * FROM beijing_swiperlist',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end();
            }else{
                let iconList_id_max=0
                data.forEach(element=>{
                    if(element.iconList_id>iconList_id_max){
                         iconList_id_max = element.iconList_id
                     }
                })
                 
                data.forEach(element=>{
                     let list=[]
                for(let j=0;j<= iconList_id_max;j++){
                    list.push({title:'',recommandList:[]})
                }
                for(let i=0;i<data.length;i++){
                    list[data[i].iconList_id].recommandList[data[i].list_id] = data[i] 
                    list[data[i].iconList_id].title = data[i].title
                }
                swiperList['北京']=list
                
                })
                db.query('SELECT * FROM shanghai_swiperlist',(err,data)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('database error').end();
                    }else{
                        
                        let iconList_id_max=0
                        data.forEach(element=>{
                        if(element.iconList_id>iconList_id_max){
                             iconList_id_max = element.iconList_id
                         }
                    })
        
                        data.forEach(element=>{
                             let list=[]    
                        for(let j=0;j<=iconList_id_max;j++){
                            list.push({title:'',recommandList:[]})
                        }
                        for(let i=0;i<data.length;i++){
                            list[data[i].iconList_id].recommandList[data[i].list_id] = data[i] 
                            list[data[i].iconList_id].title = data[i].title
                        }
                        swiperList['上海']=list
                        })
                        res.send(swiperList).end()
                    }
                })
                
            }
        })
    })

    router.get('/swiper-list-detail',function(req,res){
        let swiperListDetail ={}
        db.query('SELECT * FROM beijing_swiperlistdetail',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('datebase error').end()
            }else{
                
               swiperListDetail['北京']=swiperlistdetail(data)
               db.query('SELECT * FROM shanghai_swiperlistdetail',(err,data)=>{
                if(err){
                    console.log(err)
                    res.status(500).send('datebase error').end()
                }else{
                    
                   swiperListDetail['上海']=swiperlistdetail(data)
                   res.send(swiperListDetail).end()
                   
                }
            })
            }
        })
    })
    router.get('/recommend-detail',function(req,res){
        let recommedDetail={}
        db.query('SELECT * FROM beijing_recommenddetail',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end()
            }else{
             recommedDetail['北京']=detail(data)
             db.query('SELECT * FROM shanghai_recommenddetail',(err,data)=>{
                if(err){
                    console.log(err)
                    res.status(500).send('database error').end()
                }else{
                    recommedDetail['上海']=detail(data)
                    res.send( recommedDetail).end()
                }
            })
            }
        })
    })

    router.get('/weekend-detail',function(req,res){
        let weekendDetail={}
        db.query('SELECT * FROM beijing_weekenddetail',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end()
            }else{
               weekendDetail['北京']=detail(data)
             db.query('SELECT * FROM shanghai_weekenddetail',(err,data)=>{
                if(err){
                    console.log(err)
                    res.status(500).send('database error').end()
                }else{
                    weekendDetail['上海']=detail(data)
                    res.send(weekendDetail).end()
                }
            })
            }
        })
    })
    router.get('/search-detail',function(req,res){
        let searchDetail={}
        db.query('SELECT * FROM searchdetail',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end()
            }else{
                searchDetail=detail(data)
                res.send(searchDetail).end()
            }
        })
    })
    router.get('/swiperlist-introduce',function(req,res){
        let swiperlistIntroduce={}
        db.query('SELECT * FROM beijing_swiperlistintroduce',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end()
            }else{
                swiperlistIntroduce['北京']=swiperlistintrodeuce(data)
                db.query('SELECT * FROM shanghai_swiperlistintroduce',(err,data)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('database error').end()
                    }else{
                        swiperlistIntroduce['上海']=swiperlistintrodeuce(data)
                        res.send(swiperlistIntroduce).end()
                     
                    } 
                    
                })
               
            }
        })
    })
    router.get('/recommend-introduce',function(req,res){
        let recommendIntroduce={}
        db.query('SELECT * FROM beijing_recommendintroduce',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end()
            }else{
                recommendIntroduce['北京']=introdeuce(data)
                db.query('SELECT * FROM shanghai_recommendintroduce',(err,data)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('database error').end()
                    }else{
                        recommendIntroduce['上海']=introdeuce(data)
                        res.send(recommendIntroduce).end()
                    }
                })
            }
        })
    })
    router.get('/weekend-introduce',function(req,res){
        let weekendIntroduce={}
        db.query('SELECT * FROM beijing_weekendintroduce',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end()
            }else{
                weekendIntroduce['北京']=introdeuce(data)
                db.query('SELECT * FROM shanghai_weekendintroduce',(err,data)=>{
                    if(err){
                        console.log(err)
                        res.status(500).send('database error').end()
                    }else{
                        weekendIntroduce['上海']=introdeuce(data)
                        res.send(weekendIntroduce).end()
                    }
                })
            }
        })
    })
    router.get('/search-introduce',function(req,res){
        let searchIntroduce={}
        db.query('SELECT * FROM searchintroduce',(err,data)=>{
            if(err){
                console.log(err)
                res.status(500).send('database error').end()
            }else{
                searchIntroduce=introdeuce(data)
                res.send(searchIntroduce).end()
            }
        })
    })
    return router
}
