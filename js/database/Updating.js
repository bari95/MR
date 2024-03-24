

import { shortenNumber } from "../utils/numbers";
import { mp,currentDB,currentACC} from "./auth";

let nowItem2 = "";
let faidas=[];

function mzigoUmeisha(bidhaa){
  if(document.getElementById("mzigoUmeisha")){
    document.getElementById("mzigoUmeisha").remove();
    document.getElementById("bg").remove();}
    
    //the box;
  let div=document.createElement("div");
  div.id="mzigoUmeisha";
  div.style="display:flex;gap:10px;justify-content: center;position:fixed;top:30%; left:4%;width:92%;height:25%;z-index:10000; background:rgba(59,99,59,0.8);border-radius:10px;border:1px solid rgba(255,255,255,0.5);"
  div.innerHTML=`
  <p style=" vertical-align:middle; text-align:center; position:relative; top:16%;">Mzigo wa ${bidhaa} tayari umeisha!<br>Unaongeza ?<br><br>
  <button style="position:relative; left:46%;border-radius:25%; background:none;color:gold;border:1px solid white;width:12%;" onclick="formBox2()">ok</button>
   <button style="position:relative; left:-46%;width:12%; border-radius:25%; background:none;color:gold;border:1px solid white;" onclick="rejectD()">x</button></p>`;
  
  document.body.appendChild(div);
  let bg=document.createElement("div");
  bg.id="bg";
  bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,.5);margin-left:-10%;margin-top:-10%;";
  
  document.body.appendChild(bg);
  return true;
}  


function recordingObject(name,price,group){
  let el=document.getElementById("screen1").innerHTML;
  // alert(el);
  
  let rd1=currentRd[currentRd.length-1];
  
   let qt=getWord(el);
   
  /* if(el=="..."){
     productNames.length=0;
     priceBag.length=0;
    return;
  } */
   let qt2=getWord2(qt);
   
   let fai=faidas.pop()*qt2;
   //alert(`qt is ${qt}\n qt2 is ${qt2} \n faida is ${fai}`);
  // console.log(`array`,faidas)
   document.getElementById("screen1").innerHTML="Hongera! Imerekodiwa";
   document.getElementById("screen2").innerHTML="";
   
  if(rd1==rd){
    
    return {name:name,price:price,Qt:qt,date:(function(){ return putDate(); }()),hrs:(function(){ return putHR()}()),faida:fai};}
  if(rd1==rd2){
    
    return {name:name,price:price,date:(function(){ return putDate(); }()),hrs:(function(){ return putHR()}()), group:group};}
    
  }
  

function putOptions(){
  
  list.innerHTML=`<option>zote</option>`;
  
  let arr=[];
  let mp1=currentACC[currentACC.length -1]
  let defDB=currentDB[currentDB.length-1]
  
  
  let request=indexedDB.open(defDB);
    request.onsuccess=()=>{
      let db1=request.result;
      
      let txn=db1.transaction(mp1,"readonly");
      let object=txn.objectStore(mp1);
      
      object.openCursor().onsuccess=(e)=>{
        let cursor=e.target.result;
        if(cursor){
    let option=document.createElement("option");
    
    let keys=cursor.value.name;
    
    
    if(!arr.includes(keys[0]) && (keys!="total" && keys !="mtaji")){ option.textContent=keys[0];
      list.appendChild(option)
              }
    arr.push(keys[0]);
    cursor.continue();
       }
       object.openCursor.onerror=()=>{
         console.log("put options error",object.openCursor.result.error);
       }
       
       txn.oncomplete=()=>{
        // console.log("Put options transaction finished successful");
         db1.close();
        }
      }
    }
    
    request.onerror=()=>{
      console.log("put options request failed",request.error)
    }
      
      
      // putOptions2();
   }

  export function add(id){
     
     let defDB=currentDB[currentDB.length-1];
     
     let mp1=currentACC[currentACC.length-1];
     
     var el=document.getElementById(String(id));
    
     
     var test=document.getElementById("test");
     var parent=el.parentElement.parentElement;
     var item=parent.id;
     
     var request=indexedDB.open(defDB);
     
     request.onsuccess=()=>{
     let db=request.result;
     db.onversionchange=()=>{
       db.close();
       alert("Database version changed, Please, reload a page");
       window.location.reload();
     }
     
     let txn=db.transaction(mp1,"readwrite");
     let store=txn.objectStore(mp1);
     
     let query=store.get(item);
     
     query.onsuccess=()=>{
       var match=query.result;
       
       if(match !==undefined){
        
        if(mp1=="mapato1"){
     
     let thisNumber=el;
     var total=parent.children[parent.children.length-1].children[0];
     //alert(total.children[0].innerHTML)
   
   // Last element total in the div;
   let jumla=Number(thisNumber.innerHTML)+Number(total.innerHTML);
        
      let mzigo1=Number(match.mzigo)-Number(thisNumber.innerHTML/match.bei).toFixed(2);
      //alert(`bei kuuza ${match.bei} \n bei kununua ${match.bei_Kununua}`);
     
    
     
      let faida=Number(match.bei)-Number(match.bei_Kununua);
      console.log("bei "+match.bei,match)
      
      faidas.push(faida);
      
   function showScreen2(id,match1){
    let el=document.getElementById(String(id));
   
    let parentId=el.parentElement.id;
    var screen2=document.getElementById("screen2");
   var label=document.getElementById("screen1");
   
   if(parentId==nowItem2){
     screen2.innerHTML=`${Number(screen2.textContent)+Number(el.textContent)}`;
   
   let jumlaNow=Number(screen2.innerHTML)
   
     label.innerHTML=nowItem2+` ${match1.unit} ${(Number(jumlaNow)/Number(match1.bei)).toFixed(2)}, Tshs `;
     
   }
   else{
     screen2.innerHTML=`${el.textContent}`;
     let jumlaN2=Number(screen2.innerHTML);
     label.innerHTML=parentId +` ${match1.unit} ${(jumlaN2/match1.bei).toFixed(2)}, Tshs` ;
     
   }
     nowItem2=parentId;
    
   }
        
      if(match.mzigo <1){
      /*  while(saverArray.length !=0){
          undo();
          saverArray.pop();
        } */
        store.put({name:match.name,jumla:match.jumla,values:match.values,bei:match.bei,bei_Kununua:match.bei_Kununua,lengo:match.lengo,unit:match.unit,mzigo:0});
        mzigoUmeisha(match.name);
        
      //set value at ubao;  
        document.getElementById("screen2").innerHTML="";
        document.getElementById("screen1").innerHTML="...";
        productNames.splice(productNames.length-1,1);
      /*  if(productNames[productNames.length-1] !="..."){
          let prod=productNames[length];
        productNames.length=0;
        alert(prod);
        productNames.push(prod);}*/
       
       
      }
      else {
        match.jumla=jumla;
        store.put({name:match.name,jumla:match.jumla,values:match.values,bei:match.bei,bei_Kununua:match.bei_Kununua,lengo:match.lengo,unit:match.unit,mzigo:mzigo1});
      //  showScreen2(id,match);
       // total.innerHTML=jumla;
      
        showScreen2(id,match);
        total.innerHTML=jumla;
      }
        
        }
        if(mp1=="matumiz8"){ 
        let thisNumber=el;
     let total=parent.children[parent.children.length-1];
   
   // Last element total in the div;
     let jumla=Number(thisNumber.innerHTML)+Number(total.innerHTML);
        
      
   
      
      
   function showScreen2(id,match1){
    let el=document.getElementById(String(id));
   
    let parentId=el.parentElement.id;
    var screen2=document.getElementById("screen2");
   var label=document.getElementById("screen1");
   
   if(parentId==nowItem2){
     screen2.innerHTML=`${Number(screen2.textContent)+Number(el.textContent)}`;
   
   let jumlaNow=Number(screen2.innerHTML)
   
     label.innerHTML=nowItem2+`, Tshs `;
     
   }
   else{
     screen2.innerHTML=`${el.textContent}`;
     let jumlaN2=Number(screen2.innerHTML);
     label.innerHTML=parentId +`, Tshs` ;
     
   }
     nowItem2=parentId;
   }
        
      
      grp2.push(match.group)
      //alert(match.group);
      console.log(match);
      
        match.jumla=jumla;
        store.put({name:match.name,jumla:match.jumla,values:match.values,group:match.group,date:match.date});
   
      
        showScreen2(id,match);
        total.innerHTML=jumla;
      
        
          }
        }
     }
     query.onerror=()=>{
       console.log("Additional problem",query.result)
     }
     txn.oncomplete=()=>{
       //console.log("Addition went successful, transaction completed!");
       db.close();
     }
     updateSet();
   }
     request.onerror=()=>{
       console.log("Error on opening database",request.error);
     }
   }  

export function addNew(name,value){
  let db=currentDB[currentDB.length-1]
  let mp1=currentACC[currentACC.length -1];
  let rd1=currentRd[currentRd.length-1];
  let request=indexedDB.open(db);
   
   request.onsuccess=()=>{
   var db=request.result;
   db.onversionchange=()=>{
     db.close();
     alert("Database version changed, Please, reload a page")
   }
   
   let txn=db.transaction(mp1,"readwrite");
   let store=txn.objectStore(mp1);
   
   let query=store.get(name);
   
   query.onsuccess=()=>{
     let match=query.result;
     
     
     if(match !==undefined){
     //  console.log(`line 1001 ${match.name}`,match.values)
     
     console.log(match)
       let arr=match.values;
       arr.push(value);
      if(rd1==rd){  
        let rq=store.put({name:match.name,jumla:match.jumla,values:arr,bei:match.bei,bei_Kununua:match.bei_Kununua,lengo:match.lengo,unit:match.unit,mzigo:match.mzigo});
      rq.onsuccess=()=>{
        //  alert("line 1007",`${rq.result} was added successful`)
        }
      }
      if(rd1==rd2){  
        let rq=store.put({name:match.name,jumla:match.jumla,values:arr, group:match.group,date:match.date});
      rq.onsuccess=()=>{
        //  alert("line 1007",`${rq.result} was added successful`)
        }
      } 
        
     }
     else{
       alert("No match was found");
     }
   }
   
   query.onerror=()=>{
     console.lo(query.result.error);
   }
   
   txn.oncomplete=()=>{
     db.close();
   }
 }
         
        
       printState();
      
      
     }

export function ingizaValue(id,value){
  let mp1=currentACC[currentACC.length-1];
  
   var el=document.getElementById(String(id));
   var parent=el.parentElement;
   var prev=parent.previousElementSibling;
   var name=prev.innerHTML;
  
   addNew(name,value,mp1);
   updateSet();
 }
 

export function updateSet(){
    let defDB=currentDB[currentDB.length-1];
    let ac=currentACC[currentACC.length -1];
    let id,el,lastCh;
    let jumla1=0;
    
  //defDB=currentDB[currentDB.length-1]
   
    
    let request=indexedDB.open(defDB);
    request.onsuccess=()=>{
      let db1=request.result;
      
      let txn=db1.transaction(ac,"readwrite");
      var object=txn.objectStore(ac);
      
      object.openCursor().onsuccess=(e)=>{
        
       // alert("updating set");
        let cursor=e.target.result;
        if(cursor){
      //let id=cursor.value.name;
      if(cursor.value.jumla){
        jumla1=Number(jumla1);
        jumla1 +=Number(cursor.value.jumla);
       // jumla2 +=Number(cursor.value.bei_Kununua);
       // console.log(cursor.value.jumla, "added successful!")
      }
    
  
      
      cursor.continue();
     
    }
    
    else{
      if(ac=="mapato1"){object.put({name:"total",total:jumla1});
     // object.put({name:"mtaji",total:jumla2});
     }
      
      var test=document.getElementById("test");
      //test.style.fontSize="30%"
        test.innerHTML=shortenNumber(jumla1);
        test.style.fontSize="70%"
        test.style.paddingTop="7px";
     // console.log("There no more records")
     }}
      
     object.openCursor.onerror=()=>{
       console.log("error",object.error);
      }
      
      txn.oncomplete=()=>{
      //  console.log("Transaction completed successful!");
        db1.close();
      }
    //test.innerHTML=localStorage.getItem("mapato")
  }
  
    function mz(){
     
      let acc=currentACC[currentACC.length-1];
      
      let defDB=currentDB[currentDB.length-1];
      
      let request=indexedDB.open(defDB);
    request.onsuccess=()=>{
      let jumla2=0;
      let jumla3=0;
      let db2=request.result;
      
      let txn=db2.transaction(acc,"readwrite");
      var object=txn.objectStore(acc);
      
      object.openCursor().onsuccess=(e)=>{
        
       // alert("updating set");
        let cursor=e.target.result;
        if(cursor){
          //console.log(cursor.value)
      //let id=cursor.value.name;
      if(cursor.value.bei_Kununua){
      //  jumla1=Number(jumla1);
      //  jumla1 +=Number(cursor.value.jumla);
        jumla2 +=Number(cursor.value.bei_Kununua*cursor.value.mzigo);
        jumla3 +=Number(cursor.value.bei*cursor.value.mzigo)
       // alert(`mtaji ${jumla2}`);
       // console.log(cursor.value.jumla, "added successful!")
        cursor.continue();
                 }
      else{
     // alert(jumla2);
      object.put({name:"mtaji",total:jumla2, total2:jumla3});
      
           }
            }
    
    
      }
      
     object.openCursor.onerror=()=>{
       console.log("error",object.result);
      }
      
      txn.oncomplete=()=>{
       // console.log("Transaction completed successful!");
        db2.close();
      }
         }};
         mz();
      }
  
      