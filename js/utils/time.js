

//saa kwa kiswahili;
export function saa(hr){
    switch(hr){
      case 4:return 10;
      break;
      case 5:return 11;
      break;
      case 6:return 12;
      break;
      case 7:return "01";
      break;
      case 8:return "02";
      break;
      case 9:return "03";
      break;
      case 10:return "04";
      break;
      case 11:return "05";
      break;
      case 12:return "06";
      break;
      case 13:return "07";
      break;
      case 14:return "08";
      break;
      case 15:return "09";
      break;
      case 16:return 10;
      break;
      case 17:return 11;
      break;
      case 18:return 12;
      break;
      case 19:return "01";
      break;
      case 20:return "02";
      break;
      case 21:return "03";
      break;
      case 22:return "04";
      break;
      case 23:return "05";
      break;
      case 0:return "06";
      break;
      case 1:return "07";
      break;
      case 2:return "08";
      break;
      case 3:return "09";
      break;
    }
  }
  
export function putHR(){
   
   let wakati=["Asubuhi","Mchana","Alasiri","Jioni","Usiku"];
   let date=new Date();
   
   let hr=date.getHours();
   let mins=date.getMinutes();
   let secs=date.getSeconds();
   
   if(mins <10){
     mins="0" +mins;
   }
   if(secs <10){
     secs = "0" + secs;
   }
   
   if(hr>=4 && hr <12){
     hr=saa(hr);
     return "Saa "+hr+":"+mins+" Asubuhi";
   }
   if(hr>=12 && hr<15){
     hr=saa(hr);
     return "Saa "+hr+":"+mins+":" +secs +" Mchana";
   }
   if(hr==15){
    hr=saa(hr);
     return "Saa "+hr+":"+mins+":" +secs +" Alasiri";
   }
   if(hr>15 && hr<19){
     hr=saa(hr);
     return "Saa "+hr+":"+mins+":"+secs+" Jioni";
   }
   if(hr>=19){
     hr=saa(hr);
     return "Saa "+hr+":"+mins+":"+secs+" Usiku";
   }
   if(hr<4){
     hr=saa(hr);
     return "Saa "+hr+":"+mins+":"+secs+" Usiku";
   }
 } 
    
export function putDate(id){
        var siku=["J\'pl","J\'tatu","J\'nne","J\'tano","Alh","Iju","Jmos"];
     
        var date=new Date();
        var day=date.getDate();
        if(day <10){
          day="0"+String(day);
        }
        var month=Number(date.getMonth())+1;
        if(month <10){
          month="0"+String(month);
        }
        var yr=date.getFullYear();
        var day2=date.getDay();
        for(let i=0; i<siku.length; i++){
          if(i==day2){
            if(id){
              if(document.getElementById(id)){
                document.getElementById(id).innerHTML= dayBack +"/"+monthBack +"/"+yr
              }
            }

        return day+"/"+month+"/"+yr;
      }
    }
  }
  
 export let jana1=0;
  
export function putJana(id){
   // jana1 +=1;
        var siku=["J\'pl","J\'tatu","J\'nne","J\'tano","Alh","Iju","Jmos"];
     

        
    let d=new Date();
    let today=d.getDate();
    
  //setting date out;
  d.setDate(today-(++jana1));
  let weekDay=d.getDay();
    
    let dayBack=d.getDate();
    if(dayBack <10){
      dayBack="0"+String(dayBack);
    }
    let monthBack=Number(d.getMonth()) + 1;
    if(monthBack <10){
      monthBack= "0"+String (monthBack);
    }
    let yr=d.getFullYear()
for(let i=0; i<siku.length; i++){
    if(i==weekDay){  
      if(id){
        if(document.getElementById(id)){
          document.getElementById(id).innerHTML= dayBack +"/"+monthBack +"/"+yr
        }
      }
      return dayBack +"/"+monthBack +"/"+yr;}
     }
  }
  
export function putJana2(k){
  k=k+jana1;
   // jana1 +=1;
  let siku=["J\'pl","J\'tatu","J\'nne","J\'tano","Alh","Iju","Jmos"];
     

        
    let d=new Date();
    let today=d.getDate();
    
  //setting date out;
  d.setDate(today-(k));
  let weekDay=d.getDay();
    
    let dayBack=d.getDate();
    if(dayBack <10){
      dayBack="0"+String(dayBack);
    }
    let monthBack=Number(d.getMonth()) + 1;
    if(monthBack <10){
      monthBack= "0"+String (monthBack);
    }
    let yr=d.getFullYear()
for(let i=0; i<siku.length; i++){
    if(i==weekDay){  return siku[i]+ " "+dayBack +"/"+monthBack +"/"+yr;}
     }
  }

//console.log(putJana2(2));
 
 
export function putKesho(id){
   // jana1 +=1;
        var siku=["J\'pl","J\'tatu","J\'nne","J\'tano","Alh","Iju","Jmos"];
     

        
    let d=new Date();
    let today=d.getDate();
    
  //setting date out;
  d.setDate(today-(--jana1));
  let weekDay=d.getDay();
    
    let dayBack=d.getDate();
    if(dayBack <10){
      dayBack="0"+String(dayBack);
    }
    let monthBack=Number(d.getMonth()) + 1;
    if(monthBack <10){
      monthBack= "0"+String (monthBack);
    }
    let yr=d.getFullYear()
for(let i=0; i<siku.length; i++){
    if(i==weekDay){  
      if(id){
        if(document.getElementById(id)){
          document.getElementById(id).innerHTML= dayBack +"/"+monthBack +"/"+yr
        }
      }
      return dayBack +"/"+monthBack +"/"+yr;}
     }
  }
//   console.log(putJana());
 let s=0;

 export function getCurrentDate() {
  const currentDate = new Date();
  return currentDate.toDateString();
}

 