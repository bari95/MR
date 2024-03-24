
let checkerArray = [];
export let saverArray=[]
export let idS=[];

function getRandom(str){
    let string="";
    let n=3;
      
     while(n!=0){
       var choice=Math.floor(Math.random() * str.length);
       string +=String(str[choice]);
       --n;
     }
     return string;
    }

export function createIds(){
  let string="abcdefghijklmnopqrstuvwxwz0123456789_";

   let string1=getRandom(string);
   if(checkerArray.length==0){
     checkerArray.push(string1);
     return string1;}
   
   else{
  if(checkerArray.indexOf(string1)==-1){
    checkerArray.push(string1);
      return string1
       }
     }
}
 
export function pushIds(id){
  let el=document.getElementById(String(id));
  let first=el.parentElement.children[0].textContent;

  idS.push(first);
  idS.push(first);
}

export function pushIds2(thiss){
  //let el=document.getElementById(String(id));
  let text=thiss.previousElementSibling.textContent
 // let first=el.parentElement.children[0].textContent;

  idS.push(text);
  idS.push(text);
}