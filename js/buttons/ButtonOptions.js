
import { createIds } from "../utils/Identifiers";


function ButtonOptions() {
    // Your function implementation here
    let complexElement = document.createElement('div');
    complexElement.style.display = 'none';
    complexElement.style.width = '70px';
    
    let button1 = document.createElement('button');
    button1.className = 'buttons';
    button1.id = createIds();
    button1.textContent = 'Ingiza Thamani';
    button1.onclick = function() {
        showInput(this.id);
    };
    
    let input = document.createElement('input');
    input.type = 'number';
    input.className = 'inputs';
    input.id = createIds();
    input.placeholder = 'ingiza thamani';
    input.style.display = 'none';
    input.style.fontSize = '0.7em';
    input.onchange = function() {
        ingizaValue(this.id, this.value);
    };
    input.required = true;
    
    let button2 = document.createElement('button');
    button2.className = 'buttons';
    button2.id = createIds();
    button2.textContent = 'Futa/edit';
    button2.onclick = function() {
        showDown(this.id);
    };
    
    let div1 = document.createElement('div');
    div1.style.display = 'none';
    
    let input2 = document.createElement('input');
    input2.type = 'text';
    input2.placeholder = 'edit';
    input2.className = 'inputs';
    input2.id = createIds();
    input2.oninput = function() {
        hariri(this.id);
    };
    input2.onchange = function() {
        hariri2(this.id);
    };
    
    let button3 = document.createElement('button');
    button3.className = 'buttons';
    button3.id = createIds();
    button3.textContent = 'futa';
    button3.onclick = function() {
        futa(this.id);
    };
    
    div1.appendChild(input2);
    div1.appendChild(button3);
    
    let button4 = document.createElement('button');
    button4.className = 'buttons';
    button4.id = createIds();
    button4.textContent = 'Weka Bajeti';
    button4.onclick = function() {
        putLengo(this.id);
    };
    
    let input3 = document.createElement('input');
    input3.className = 'inputs';
    input3.id = createIds();
    input3.placeholder = 'weka Bajeti';
    input3.type = 'number';
    input3.style.display = 'none';
    input3.onchange = function() {
        putLengo2(this.value, this.id);
    };
    
    let button5 = document.createElement('button');
    button5.className = 'buttons';
    button5.textContent = 'Maelezo';
    button5.onclick = function() {
        getObject(this);
    };
    
    let button6 = document.createElement('button');
    button6.className = 'buttons';
    button6.textContent = 'Ongeza';
    button6.onclick = function() {
        formBox2('ongeza');
    };
    
    let button7 = document.createElement('button');
    button7.className = 'buttons';
    button7.textContent = 'Bei Kununua';
    button7.onclick = function() {
        formBox2('kununua');
    };
    
    let button8 = document.createElement('button');
    button8.className = 'buttons';
    button8.textContent = 'Bei Kuuza';
    button8.onclick = function() {
        formBox2('kuuza');
    };
    
    complexElement.appendChild(button1);
    complexElement.appendChild(input);
    complexElement.appendChild(button2);
    complexElement.appendChild(div1);
    complexElement.appendChild(button4);
    complexElement.appendChild(input3);
    complexElement.appendChild(button5);
    complexElement.appendChild(button6);
    complexElement.appendChild(button7);
    complexElement.appendChild(button8);
    
    return complexElement;
}


function showInput(id){
    var el=document.getElementById(String(id));
   
    var nxt=el.nextElementSibling;
    nxt.style.display="block";
    var nxt2=nxt.nextElementSibling;
    nxt2.style.display="none";
    el.style.display="none";
  }

 
 export function displayInput(id){
    var el=document.getElementById(String(id));
   
    var nxt=el.nextElementSibling;
    nxt.style.display="block";
    el.style.display="none";
  }
 
  

  function showDown(id){
    let el=document.getElementById(String(id));
    let par=el.parentElement;
    for(let i=0; i<par.children.length; i++){
      par.children[i].style.display="none";
    }
    let nxt=el.nextElementSibling;
    nxt.style.display="block";
  }

function hariri(id){
    let el=document.getElementById(String(id));
    el.nextElementSibling.style.display='none';
    var par=el.parentElement.parentElement.parentElement.children[0];
    par.textContent=el.value;
  
  }
  
  function hariri2(id){
    
    let defDB=currentDB[currentDB.length-1];
    
    
  let mp1=currentACC[currentACC.length-1];
  
    let el=document.getElementById(String(id));
    
    var par=el.parentElement.parentElement.parentElement.id;
    var par1=el.parentElement.parentElement.parentElement;
    
    //console.log(`input value is ${el.value}, \n name ${par}`);
    
    if(mp1==mp){
      let request=indexedDB.open(defDB);
    
    request.onsuccess=()=>{
    var db=request.result;
    db.onversionchange=()=>{
      db.close();
      alert("Database version changed, Please, reload a page")
    }
    
    
    let txn=db.transaction(mp1,"readwrite");
    let store=txn.objectStore(mp1);
    
    let query=store.get(el.value);
    
    query.onsuccess=()=>{
      var match=query.result;
      
      if(match !==undefined){
        alert(`Akaunti yenye jina \"${match.name}\" tayari lipo kwenye database,tafadhali jaribu jina lingine`);
      }
      else{
           let rq= store.get(par);
     
    rq.onsuccess=()=>{
       
       let match=rq.result;
       if(match !=="undefined"){
         
         let rq1=store.put({name:el.value,jumla:match.jumla,values:match.values,bei:match.bei,bei_Kununua:match.bei_Kununua,lengo:match.lengo,unit:match.unit,mzigo:match.mzigo});
         
         rq1.onsuccess=()=>{
           console.log(`${rq1.result} imefanikiwa kuongezwa`);
           
           let rq3=store.delete(match.name);
           
           rq3.onsuccess=()=>{
             console.log(`${rq3.result} imeondolewa`)
              }
            }
          }
        }
      }
    }
    
    query.onerror=(e)=>{
      alert(`error on inserting ${par}`);
      
      e.preventDefault();
      
      alert("Event default prevented");
     let rq= store.get(par);
     
     rq.onsuccess=()=>{
       
       let match=rq.result;
       if(match !=="undefined"){
         
         let rq1=store.put({name:match.name,jumla:match.jumla,values:match.values,bei:match.bei,bei_Kununua:match.bei_Kununua,lengo:match.lengo,mzigo:match.mzigo});
         
         rq1.onsuccess=()=>{
           console.log(`${rq1.result} imefanikiwa kuongezwa`)
         }
         
       }
     
         rq.onerror=()=>{
           
           console.log(`error: ${rq.error}`)
         }
     
    }
    
    txn.oncomplete=()=>{
      db.close();
    }
  }
     
     txn.oncomplete=()=>{
       db.close();
     }
    }
  }
    if(mp1==mat4){
  let request=indexedDB.open(defDB);
    
    request.onsuccess=()=>{
    var db=request.result;
    db.onversionchange=()=>{
      db.close();
      alert("Database version changed, Please, reload a page")
    }
    
    
    let txn=db.transaction(mp1,"readwrite");
    let store=txn.objectStore(mp1);
    
    let query=store.get(el.value);
    
    query.onsuccess=()=>{
      var match=query.result;
      
      if(match !==undefined){
        alert(`Akaunti yenye jina \"${match.name}\" tayari lipo kwenye database,tafadhali jaribu jina lingine`);
      }
      else{
           let rq= store.get(par);
     
    rq.onsuccess=()=>{
       
       let match=rq.result;
       if(match !=="undefined"){
         
         let rq1=store.put({name:el.value,jumla:match.jumla,values:match.values,date:(function (){return putDate();}()),group:match.group});
         
         rq1.onsuccess=()=>{
           console.log(`${rq1.result} imefanikiwa kuongezwa`);
           
           let rq3=store.delete(match.name);
           
           rq3.onsuccess=()=>{
             console.log(`${rq3.result} imeondolewa`)
              }
            }
          }
        }
      }
    }
    
    query.onerror=(e)=>{
      alert(`error on inserting ${par}`);
      
      e.preventDefault();
      
      alert("Event default prevented");
     let rq= store.get(par);
     
     rq.onsuccess=()=>{
       
       let match=rq.result;
       if(match !=="undefined"){
         
         let rq1=store.put({name:match.name,jumla:match.jumla,values:match.values,date:(function (){return putDate();}()),group:match.group});
         
         rq1.onsuccess=()=>{
           console.log(`${rq1.result} imefanikiwa kuongezwa`)
         }
         
       }
     
         rq.onerror=()=>{
           
           console.log(`error: ${rq.error}`)
         }
     
    }
    
    txn.oncomplete=()=>{
      db.close();
    }
  }
     
     txn.oncomplete=()=>{
       db.close();
     }
    }}
    
    printState();
  }
   
  function putLengo(id){
    var el=document.getElementById(String(id));
    
    var par=el.parentElement;
    for(let i=0; i<par.children.length-1; i++){
      par.children[i].style.display="none";
    }
    var nxt=el.nextElementSibling;
    nxt.style.display="block";
  }
  
  function putLengo2(value,id,mp=mp){
    
    let defDB=currentDB[currentDB.length - 1];
    
    let el=document.getElementById(String(id));
    
    let par=el.parentElement;
    let prev=par.previousElementSibling;
    let name=String(prev.innerHTML);
    //localStorage.setItem(name,value);
    
  var request=indexedDB.open(defDB);
    
    request.onsuccess=()=>{
    var db=request.result;
    db.onversionchange=()=>{
      db.close();
      alert("Database version changed, Please, reload a page")
    }
    
    let txn=db.transaction(mp,"readwrite");
    let store=txn.objectStore(mp);
    
    let query=store.get(name);
    
    query.onsuccess=()=>{
      let match=query.result;
      
      if(match !==undefined){
      //  console.log(` line 1343 , ${match} added successful`);
        
       let rq=store.put({name:name,jumla:match.jumla,values:match.values,bei:match.bei,lengo:value,unit:match.unit});
       
       rq.onsuccess=()=>{
       //(`Uwekaji Lengo la mauzo ya ${rq.result} umefanikiwa!`);
       }
      
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
    
   // par.style.display="none";
  }
  

  function futa(id){
    let defDB=currentDB[currentDB.length-1];
    let mp1=currentACC[currentACC.length-1];
    
    var el=document.getElementById(String(id));
    if(confirm("futa rekodi zako zote katika item hii?")){
    var parentEl=el.parentElement;
    var parentEl2=parentEl.parentElement;
    var itemPar=parentEl2.parentElement;
    
    
    var request=indexedDB.open(defDB);
      
      request.onsuccess=()=>{
      var db=request.result;
      db.onversionchange=()=>{
        db.close();
        alert("Database version changed, Please, reload a page")
      }
      
      let txn=db.transaction(mp1,"readwrite");
      let store=txn.objectStore(mp1);
      
      let query=store.delete(itemPar.id);
      
      query.onsuccess=()=>{
      
        
        
          console.log(`${itemPar.id} imefutwa!`);
        
      }
       
      
      
      query.onerror=()=>{
        console.lo("error line 1094",query.result.error);
      }
      
      txn.oncomplete=()=>{
        db.close();
      }
    }
    }
    //itemPar.remove();
    printState();
    
      
        }


 function getObject(thiss){
            let defDB=currentDB[currentDB.length-1];
            
            let mp1=currentACC[currentACC.length-1];
            
            
          let obj=thiss.parentElement.previousElementSibling.textContent;
          
          //alert(obj);
            
            //var el=document.getElementById(String(id));
           
            
            //var test=document.getElementById("test");
          
            var request=indexedDB.open(defDB);
            
            request.onsuccess=()=>{
            let db=request.result;
            db.onversionchange=()=>{
              db.close();
              alert("Database version changed, Please, reload a page");
              window.location.reload();
            }
            
            if(mp1==mp){
            let txn=db.transaction(mp1,"readwrite");
            let store=txn.objectStore(mp1);
            
            let query=store.get(obj);
            
            query.onsuccess=()=>{
              console.log(query.result);
            
              let obj1=query.result;
              
              deleteBar(["sideBar","deleteSignMapato"]);
              
                 var sideBar=document.createElement("div");
            sideBar.id="sideBar";
            
            sideBar.style=`position:fixed; top:18%; left:5%;width:90%; z-index:22000;min-height:50%; background:#ebebeb;opacity:0.9;display:flex;overflow:scroll; flex-flow:column;border-radius:7%;/*box-shadow:-2px 2px 0px rgba(225,225,225,1);*/`;
            
            sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;
                                                           font-weight:400;
                                                           color:white;
                                                           font-size:110%; 
                                                           background:rgba(23,48,25,0.7);
                                                           width:68%;margin-left:8%;
                                                           border-radius:5px;">${obj1.name}</h5>
            
            <div style='display:flex;
                        flex:1 1 0;
                        width:100%;
                        padding-bottom:1em;
                        padding-top:1em;
                        font-weight:350;
                        font-size:100%; 
                        margin:4px;
                        padding-left:10%;
                        color:black; '>Kununua <b style="padding-left:20%;">Tsh ${obj1.bei_Kununua}</b></div>
            
                 <div style='display:flex;
                             flex:1 1 0;
                             width:100%; 
                             padding-bottom:1em;
                             font-weight:350;
                             font-size:100%;
                              margin:4px;
                              padding-left:10%;
                              color:black; '>Kuuza<b style="padding-left:20%;">Tsh ${obj1.bei}</b></div>
          
            
            <div style='display:flex;
                        flex:1 1  0; 
                        width:100%;
                        margin:4px;
                        margin-top:2px;
                        font-weight:400;
                        padding-bottom:1em;
                        padding-left:10%;
                        font-size:100%;
                        color:black;'> Mauzo <b style="padding-left:25%;">Tsh ${obj1.jumla}</b></div>
            
              <div style='display:flex;
                          flex:1 1  0;
                          width:100%;
                          margin:4px;
                          margin-top:2px;
                          font-weight:400;
                          padding-bottom:1em;
                          padding-left:10%;
                          font-size:100%;
                          color:black;'> Mzigo Uliouzwa <b style="padding-left:25%;">${obj1.unit} ${(obj1.jumla/obj1.bei).toFixed(1)}</b></div>
          
            
            <div style='display:flex;
                        flex:1 1 0;
                        width:100%;
                        margin:4px;
                        margin-top:2px;
                        font-weight:400;
                        padding-bottom:1em;
                        padding-left:10%;
                        padding-right:1em;
                        overflow:scroll;
                        font-size:100%;
                        color:black' onclick="">Mzigo uliobaki <b style="padding-left:10%;">${obj1.unit} ${obj1.mzigo}</b></div>
            
          
            `;
            
            document.body.appendChild(sideBar);
            crossSign(11.5,24,83,22000,"black");
            
              
            }
              txn.oncomplete=()=>{
              db.close();
            }
              
            }
            if(mp1==mat4){
             
            let txn=db.transaction(mp1,"readwrite");
            let store=txn.objectStore(mp1);
            
            let query=store.get(obj);
            
            query.onsuccess=()=>{
              console.log(query.result);
            
              let obj1=query.result;
              
              deleteBar(["sideBar","deleteSignMapato"]);
              
                 var sideBar=document.createElement("div");
            sideBar.id="sideBar";
            
            sideBar.style=`position:fixed; 
                           top:18%;
                           left:5%;
                           width:90%;
                           z-index:22000;
                           min-height:50%;
                           background:#ebebeb;
                           opacity:0.9;
                           display:flex;
                           overflow:scroll;
                           flex-flow:column;
                           border-radius:7%;`;
            
            sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;
                                                           font-weight:400;
                                                           color:white;
                                                           font-size:110%;
                                                           background:rgba(23,48,25,0.7);
                                                           width:68%;margin-left:8%;
                                                           border-radius:5px;">${obj1.name}</h5>
            
            <div style='display:flex;
                        flex:1 1 0;
                        width:100%; 
                        padding-bottom:1em;
                        padding-top:1em;
                        font-weight:350;
                        font-size:100%;
                        margin:4px;
                        padding-left:10%;
                        color:black; '>Matumizi <b style="padding-left:20%;">Tsh ${obj1.jumla}</b></div>
            
                 <div style='display:flex;
                             flex:1 1 0;
                             width:100%;
                             padding-bottom:1em;
                             font-weight:350;
                             font-size:100%;
                             margin:4px;
                             padding-left:10%;
                             color:black; '>Kundi<b style="padding-left:20%;">${obj1.group}</b></div>
          
            <!--
            <div style='display:flex;
                        flex:1 1  0; 
                        width:100%;
                        margin:4px;
                        margin-top:2px;
                        font-weight:400; 
                        padding-bottom:1em;
                        padding-left:10%;
                        font-size:100%;
                        color:black;'> Mauzo <b style="padding-left:25%;">Tsh ${obj1.jumla}</b></div>
            
              <div style='display:flex;
                          flex:1 1  0; 
                          width:100%;
                          margin:4px;
                          margin-top:2px;
                          font-weight:400; 
                          padding-bottom:1em;
                          padding-left:10%;
                          font-size:100%;
                          color:black;'> Mzigo Uliouzwa <b style="padding-left:25%;">${obj1.unit} ${(obj1.jumla/obj1.bei).toFixed(1)}</b></div>
          
            
            <div style='display:flex;
                        flex:1 1 0;
                        width:100%;
                        margin:4px;
                        margin-top:2px;
                        font-weight:400; 
                        padding-bottom:1em;
                        padding-left:10%;
                        padding-right:1em;
                        overflow:scroll;
                        font-size:100%;
                        color:black' onclick="">Mzigo uliobaki <b style="padding-left:10%;">${obj1.unit} ${obj1.mzigo}</b></div>
            -->
          
            `;
            
            document.body.appendChild(sideBar);
            crossSign(11.5,24,83,22000,"black");
            
              
            
            }
            
            txn.oncomplete=()=>{
              db.close();
            }
            }
            }
          }
          

function formBox2(val=false){
    deleteBar(["sideBar","deleteSignMapato","mzigoUmeisha","bg"]);
    
    let div=document.createElement("div");
    div.id="formBox2";
    div.style="display:flex;gap:10px;justify-content: center;position:fixed;top:30%; left:4%;width:92%;z-index:10000; background:rgba(30,89,0,0.63);border-radius:10px;border:1px dotted rgba(225,205,0,0.7);"
    
    document.body.appendChild(div);
    let bg=document.createElement("div");
    bg.id="bg";
    bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,0.6);margin-left:-10%;margin-top:-10%;";
    
    document.body.appendChild(bg);
    crossSign(12,31,91,20000,"yellow");
   
   if(val == false){
    
    div.innerHTML=`
    <p id="popIds" align="center" style="font-weight:350;font-size:90%;padding-top 10%;"> Ongeza ${idS[idS.length - 1]}:<br>
         <input type="number" id="mzigo2" name="mzigo2" placeholder="ingiza stock" class="box" style="margin-bottom:10px; margin-top:10px; width:30%;border-radius:10px;" value=0 onchange="setPrice(this.value,this);" required></p>
    `
    
    }
    
    if(val=="kuuza"){
     div.innerHTML=`
    <p id="popIds" align="center" style="font-weight:350;font-size:90%;padding-top 10%;"> Kununua ${idS[idS.length - 1]}:<br>
         <input type="number" id="mzigo2" name="mzigo2" placeholder="ingiza stock" class="box" style="margin-bottom:10px; margin-top:10px; width:30%;border-radius:10px;" value=0 onchange="setPrice(this,'kuuza');" required></p>
    `
      
    }
      if(val=="kununua"){
      div.innerHTML=`
    <p id="popIds" align="center" style="font-weight:350;font-size:90%;padding-top 10%;"> Kununua ${idS[idS.length - 1]}:<br>
         <input type="number" id="mzigo2" name="mzigo2" placeholder="ingiza stock" class="box" style="margin-bottom:10px; margin-top:10px; width:30%;border-radius:10px;" value=0 onchange="setPrice(this);" required></p>
    `
      
    }
     if(val=="ongeza"){
      div.innerHTML=`
    <p id="popIds" align="center" style="font-weight:350;font-size:90%;padding-top 10%;"> Ongeza ${idS[idS.length - 1]}:<br>
         <input type="number" id="mzigo2" name="mzigo2" placeholder="ingiza stock" class="box" style="margin-bottom:10px; margin-top:10px; width:30%;border-radius:10px;" value=0 onchange="mzigoMpya(this.value);" required></p>
    `
      
    }
    
   if(val=="group"){
      div.innerHTML=`
    <p id="popIds" align="center" style="font-weight:350;font-size:90%;padding-top 10%;"> Group ${idS[idS.length - 1]}:<br>
         <input type="text" id="mzigo2" name="mzigo2" placeholder="ingiza stock" class="box" style="margin-bottom:10px; margin-top:10px; width:30%;border-radius:10px;" value=0 onchange="changeMatumizi(this,'group');" required></p>`
      
    }
  }


export function setPrice(thiss,val="kununua"){
  
    let defDB=currentDB[currentDB.length - 1];
    
    let mp1=currentACC[currentACC.length-1];
    
    let value=thiss.value;
    
    let name2=idS[idS.length-1];
    
    let request=indexedDB.open(defDB);
    
    request.onsuccess=()=>{
    var db=request.result;
    db.onversionchange=()=>{
      db.close();
      alert("Database version changed, Please, reload a page")
    }
    
    let txn=db.transaction(mp1,"readwrite");
    let store=txn.objectStore(mp1);
   // alert(`this name ${name2}`);
    let query=store.get(name2);
    
    query.onsuccess=()=>{
      let match=query.result;
      
      if(match !==undefined){
        if(val=="kununua"){
       let rq2= store.put({name:match.name,jumla:match.jumla,values:match.values,bei: match.bei,lengo:match.lengo,bei_Kununua:value,unit:match.unit,mzigo:match.mzigo})
       ;
       rq2.onsuccess=()=>{
        // alert("yees");
         //console.log(` line 1335, ${rq2.result} was added successful!`)
       }}
        if(val=="kuuza"){
       let rq2= store.put({name:match.name,jumla:match.jumla,values:match.values,bei:value,lengo:match.lengo,bei_Kununua:match.bei_Kununua,unit:match.unit,mzigo:match.mzigo})
       ;
       rq2.onsuccess=()=>{
        // alert("yees");
         //console.log(` line 1335, ${rq2.result} was added successful!`)
       }}
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
    
    deleteBar(["sideBar","deleteSignMapato","bg","formBox2"]);
    //par.style.display="none";
  }
  
export { ButtonOptions };
