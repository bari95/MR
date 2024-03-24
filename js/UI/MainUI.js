
import { currentDB,currentACC } from "../database/auth";
import { navBar,crossSign,searchIcon,deleteBar,hideVisibility,showVisibility,mainHeader,putOptions, defect,defect2} from "./HelperUI";
import { createIds,idS,saverArray,pushIds,pushIds2 } from "../utils/Identifiers";
import { updateSet,add } from "../database/Updating";
import { ButtonOptions,displayInput } from "../buttons/ButtonOptions";
import { arrowDropDown } from "./icons";
import { Header } from "./header";
import { Footer } from "./footer";

export function buttonInterface(value){
  var button = document.createElement('button');
  button.id = createIds();
  button.className = 'py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'; // Apply Tailwind CSS classes for styling
  button.textContent = value;
  
  // Add event listeners
  button.addEventListener('click', function() {
      defect2(this.id);
      add(this.id);
      pushIds(this.id);
      // isItSame(this.id);
      saver(this.id);
  });

  return button;
}

export function headerButton(value){
  var button = document.createElement('p'); // Change element type to button
  button.className = 'text-blue font-bold py-2 w-1/3 rounded mb-3'; // Add Tailwind classes
  button.id = createIds();
  button.textContent = value;

  // Add event listener
  button.addEventListener('click', function() {
      displayInput(this.id);
      muteOther(this.id);
      idS.push(this.textContent);
  });

  return button;
}

function muteOther(id){
  var el=document.getElementById(String(id));
  
 var parent=el.parentElement;
 var tb=parent.parentElement;
 
 for(let i=0; i<tb.children.length; i++){
  tb.children[i].children[1].style.display="none";
 
   }
   var nxt=el.nextElementSibling;
  el.style.display="block";
   nxt.style.display="block";
}

function saver(id){
  var el=document.getElementById(String(id));
  var value=el.innerHTML;
  var arr=new Array(id);
  arr.push(value);
  saverArray.push(arr);
}

function undo(){
  let defDB=currentDB[currentDB.length-1];
  
  //let r=faidas.pop();
  //alert(r);
    
    var total1=document.getElementById("test");
  if(saverArray.length==0){
    bgLoading("Kufikia hapa,haujaongeza au kutoa chochote");
    document.getElementById("screen1").textContent="...";
    
    document.getElementById("screen2").textContent="";
    
  }
    var lastArray=saverArray.pop();
    var id=lastArray[0];
    var value=lastArray[1];
    
    var lastEl=document.getElementById(String(id));
    var parent=lastEl.parentElement;
   
   
    var total=parent.children[parent.children.length-1];
    //database changes
  
  let request=indexedDB.open(defDB);
  
  request.onsuccess=()=>{
    let db=request.result;
    
    let txn=db.transaction(mp,"readwrite");
    let store=txn.objectStore(mp);
    
    let query=store.get(parent.id);
    
    query.onsuccess=()=>{
      let match=query.result;
      
      total.innerHTML=Number(total.innerHTML)-Number(value);
      let query2=store.put({name:match.name,jumla:total.innerHTML,values:match.values,bei:match.bei,bei_Kununua:match.bei_Kununua,lengo:match.lengo,unit:match.unit,mzigo:match.mzigo});
      
      query2.onsuccess=()=>{
       // console.log(`${query2.result} was added`);
      }
  query2.onerror=()=>{
       alert(query2.result.error);}
    }
     query.onerror=()=>{
       alert(query.result.error);
     }
   
   txn.oncomplete=()=>{
     db.close();
         }
  
      }
  updateSet();
  
  }

export function printState(){
    // console.log(`Here is ts2 ${++ts2}`);
    if(currentDB.length==0){
      alert ("currentD IS EMPTIED");
      return;}
    else{
      
     // let msg=showMessage("inaandaa daftari...")
     
      
     let defDB=currentDB[currentDB.length-1];
     
     let mp1=currentACC[currentACC.length-1];
     
   
     
    // navBar(14,12);
   //  searchIcon();
     deleteBar(["loginPage","sideBar","optionButton","title1","deleteSignMapato"]);
     
    // showVisibility(["printState222"]);
    Header(mainHeader());
     Footer()
     
    
      
   
      
        let table1=document.getElementById('table');
          
          //table2.style.display="none";
         console.log("table1 is ", table1)
          table1.innerHTML="";
     
       let test=document.getElementById("test");
     
       var request=indexedDB.open(defDB);
       request.onsuccess=()=>{
       let db1=request.result;
       
       db1.onversionchange=()=>{
         db1.close()
         location.reload();
       }
       
       
       //alert(`curren objectStore is ${mp1},\n currentDB is ${defDB}`);
       let currentCount=0,totalCount;
       
       let txn=db1.transaction(mp1,"readonly");
       let object=txn.objectStore(mp1);
      
      let countRequest=object.count();
      
      countRequest.onsuccess=()=>{
        
        totalCount=countRequest.result;
        
      }
      
       
       object.openCursor().onsuccess=(e)=>{
         let cursor=e.target.result;
         currentCount +=1;
         
         let pcn=(currentCount/totalCount)*100;
         
         //showLoading("loadingBar",pcn);
         //console.log(currentCount,totalCount);
        // console.log(cursor)
         if(cursor !=null && cursor.value.name=="total"){
             test.innerHTML=cursor.value.total;
         }
         if(cursor!=null && cursor.value.name !="total" && cursor.value.name != "mtaji"){
           
           if(mp1=="mapato1"){
           
          
           let item=cursor.value.name;
         
           let div = document.createElement("div");
           let buttonDiv = document.createElement("div");
           buttonDiv.style="display:flex; flex-wrap:wrap; gap:7px"
           //div.className= "bg-black flex flex-col items-center m-4 p-4 gap-10"
           //div.classList.add("flex", "flex-col", "p-4"); // Apply Flexbox and padding classes
          // div.classList.add("gap-10"); // Apply Tailwind gap class to control spacing between children
           div.id = `${item}`;
           

           let p = document.createElement("p");
           let p2= document.createElement("div");
           p2.style="display:flex;border-radius:10px;padding:4px;background:rgba(0,0,0,.1);"
           p.style="margin-left:auto"; // Apply Tailwind text color class
           p.innerHTML = cursor.value.jumla;
           p2.appendChild(p)
           let productHeaderDiv = document.createElement("div");
           productHeaderDiv.style="display:flex;gap:7px";
           productHeaderDiv.appendChild(headerButton(item));
           productHeaderDiv.appendChild(arrowDropDown());
            let header=productHeaderDiv
            let input=ButtonOptions();
            
            div.appendChild(header);
            div.appendChild(input);
     
   //add button values in div tag;   
         // console.log(cursor)
           if(cursor.value.values != undefined || null && cursor.value.values.length >0){ for(let i=0; i<cursor.value.values.length; i++){
                buttonDiv.appendChild(buttonInterface(cursor.value.values[i]));
            }
            div.appendChild(buttonDiv);
            div.appendChild(p2);
            table1.appendChild(div);
           }
           else{
            div.appendChild(buttonDiv);
             div.appendChild(p2);
            table1.appendChild(div);
           }
         
           cursor.continue();}
           if(mp1=="matumiz8"){
             let item=cursor.value.name;
             
            let div=document.createElement("div");
           
            var p=document.createElement("p");
            p.className="pFooter";
            p.innerHTML=cursor.value.jumla;
            
            div.style.display="flex";
            div.style.gap="7px";
            div.id=`${item}`;
          
            var header=headerButton(item);
            var input=`<div style="display:none; width:70px;">
            <button class="buttons" id=\"${createIds()}\" onclick="showInput(this.id)">Ingiza Thamani</button><input type="number" class="buttons" id=\"${createIds()}\" placeholder="ingiza thamani" style="display:none;font-size:0.7em;" onchange="ingizaValue(this.id,this.value);" required/>
            
            <button id=\"${createIds()}\" onclick="showDown(this.id)" class="buttons">Futa/edit</button>
            
            <div style='display:none;'><input type="text" placeholder='edit' class="inputs" id=\"${createIds()}\" oninput='hariri(this.id);' onchange='hariri2(this.id);' />
            
            <button class="buttons" id=\"${createIds()}\" onclick='futa(this.id);'>futa</button>
            
            </div>
            
        
            
            
          
              
            <button onclick="getObject(this);" class="buttons" style="">Maelezo</button>
                       
            <button onclick="formBox2('group');" class="buttons" style="">Badili Group</button>     
            </div>`;
            
            div.innerHTML +=header;
            div.innerHTML +=input;
     
   //add button values in div tag;   
         // console.log(cursor)
           if(cursor.value.values != undefined || null && cursor.value.values.length >0){ for(let i=0; i<cursor.value.values.length; i++){
                div.innerHTML +=buttonInterface(cursor.value.values[i]);
            }
            
            div.appendChild(p);
            table1.appendChild(div);
           }
           else{
             div.appendChild(p);
            table1.appendChild(div);
           }
         
           cursor.continue();
           }
         }
   
       
     }
     txn.oncomplete=()=>{
       db1.close();
       updateSet();
       putOptions();   
       //msg.remove();
   if (navigator.storage && navigator.storage.persist){
     navigator.storage.persist().then((persistent) => {
       console.log(persistent)
       if (persistent) {
         console.log("Storage will not be cleared except by explicit user action");
       } else {
         console.log("Storage may be cleared by the UA under storage pressure.");
       }
     });
   }
   
     }
       
       
   
   
   }
   // var par=rekodi.parentElement;
       //   par.style.display="none";
          // rekebishaNaN();
   }
   }