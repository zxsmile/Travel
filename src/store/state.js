let city = '西安'
 try{
   if(localStorage.city){
       city = localStorage.city
   }
 }catch(e){

 }

 export default{
   
        city:city,
        title:'',
        money:''
    
 }