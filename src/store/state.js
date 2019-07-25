let city = '西安'
let title = ''
let money = ''
let year = ''
let month = ''
let day = ''
let date = ''
let id = ''

 try{
   if(localStorage.city){
       city = localStorage.city
   }
   if(localStorage.title){
    title = localStorage.title
  }
  if(localStorage.money){
    money = localStorage.money
  }
  if(localStorage.year){
    year = localStorage.year
  }
  if(localStorage.month){
    month = localStorage.month
  }
  if(localStorage.day){
    day = localStorage.day
  }
  if(localStorage.date){
    date = localStorage.date
  }
  if(localStorage.id){
    id = localStorage.id
  }
 }catch(e){

 }
 


 export default{
   
        city:city,
        title:title,
        money:money,
        year:year,
        month:money,
        day:day,
        date:date,
        id:id
       
        // parentId:0
    
 }