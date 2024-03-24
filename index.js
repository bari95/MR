
"use strict";

import {createIds} from "./js/utils/Identifiers.js";
import { currentDB, currentACC,mp,containerForOpenedDB,loginPage} from "./js/database/auth.js";
import {updateSet} from "./js/database/Updating.js"


// Variable Declarations

let table1;
let contexts = [];
let malengoObject = {};


const v = "account_2000";
let start = Math.ceil(new Date().getTime());
let items = {};

let titles = [];
let w = 50;
let flag = false;
let childNo = 0;
let saverArray = [];
let saverArray2 = [];
let saverArray3 = [];
const tagsArray = [];
const productNames = [];
const priceBag = [];
let idS = [];
let z = 201;
let colors = ["white", "teal"];
let colors2 = ["black", "white"];
let border = ["black", "gold"];
let widt = ["120%", "100%"];
let margin = ["-10%", "0"];
let n = 0;
let m = 0;
let b = 0;
let wt = 0;
let mar = 0;


function fontsize(size){
    document.body.style.fontSize=`${size}%`;
  }
  
function storage(){
    navigator.storage.estimate().then((val)=>{
      let required=10;
       
       let total=((val.quota/1024)/1024).toFixed(2)+" MB"
      
      let available=(((val.quota - val.usage)/1024)/1024).toFixed(2)+" MB";
      
      let used= ((val.usage/1024)/1024).toFixed(2)+" MB";
      
      let percentUsed=((val.usage/val.quota)*100).toFixed(2) +"%";
      
      //console.log(available + " MB");
      console.log({totalSpace:total,available:available, usage:used, percentUsed:percentUsed});
    });
  }
       
  function scrollBar(id){
    function bar(id){
   let bar1=document.createElement("div");
   bar1.id=id;
    bar1.style="background-color:rgba(127,130,20,1);width:0;height:0.5%;position:fixed;left:0;top:0;z-index:600000;";
    //bar1.style.width="0";
    //bar1.style.height="3px"
    //bar1.style.position="fixed";
    document.body.appendChild(bar1);
    
  }
    bar(id);
    
    let el=document.getElementById(id)
    let tabl=document.getElementById("table");
    
    tabl.addEventListener("scroll",()=>{
      
      
      let max=tabl.scrollWidth -innerWidth;
      
      let percent=tabl.scrollLeft /max *100;
      
      el.style.width=percent + "%";
     // console.log(el.style)
    })
   
    
    
  }  

  function showMessage(text){
    let el=document.createElement("div");
    el.style="display:flex;flex-flow:column;justify-content:center;align-items:center;width:100%;height:100%;position:fixed; top:0;left:0;background:rgba(20,43,23,1.9);color:white;font-weight:360;z-index:90000;font-size:100%;";
    //el.align="center";
    el.innerHTML=text;
    let loadingBar=`<span id="loadingBar" style="display: flex;align-items:left;width:0; height:.5%; background:gold;"></span>
    
    <span id="loadingPercentage"></span>`;
    el.innerHTML +=loadingBar;
    
    return document.body.appendChild(el);
  }

  function getLast(word){
    let reg=/\w+/;
    let val=reg.exec(word)[0];
    
    if(val){
    val=val.slice(1)
    return val;}
    else{
      return null;
    }
  }

  function timer(){
 
    return  ()=>{setInterval(()=>{ return Math.ceil((new Date().getTime()-start)/1000)},1000);
      }
    }
      
    function counter(n,id){ 
        let int;
       let partitions=1/n;
       let start=0;
       
      for(let i=1;i<=n; i++){
        /*if(i==n){ 
          clearTimeout(int); 
          //deleteBar([id])
         alert("finished");
        }*/
      
         int=setTimeout(()=>{
          start +=Math.cos(Math.PI/4);
           (function(){
             console.log(id)
             let el=document.getElementById(id);
             el.style.opacity=start;
           }())
           },i*1000)
         
       
       
     }}

     function getWord(word){
        let mp1=currentACC[currentACC.length-1];
        if(mp1==mp){
        let tester=/\b(\w+ \d+(.\d+)?)\b/;
        let it=tester.exec(word);
        return it[0];}
        
      }
      
      function jana(word){
        
        let tester=/\b(\w+(')?\w+ \d+\/\d+\/\d+)\b/;
        let it=tester.exec(word);
        return it[0];
      }
      
      function getWord2(word){
        let mp1=currentACC[currentACC.length-1];
      if(mp1==mp){
        let tester=/\b(\d+(.\d+)?)\b/;
        let it=tester.exec(word);
        return it[0];}
      }
      

  
  function getAccountDetails(name){
    let defDB=currentDB[currentDB.length-1];
    
    let request=indexedDB.open(defDB) ;
    
    request.onsuccess=()=>{
      let db=request.result;
      
      db.onversionchange=()=>{
        db.close();
        location.reload();
      }
      
      let txn=db.transaction(mp,"readonly");
      let store=txn.objectStore(mp);
      
      let query=store.get(name);
      
      query.onsuccess=()=>{
        
        let ob=query.result;
        
        
        
      }
      
      txn.oncomplete=()=>{
        db.close();
      }
    }
    
    
  }
  
  

  //HELPER FUNCTIONS;
function createCanvas(width, height,set2dTransform = true){
    const ratio = Math.ceil(window.devicePixelRatio);
    const canvas = document.createElement('canvas');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    if(set2dTransform){
      canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    return canvas;
  }
  
  function getString(fullstring,startPoint){
    let tester=/\w{1,30}/;
    let i=startPoint;
    let string="";
    while(i<fullstring.length){
      if(tester.test(String(fullstring[i]))){
        string +=fullstring[i];
        i++;
      }
      else{
        break;
    }}
    return string;
  }
  
 

  
  //GENERAL USER INTERFACE

function eraseBody([...ids],callback){
    // let arr=["hd","rekodiMapato","navBar","search"];
    for(let i=0; i<ids.length; i++){ 
   if(document.getElementById(ids[i])){
      document.getElementById(ids[i]).style.display="none";
      if(ids[i] != "sideBar"){
        
        contexts.push(ids[i]);}
    }
     
   }
   callback();
   }
   
   function bgLoading(msg,left=10,top=20,height="auto",width=80,index=1000){
     
     deleteBar(["bg","bg2"]);
     
     let bg=document.createElement("div");
     bg.id="bg2";
     
     bg.style=`text-align:center;position:fixed;left:${left}%;top:${top}%;z-index:${index};width:${width}%;height:${height}%;font-weight:350; font-size:0.8em; background:rgba(9,46,12,1);padding-right:10px;`;
     
     bg.innerHTML=`<p>${msg}</p>`;
     
     document.body.appendChild(bg);
     crossSign(10,20,78);
   }
   
   
   function back(){
     
     while(contexts.length !=0){
      // let id1=contexts.pop();
       let id=contexts.pop();
       document.getElementById(id).style.display="block";
       
     }
   
   deleteBar(["malengoHd","optionButton","backButton","divMalengo","miamala_Table","insertTransactionManually"]);
   
   showVisibility(["printState222"]);
   }
   
   function malengoHeader(){
   
    let hd4=document.createElement("div");
    hd4.id="malengoHd";
     hd4.style=`position:fixed;top:0;left:-5px;min-width:100%;; background:rgba(0,23,0,0.8);z-index:20000`;
     hd4.innerHTML=` <h5 style="margin-bottom:0;font-weight:450;font-size:1em;background:white;color:black;border-radius:10px;margin-left:36.7%;width:30%; text-align:center">Malengo </h5><div style="display:flex;font-weight:350;font-size:80%; position:relative;top:-40.5%;left:25%;"><span onclick="" style="padding:4%;font-weight:bold;">Wiki</span> <span style="padding:4%;font-weight:550;color:yellow;">Mwezi</span><span style="padding:4%;font-weight:bold;" onclick="">Mwaka</span></div>`;
     document.body.appendChild(hd4);
     
    printMalengo();
     
    
     backButton(3.2);
     optionButt(3,90,20000,"white",showSideBarMeneja);
   
     deleteBar(["sideBar","deleteSignMapato"]);
   };
   

   //UTILITY FUNCTIONS;
   
   function saver2(id){
     var el=document.getElementById(String(id));
     var value=el.innerHTML;
     var arr=new Array(id);
     arr.push(value);
     saverArray2.push(arr);
   }
   function saver3(id){
     var el=document.getElementById(String(id));
     var value=el.innerHTML;
     var arr=new Array(id);
     arr.push(value);
     saverArray3.push(arr);
   }
   //recording tools
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
   
   
   function recordingTargets(name,values){
   // let el=document.getElementById("screen1").innerHTML;
    // let qt=getWord(el);
   
     return {name:name,values:values,date:(function(){ return putDate(); }()),hrs:(function(){ return putHR()}()),now:(function(){let date=new Date(); return Math.ceil(date.getTime()/1000)}())};
   }
   
   function recordTransaction(name,price,group){
   let defDB=currentDB[currentDB.length-1];
   let rd1=currentRd[currentRd.length-1];
   
   alert(`currentRd is ${rd1}`);
     
     let request=indexedDB.open(defDB);
     
     request.onsuccess=()=>{
       let db=request.result;
       console.log(db);
       db.onversionchange=()=>{
         db.close();
         window.location.reload();
       }
       let txn=db.transaction(rd1,"readwrite");
       let store=txn.objectStore(rd1);
       
       if(rd1==rd){
       let query=store.put(recordingObject(name,price));
       
       query.onsuccess=()=>{
         let match=query.result;
       }
       }
       if(rd1==rd2){
       
       let query=store.put(recordingObject(name,price,group));
       
       query.onsuccess=()=>{
         let match=query.result;
       }
       
       }
       txn.oncomplete=()=>{
         db.close()
       }
     }
   }
   
   function checkMzigo(name){
     
   let defDB=currentDB[currentDB.length-1]
     
      let request=indexedDB.open(defDB);
     
      request.onsuccess=()=>{
       let db=request.result;
       
       db.onversionchange=()=>{
         db.close();
         window.location.reload();
       }
       let txn=db.transaction(mp,"readonly");
       let store=txn.objectStore(mp);
       let query=store.get(name);
       
       query.onsuccess=()=>{
         let match=query.result;
       
       if(match !== "undefined"){
         if(match.mzigo !==0){
       // alert("y s");
           return true;
         }
       else{
         
           return false;
         }
       }
     }
       txn.oncomplete=()=>{  db.close();}
     }
   }
   
   function mapatoObject(name,bei,bei_Kununua,jumla,values,lengo,unit,mzigo){
     return {name:name,bei:bei,bei_Kununua:bei_Kununua,jumla:jumla,values:values,lengo:lengo,unit:unit,mzigo:mzigo};
   }
   
   
   
   //User Interface;
   function changeIndicator(bol){
     let el=document.getElementById("indicator");
     el.style.display="flex";
     el.style.gap="3%";
     
     if(bol){
      el.innerHTML=`
     <svg width="24" height="20">
     <rect x="0" y="0" width="24" height="20" fill="white" />
     <path d="M 4 7 L 8 13 L 18 2 " fill="transparent" stroke="green" stroke-Width="4" />
     </svg>
     <span style="font-weight:350;font-size:80%;">Tayari</span>
     `;
   
   }
   
   }
   
   //changeIndicator(true);
   
   function displayFooter(){
   //  document.getElementById("totalPane").style.display="none";
     document.getElementById("foot").style="display:flex;width:30%;background:rgba(7,21,7,1);flex-flow:column;z-index:60000;opacity:0.95;padding:5px;"
     
   }
   
   function formBox(){
     
     deleteBar(["formBox"]);
     
     let rd1=currentRd[currentRd.length-1];
     
     
     
     if(rd1==rd){
     
     let div=document.createElement("div");
     div.id="formBox";
     div.style="display:flex;gap:10px;justify-content: center;position:fixed;top:30%; left:4%;width:92%;z-index:10000; background:rgba(59,99,59,0.73);border-radius:10px;border:1px solid rgba(255,255,255,0.7);padding-bottom:3%; padding-top:5%;"
     div.innerHTML=`
     <form name="f" id="f" onsubmit="return postValue();" style="padding:5px;display:flex;flex-flow:column;justify-content: center;height:200px;">
   <center>  <p id="formBoxHeader2" style="font-weight:350;text-align:center;" >Ingiza Bidhaa</p></center>
          <input type="text"  id="jina" name="jina" placeholder="jina la Bidhaa" class="box" style="margin-bottom:10px;" required>
    
        <input type="number"  id="bei" name="bei" placeholder="bei ya kuuza" class="box" style="margin-bottom:10px;" required>
        
        <input type="number"  id="beiKununua" name="beiKununua" placeholder="bei ya kununua" class="box" style="margin-bottom:10px;" required>
        
          <input type="number"  id="jumla" name="jumla"  placeholder="mauzo" class="box" style="margin-bottom:10px;" required>
          
          <input type="number" id="mzigo" name="mzigo" placeholder="ingiza stock" class="box" style="margin-bottom:10px;" required>
     
          <input type="text"  id="unit" name="unit" placeholder="Ingiza units, mf kg,lita,pisi" class="box" style="border-radius:5px;margin-bottom:10px;" required>
     
     <input type="submit" value="ok" style="width:20%; position:relative;left:40%;border-radius:5px;"/>
     `
     document.body.appendChild(div);
     let bg=document.createElement("div");
     bg.id="bg";
     bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,0.6);margin-left:-10%;margin-top:-10%;";
     
     document.body.appendChild(bg);
     crossSign(12,32,89);
   }
     if(rd1==rd2){
     
     let div=document.createElement("div");
     div.id="formBox";
     div.style="display:flex;gap:10px;justify-content: center;position:fixed;top:30%; left:4%;width:92%;z-index:10000; background:rgba(59,99,59,0.73);border-radius:10px;border:1px solid rgba(255,255,255,0.7);padding-bottom:3%; padding-top:5%;"
     div.innerHTML=`
     <form name="f" id="f" onsubmit="return postValue();" style="padding:5px;display:flex;flex-flow:column;justify-content: center;height:200px;">
   <center>  <p id="formBoxHeader2" style="font-weight:350;text-align:center;" >Ingiza Matumizi</p></center>
          <input type="text"  id="jina" name="jina" placeholder="jina la Bidhaa" class="box" style="margin-bottom:10px;" required>
    
      
        
          <input type="number"  id="jumla" name="jumla"  placeholder="mauzo" class="box" style="margin-bottom:10px;" required>
          
   
     
          <input type="text"  id="group" name="group" placeholder="kundi la matumizi" class="box" style="border-radius:5px;margin-bottom:10px;" required>
     
     <input type="submit" value="ok" style="width:20%; position:relative;left:40%;border-radius:5px;"/>
     `
     document.body.appendChild(div);
     let bg=document.createElement("div");
     bg.id="bg";
     bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,0.6);margin-left:-10%;margin-top:-10%;";
     
     document.body.appendChild(bg);
     crossSign(12,32,89);
   }
   }
   
   function formVipengeleGharama(){
   
     let div=document.createElement("div");
     div.id="formBox";
     div.style="display:flex;gap:10px;justify-content: center;position:fixed;top:30%; left:4%;width:92%;z-index:10000; background:rgba(59,99,59,0.9);border-radius:10px;border:1px solid rgba(255,255,255,0.7);"
     div.innerHTML=`
     <form name="f" id="f" onsubmit="return postValue2();" style="padding:5px;display:flex;flex-flow:column;justify-content: center;height:110%;">
     <caption ><b align="center" style="margin-bottom:2%;font-weight:370;">Ingiza kipengele cha gharama</b></caption>
          <input type="text"  id="jina" name="jina" placeholder="kipengele cha gharama" class="box" style="margin-bottom:10px;" required>
    
        <input type="number"  id="gharama" name="gharama" placeholder="thamani ya gharama" class="box" style="margin-bottom:10px;" required>
     <input type="submit" value="ok" style="width:20%; position:relative;left:40%;border-radius:5px;"/>
     `
     document.body.appendChild(div);
     let bg=document.createElement("div");
     bg.id="bg";
     bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,0.6);margin-left:-10%;margin-top:-10%;";
     
     document.body.appendChild(bg);
     
     crossSign(13,34,85,20000,"yellow");
   }
  
   
   function removeSomeInput(){
     let mp1=currentACC[currentACC.length -1];
     
     if(mp1=="matumiz8"){
       
       deleteBar(["mzigo","beiKununua","bei"]);
       document.getElementById("formBoxHeader2").textContent="Ingiza Matumizi";
       document.getElementById("jumla").placeholder="jumla ya gharama";
     }
     
   }
   
 
 
   //formBox2("group");
   
   function rejectD(){
      document.getElementById("mzigoUmeisha").remove();
      document.getElementById("bg").remove();
    }
   //STYLING FUNCTIONS;
   function defect(id){
     var el=document.getElementById(String(id));
    
   //  el.style.hover="background:green;"
   }

   

   
   // USER INTERFACE;
   
 
   function timeBack(){
      deleteBar(["sideBar","deleteSignMapato"]);
    
      var sideBar=document.createElement("div");
     sideBar.id="sideBarRudi";
     
     sideBar.style=`position:fixed; top:17.5%; left:2.5%;width:42%; z-index:22000;background:#ebebeb;display:flex; flex-flow:column;border-radius:7%;box-shadow:-2px 2px 0px rgba(225,225,225,0.7);`;
     
     sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;font-weight:400;color:white; background:rgba(92,135,75,0.9);width:68%;margin-left:8%;border-radius:5px;">Rudi Nyuma </h5>
    
     <div style='display:flex;padding-top:1em;font-weight:350;font-size:80%;color:black;overflow:scroll;padding-left:0.5em;border-bottom:1px solid black;padding-right:0.5em;'>Wiki <span style="margin-left:auto;font-size:190%; font-weight:550;" onclick="jana1+=7;miamalaLeo(putJana());">\<</span> 
     <span style="margin-left:10%;font-size:190%; font-weight:550;" onclick="jana1-=7;miamalaLeo(putJana());">\></span>
     </div>
     
     <div style='display:flex;padding-top:1em;font-weight:350;font-size:80%;color:black;overflow:scroll;padding-left:0.5em;border-bottom:1px solid black;padding-right:0.5em;'>Mwezi <span style="margin-left:auto;font-size:190%; font-weight:550;" onclick="jana1+=28;miamalaLeo(putJana());">\<</span>
     <span style="margin-left:10%;font-size:190%; font-weight:550;" onclick="jana1 -=28;miamalaLeo(putJana());">\></span></div>
     
     <div style='display:flex;padding-top:1em;font-weight:350;font-size:80%;color:black;overflow:scroll;padding-left:0.5em;padding-right:0.5em;'>Miezi3 <span style="margin-left:auto;font-size:190%; font-weight:550;" onclick="jana1+=28*3;miamalaLeo(putJana());">\<</span>
     <span style="margin-left:10%;font-size:190%; font-weight:550;" onclick="jana1 -=28*3;miamalaLeo(putJana());">\></span></div>`
     ;
     
       
     document.body.appendChild(sideBar);
     crossSign(11,21.5,38,22000,"black","sideBarRudiCrossSign");
     }
      
    
      
    function showDetails(muda,mapato,faida,miamala){
       
       deleteBar(["sideBar","deleteSignMapato"]);
       
      //document.body.style.background="#ebebeb";
      var sideBar=document.createElement("div");
     sideBar.id="sideBar";
     
     sideBar.style=`position: fixed;top:-10px;width:100%; z-index:22000;height:100%; background:#ebebeb;opacity:0.9;display:flex;overflow:scroll; flex-flow:column;padding-bottom:5%;`;
     
     sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;font-weight:400;color:white; background:rgba(23,48,25,0.7);width:80%;margin-left:8%;border-radius:5px;">${muda} </h5>
     
     <div style='display:flex;width:70%; padding-bottom:1em;padding-top:1em;font-weight:350;font-size:100%; margin:2px;padding-left:10%;color:black; '>Mapato<b style="margin-left:auto;">${mapato}</b></div>
     
          <div style='display:flex;width:70%; padding-bottom:1em;font-weight:350;font-size:100%; margin:2px;padding-left:10%;color:black; '><span>Mtaji</span><b style="margin-left:auto;">${mapato - faida}</b></div>
   
     
     <div style='display:flex; width:70%;margin:2px;margin-top:2px;font-weight:400; padding-bottom:1em;padding-left:10%;font-size:100%;color:black;'><span> Faida</span> <b style="margin-left:auto;">${faida}</b></div>
     
   
     
     <div style='display:flex;width:70%;margin:4px;margin-top:2px;font-weight:400; padding-bottom:1em;padding-left:10%;padding-right:1em;overflow:scroll;font-size:100%;color:black' onclick=""><span>Idadi ya Miamala</span> <b style="margin-left:auto;">${miamala}</b></div>
     
   <div style='width:70%;margin:4px;margin-top:2px;font-weight:400; padding-left:0.5em;padding-right:1em;font-size:102%;color:black;border-bottom:1px solid black;padding-top:8%;width:68%;' align="center" onclick="">Mgawanyo wa Faida</div>
     `;
     
     document.body.appendChild(sideBar);
     crossSign(15.4,4.5,90,22000,"black");
     
          
        
        
      }
    
    
    function deleteDialogue(thiss,v=null){
      let name=thiss.textContent;
      
     if(v==null){
      let par=thiss.parentElement;
      let hr=par.lastElementChild.textContent;
      
      deleteThis.push(name);
      saas.push(hr);
      
        deleteBar(["sideBar","deleteSignMapato"]);
       
      let sideBar=document.createElement("div");
      
     // bgLoading();
     sideBar.id="sideBar";
     
     sideBar.style=`position:fixed; top:24.5%; left:15%;width:70%; z-index:22000;min-height:25%; background:#ebebeb;opacity:0.9;border-radius:7%;/*box-shadow:-2px 2px 0px rgba(225,225,225,0.7);*/`;
     
     sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;font-weight:500;width:68%;margin-left:17%;font-size:1.1em;border-radius:5px;color:black;">futa Muamala?</h5>
   <div style="display:flex;margin-top:13%;justify-content:center;">
   <span style="font-weight:400;color:white; background:rgba(23,48,25,1.7); border-radius:10px;width:25%;text-align:center;" onclick='deleteBar(["sideBar"]);deleteThis.pop();'>Hapana</span>
     
     
   <span style="margin-bottom:0;font-weight:400;color:white; background:rgba(23,48,25,1.7);width:25%; margin-left:12%;text-align:center;border-radius:10px;" onclick='deleteBar(["sideBar"]);deleteTransaction();'>Ndio</button>
      </div>
      `
      
      document.body.appendChild(sideBar);
    //  callback();
      }
      else{
       
      
      
      deleteThis.push(name);
      //saas.push(hr);
      
        deleteBar(["sideBar","deleteSignMapato"]);
       
      let sideBar=document.createElement("div");
      
     // bgLoading();
     sideBar.id="sideBar";
     
     sideBar.style=`position:fixed; top:24.5%; left:15%;width:70%; z-index:22000;min-height:25%; background:#ebebeb;opacity:0.9;border-radius:7%;/*box-shadow:-2px 2px 0px rgba(225,225,225,0.7);*/`;
     
     sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;font-weight:500;width:68%;margin-left:17%;font-size:1.1em;border-radius:5px;color:black;">futa Muamala?</h5>
   <div style="display:flex;margin-top:13%;justify-content:center;">
   <span style="font-weight:400;color:white; background:rgba(23,48,25,1.7); border-radius:10px;width:25%;text-align:center;" onclick='deleteBar(["sideBar"]);deleteThis.pop();'>Hapana</span>
     
     
   <span style="margin-bottom:0;font-weight:400;color:white; background:rgba(23,48,25,1.7);width:25%; margin-left:12%;text-align:center;border-radius:10px;" onclick='deleteBar(["sideBar"]);deleteLengo();'>Ndio</button>
      </div>
      `
      
      document.body.appendChild(sideBar);
    //  callback();
      
      }
    }
    
  
   
   function sortObjects(obj){
     var sorted=Object.keys(obj).sort().reduce((accumulate,key)=>{
       accumulate[key]=obj[key];
       return accumulate;
     },{});
     
    return sorted;
    
   }
   
   //STORAGE in INDEXED DATA BASE;
   
   function initializer(db){
   let request=indexedDB.open(db,5);
   
   request.onupgradeneeded=(e)=>{
     let db=e.target.result;
     
     if(e.oldVersion <1){
     let store=db.createObjectStore(mp,{keyPath:"name"});
     
    
     store.createIndex("jumla","jumla");
     store.createIndex("values","values");
     store.createIndex("bei","bei");
     store.createIndex("bei_Kununua","bei_Kununua")
     store.createIndex("lengo","lengo");
     store.createIndex("unit","unit");
     store.createIndex("mzigo","mzigo");
     
     // creating an object for storing transactions records;
     
     let store2=db.createObjectStore(rd,{autoIncrement:true});
     
     
     store2.createIndex("name","name");
     store2.createIndex("price","price");
     store2.createIndex("Qt","Qt");
     store2.createIndex("date","date");
     store2.createIndex("hrs","hrs");
     //store2.createIndex("mgawanyo","mgawanyo");
     store2.createIndex("faida","faida")
     store2.put({name:"malengo",values:{}});
     //store2.put({name:"viwango",values:{}})
    // store2.put({name:"mapato2","value":null,date:null,hrs:null,now:null})
     // object store for targets and goals;
     
    let store3=db.createObjectStore(mal,{keyPath:"name"});
    store3.createIndex("values","values");
    store3.createIndex("date","date");
    store3.put({name:"mapato","value":null,date:null,hrs:null,now:null});
   }
     if(e.oldVersion <2){
       alert("upgraded version 2");
        let store=db.createObjectStore(mat,{keyPath:"name"});
        
        let dateIndex=store.createIndex("date","date");
        let jumlaIndex=store.createIndex("jumla","jumla")
     }
     if(e.oldVersion <3){
       alert ("upgraded version 3");
        let store=db.createObjectStore("matum",{keyPath:"name"});
        
        let valueIndex=store.createIndex("values","values");
   
        
       
       
       
     }
     if(e.oldVersion <4){
       alert ("upgraded version 4");
        let store=db.createObjectStore(mat4,{keyPath:"name"});
       
     }
     
     if(e.oldVersion <5){
       alert ("upgraded version 5");
        let store2=db.createObjectStore(rd2,{autoIncrement:true});
     
     store2.createIndex("name","name");
     store2.createIndex("jumla","jumla");
     store2.createIndex("date","date");
     store2.createIndex("group","group")
       
     }
     }
   
   request.onsuccess=()=>{
     console.log("Database iko tayari");
     let db=request.result;
   
   
     db.onversionchange=()=>{
       db.close();
       alert("Database version changed, Please, reload a page");
       window.location.reload();
     }
     
     let txn=db.transaction(mp,"readwrite");
     let store=txn.objectStore(mp);
     
      let query=store.put({name:"total",jumla:0});
      let query2=store.put({name:"mtaji",jumla:0});
      
      query.onsuccess=()=>{
   
      }
   
     
   }
   
   request.onerror=()=>{
     console.log("Database imegoma ");
   }
   
   }
   
   
   
   function postValue(){
     
   let mp1=currentACC[currentACC.length -1];
   
     let defDB=currentDB[currentDB.length-1]
     var request=indexedDB.open(defDB);
     
     request.onsuccess=()=>{
       let db=request.result;
       
       let txn=db.transaction(mp1,"readwrite");
       let store=txn.objectStore(mp1);
      
    if(mp1=="mapato1"){ 
      
      let name1=document.f.jina.value;
       let bei1=document.f.bei.value;
       let bei2=document.f.beiKununua.value;
       //alert(`bei kununua ${bei2}`);
       let jumla1=document.f.jumla.value;
       let unit1=document.f.unit.value;
       let mz1=document.f.mzigo.value;
      
      let query=store.put({name:name1,jumla:jumla1,values:[],lengo:"-",bei:bei1,bei_Kununua:bei2,unit:unit1,mzigo:mz1})
       
       
       
       query.onsuccess=()=>{
         let match=query.result;
         
         if(match !==undefined){
   
         
         }
         printState();
   
     }
     query.onerror=()=>{
       console.log("error "+query.result.error);
     }
     
     
   }
     if(mp1=="matumiz8"){
       
   let name1=document.f.jina.value;
   let jumla1=document.f.jumla.value;
   let grp=document.f.group.value;
     
     //alert("its here")
       //let bei1=document.f.bei.value;
      
      let query=store.put({name:name1,jumla:jumla1,values:[],group:grp,date:(function(){return putDate()}())})
       
       query.onsuccess=()=>{
         let match=query.result;
         console.log(match)
         if(match !==undefined){
         console.log(match);
         alert(match);
         }
       seeAll(rd2);
         printState();
   
     }
     query.onerror=()=>{
   
     }
     
   
   }
       
         txn.oncomplete=()=>{
       db.close()
       
     }
       
       
     } 
       
     
   document.getElementById("formBox").style.display="none";
   document.getElementById("bg").style.display="none";
   return false;
   
   
   }
   
   function lengoMauzo(value){
     
     //this function assign new values of sales target("mapato2") in rd-object store,and ("mapato") in malengo object (match);
     
     // it then reasign new values to viwango object (match2) ;
     
     let defDB=currentDB[currentDB.length-1]
     let request=indexedDB.open(defDB);
     
     request.onsuccess=()=>{
       let db=request.result;
       db.onversionchange=()=>{
         db.close();
         location.reload();
       }
       let txn=db.transaction(mal,"readwrite");
       let store=txn.objectStore(mal);
      let query= store.put(recordingTargets("mapato",value));
       query.onsuccess=()=>{
         alert(`${query.result} inserted successful! `);
       }
       txn.oncomplete=()=>{
         db.close();
       }
     }
   
     printMalengo();
   }
   
   function ongezaLengo(){
   
      deleteBar(["sideBar","deleteSignMapato"])
    /* if(document.getElementById("mzigoUmeisha")){
       document.getElementById("mzigoUmeisha").remove();
   document.getElementById("bg").remove();
     }*/
     
    if(document.getElementById("sideBar")){
      deleteBar(["sideBar","deleteSignMapato","bg"]);
      
      
      // document.getElementById("sideBar").remove();
     //  document.getElementById("bg").remove();
      
     
     
     let div=document.createElement("div");
     div.id="sideBar";
     div.style="display:flex;gap:10px;justify-content: center;position:fixed;top:30%; left:4%;width:92%;z-index:10000; background:rgba(59,99,59,0.93);border-radius:10px;border:1px solid rgba(255,255,255,0.7);"
     
   
       div.innerHTML=` <input type="number" id="mzigo2" name="mzigo2" placeholder="ingiza stock" class="box" style="margin-bottom:10px;" onchange="mzigoMpya(this.value);" required>`;
          
     document.body.appendChild(div);
     let bg=document.createElement("div");
     bg.id="bg";
     bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,0.6);margin-left:-10%;margin-top:-10%;";
     
     document.body.appendChild(bg);
     
     }
     
     else{
     let div=document.createElement("div");
     div.id="sideBar";
     div.style="display:flex;gap:10px;justify-content: center;position:fixed;top:30%; left:4%;width:92%;z-index:10000; background:rgba(59,99,59,0.63);border-radius:10px;border:1px solid rgba(255,255,255,0.4);"
     
     div.innerHTML=`
     <p align="center">Lengo la Mauzo/Mapato:<br>
          <input type="number" id="mzigo2" name="mzigo2" placeholder="ingiza stock" class="box" style="margin-bottom:10px; margin-top:10px; width:30%;" value=0 onchange="lengoMauzo(this.value);" required></p>
     `;
     document.body.appendChild(div);
     let bg=document.createElement("div");
     bg.id="bg";
     bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,0.6);margin-left:-10%;margin-top:-10%;";
     
     document.body.appendChild(bg);
     crossSign(12,30,90);
     }
   
   
   }
   
   
   function postValue2(){
      
   let defDB=currentDB[currentDB.length-1]
       
   let name1=document.f.jina.value;
       let value1=document.f.gharama.value;
   let request=indexedDB.open(defDB);
     
     request.onsuccess=()=>{
       let db=request.result;
       
   
       let txn=db.transaction(mal,"readwrite");
       let store=txn.objectStore(mal);
       let query=store.put(recordingTargets(name1,value1));
       
       
       
       query.onsuccess=()=>{
         let match=query.result;
         
         if(match !==undefined){
         
         alert(`${match} added successful`)
         
         }
         printMalengo();
   
     }
     query.onerror=()=>{
       alert("error "+query.result.error);
     }
     
     txn.oncomplete=()=>{
       db.close()
       
       
     }
     
   }
   
   //deleteBar(["formBox","sideBar","bg","deleteSignMapato"]);
   document.getElementById("formBox").style.display="none";
   document.getElementById("bg").style.display="none";
   //document.getElementById("deleteSignMapato").style.display="none";
   
      function putMalengo(name1,value1){
   
   let defDB=currentDB[currentDB.length-1]
     
       let request=indexedDB.open(defDB);
     
     request.onsuccess=()=>{
       let db=request.result;
      // alert("db opened successful");
   
    //malengo objectstore
       let txn=db.transaction(rd,"readwrite");
       let store=txn.objectStore(rd);
       
        let store2= store.index("name");
        
        //getting mapato2 object;
        
        let mapato2=store2.get("mapato2");
        let keyVal;
        mapato2.onsuccess=()=>{
          alert(`mapato2 ${mapato2.result.value}`);
          console.log(mapato2.result)
          let mp=mapato2.result;
          
          //objects;
           keyVal=mp.value;
        //console.log(keyVal)
       
       //getting VIWANGO
       let query=store2.getKey("viwango")
       query.onsuccess=()=>{
        //alert("indexing went very well");
         let key=query.result;
         //alert(match);
         if(key !==undefined){
         // alert("Yes its not undefined");
         
      //   getTime viwango object;
      let match2=store.get(key)
      
      match2.onsuccess=()=>{
        
        //match3 is now viwango obje,lct;
        let match3=match2.result;
      
         match3.values[String(name1)]=value1/keyVal;
         //first delete "viwango object";
         
         let delViw=store.delete(key);
         delViw.onsuccess=()=>{
           
         alert("deleted successful");
         
         
       let q2=store.put({name:"viwango",values:match3.values},key)
   
         
         q2.onsuccess=()=>{
          
          alert(`100% success`);
         }
      /*   q3.onsuccess=()=>{
           let key=q3.result;
           alert("we got key successful");
          let q= store.delete(key);
          q.onsuccess=()=>{
            alert("we deleted successful!");
            
            
          }
           
         }
         }*/
       //  printMalengo();
   }
     }}}
   
         
       }
       
       
       
       //MALENGO
     let query=store2.getKey("malengo")
       query.onsuccess=()=>{
        alert("indexing went very well");
         let key=query.result;
         //alert(match);
         if(key !==undefined){
          //alert("Yes its not undefined");
      //   console.log(match);
      let match2=store.get(key)
      
      match2.onsuccess=()=>{
        
        let match3=match2.result;
      console.log(match3)
         match3.values[String(name1)]=value1;
         
         let delMalengo=store.delete(key);
         
         delMalengo.onsuccess=()=>{
           alert("malengo deleted successful");
         
       let q2=store.put({name:"malengo",values:match3.values},key)
       //  console.log(`${match} added successful`);
       //  let q3=store2.getKey("malengo");
         
         q2.onsuccess=()=>{
          
          alert(`100% success`);
         }
   
         }
     }}}
     query.onerror=()=>{
       alert("error "+query.error);
     }
       ;
       
     txn.oncomplete=()=>{
       db.close()
           }
        }
     }
   //putMalengo(name1,value1);
   
   return false;
   
   }
   
   function malMuda(start){
     let now=Math.ceil(new Date().getTime()/1000);
     
     let d=Math.ceil(now - start);
     // d=90000;
     if(d>=0 && d<60){
       return `sekunde ${d} zilizopita`;
     }
     if(d>=60 && d<3600){
       return `Dakika ${Math.floor(d/60)} zimepita`;
     }
     if(d>=3600 && d<86400){
       return `Saa ${Math.floor(d/3600)} zimepita`;
     }
   if(d>=86400 && d<604800){
       return `Siku ${Math.floor(d/86400)} zimepita`;
     }
     if(d>=604800 && d<2419200){
       return `Wiki ${Math.floor(d/604800)} imepita`;
     }
   if(d>=2419200 && d<29030400){
       return `Miezi ${d/2419200} imepita`}
    /*
   if(d>=24192000 && d<290304000){
       return "Miezi "+ Math.ceil(d/24192000)+" uliopita";
     }
   if(d>=290304000){
       return "Miaka "+ Math.ceil(d/290304000)+" uliopita";
     }*/
   }
   
   function printMalengo(){
    
   let defDB=currentDB[currentDB.length-1]
     
     let request=indexedDB.open(defDB);
     
     request.onsuccess=()=>{
       let db=request.result;
       
       db.onversionchange=()=>{
         db.close();
         location.reload();
       }
       
       let txn=db.transaction(mal,"readwrite");
       let store=txn.objectStore(mal);
       let q=store.get("mapato");
       
       q.onsuccess=()=>{
       if(q.result.value !== null){
         deleteBar(["divMalengo"]);
   let hd5=document.createElement("table");
    hd5.id="divMalengo";
   // hd5.style="border-collapse:collapse;"
    let w="10%";
    let right="right";
     hd5.style=`background:rgba(0,23,0,0.8);display:flex;flex-flow:column;width:auto;padding-left:1em;padding-right:1em;padding-top:1em;/*padding-bottom:1em*/;overflow:scroll;position:relative;top:72px;left:-5px;`;
     hd5.innerHTML=`<tr style="display:flex;padding-left:1em;padding-right:2em;padding-top:1em;padding-bottom:1em;">  <td style="/*font-weight:350;*/min-width:20%;padding-left:1em;padding-right:2em;scope:column;/*border:1px solid white;*/">No</td>
     
     <td style="/*font-weight:350;*/min-width:20%;padding-left:1em;padding-right:2em;scope:column;/*border:1px solid white;*/">Lengo</td>
     
   <td style="/*font-weight:350;*/min-width:20%;padding-left:1em;padding-right:2em;scope:column;/*border:1px solid white;*/">Thamani</td>
   
   <td style="/*font-weight:350;*/min-width:20%;padding-left:1em;padding-right:2em;scope:column;/*border:1px solid white;*/">Kiwango</td>
   
   
   <td style="/*font-weight:350;*/min-width:20%;padding-left:1em;padding-right:2em;scope:column;/*border:1px solid white;*/">Muda</td>`;
     document.body.appendChild(hd5)
    // document.body.style.overflow="scroll";
       
        // document.getElementById("divMalengo").innerHTML="";
       let n=0;
       let query=store.openCursor();
       
       
       query.onsuccess=()=>{
         
         let match=query.result;
         if(match !=null && match.value){
          if(match.value){ 
            
            if(n%2==0){
            let div=document.createElement("tr");
           
           div.style="display:flex;padding-left:1em;padding-right:2em;padding-top:1em;padding-bottom:1em;"
           let pdLeft="2%";
          let pdRight="2%"
          
        /*   div.style="display:flex;gap:2%;border-left:1px solid white;width:100%; ";*/
        
           div.innerHTML=`
             <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;/*border:1px solid white;*/">${++n}</td>
           <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350; background:rgba(110,110,110,1);color: white/*border:1px solid white;*/" onclick="deleteDialogue(this,'lengo');">${match.value.name}</td>
           <!-- The value of target -->
           <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;/*border:1px solid white;*/">${Number(match.value.values).toFixed(0)}</td>
           <!-- Date the goal set -->
           <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;/*border:1px solid white;*/">${(match.value.values/q.result.values *100).toFixed(0)}%</td>
       
               <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;/*border:1px solid white;*/">${malMuda(match.value.now)}</td>
           `;
           document.getElementById("divMalengo").appendChild(div);
           match.continue()}
            else{
              
            let div=document.createElement("tr");
           
           div.style="display:flex;padding-left:1em;padding-right:2em;/*padding-top:1em;padding-bottom:1em; background:rgba(34,96,25,1)*/;"
           let pdLeft="2%";
          let pdRight="2%"
          
        /*   div.style="display:flex;gap:2%;border-left:1px solid white;width:100%; ";*/
        
           div.innerHTML=`
             <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;background:rgba(34,96,25,1);padding-top:1em;/*border:1px solid white;*/">${++n}</td>
             
           <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;background:rgba(34,96,25,1);padding-top:1em;background:gold;border-radius:10px;color: black/*border:1px solid white;*/" onclick="deleteDialogue(this,'lengo');">${match.value.name}</td>
           
           <!-- The value of target -->
           <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;background:rgba(34,96,25,1);padding-top:1em;/*border:1px solid white;*/">${Number(match.value.values).toFixed(0)}</td>
           <!-- Date the goal set -->
           <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;background:rgba(34,96,25,1);padding-top:1em;padding-bottom:1em;/*border:1px solid white;*/">${(match.value.values/q.result.values *100).toFixed(0)}%</td>
       
               <td style="min-width:20%;padding-left:1em;padding-right:2em;font-weight:350;background:rgba(34,96,25,1);padding-top:1em;padding-bottom:1em;/*border:1px solid white;*/">${malMuda(match.value.now)}</td>
           `;
           document.getElementById("divMalengo").appendChild(div);
           match.continue()}
            }
          }
         }
        
     query.onerror=()=>{
       alert(`error occurred`) 
          }
       }
       else{
         bgLoading("Ingiza kwanza malengo ya mapato");
       }}
   
    
    txn.oncomplete=()=>{
      db.close();
    }}
   }
   
   
let ts2=0;





    
let faidas=[];
function add(id){
  
  let defDB=currentDB[currentDB.length-1];
  
  let mp1=currentACC[currentACC.length-1];
  
  var el=document.getElementById(String(id));
 
  
  var test=document.getElementById("test");
  var parent=el.parentElement;
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
  var total=parent.children[parent.children.length-1];

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


//getObject("Cetrizen");

function mzigoMpya(newVal){
let defDB=currentDB[currentDB.length-1]
let mp1=currentACC[currentACC.length-1];

 let item=idS[idS.length -1];
  alert(item);
  
  
  
   let request=indexedDB.open(defDB);
   
   request.onsuccess=()=>{
     
   let db=request.result;
   
   db.onversionchange=()=>{
     db.close();
     window.location.reload()
   }
   
   let txn=db.transaction(mp1,"readwrite");
   let store=txn.objectStore(mp1);
   
   let query=store.get(item);
   
   query.onsuccess=()=>{
     let match=query.result;
     
     if(match != "undefined"){
      // alert(`match kununua ${match.bei_Kununua}`);
       let updated= Number(newVal)+Number(match.mzigo);
       let query2=store.put({name:match.name,jumla:match.jumla,values:match.values,bei:match.bei,lengo:match.lengo,bei_Kununua:match.bei_Kununua,unit:match.unit,mzigo:updated})}
   }
     txn.oncomplete=()=>{
       db.close();
     }
   }
   document.getElementById("formBox2").remove();
  // document.getElementById("bg").remove();
  }

let deleteThis=[];
let saas=[];
function deleteTransaction(init=null){
let now1=saas.pop()
let defDB=currentDB[currentDB.length-1];
let mp1=currentACC[currentACC.length-1];
let rd1=currentRd[currentRd.length-1]

  let pJina=deleteThis.pop();
  
  let  current=document.getElementById("currentDate").textContent;
  
  
  let arr=[pJina,current,now1];
  
  let request=indexedDB.open(defDB);
  request.onsuccess=()=>{
    let db=request.result;
    
    let txn=db.transaction(rd1,"readwrite");
    let store=txn.objectStore(rd1);
    
    if(init != null){
    //  alert("yeeees");
      let select=document.createElement("select");
      
      select.style="position:fixed;top:4%;left:80%;z-index:21000;font-size:70%;width:10%;border-radius:7px;"
      
      select.id="insertTransactionManually";
      let store3=store.index("date");

     let qr= store3.openCursor(null,"prevunique");
     
     qr.onsuccess=()=>{
     //  alert("cursor opened..");
      let cursor=qr.result;
      
      if(cursor != undefined){
        
        let option=document.createElement("option");
        //alert("DOM elements ...");
        option.textContent=cursor.value.date;
        
        select.appendChild(option)
        
        cursor.continue();
        
        
      }
      
     else{ 
     }
      

     }
      
            document.body.appendChild(select);
      select.addEventListener("change",insertTransactionManually,true,select.value)
     // alert("finished");   
      
      
    
  }
  
  else{
    
    let store1=store.index("name");
    let searchNow=store1.openCursor()
    searchNow.onsuccess=()=>{
      let transAc=searchNow.result;
      
      if(transAc !=undefined){
       //alert(transAc.value.hrs);
        
      if(transAc.value.name==arr[0] && transAc.value.date==arr[1]){
        
      //  alert(`hrs ${transAc.value.hrs} \n arr ${arr[2]} `);
        
     //   alert(String((transAc.value.hrs).trim())==String((arr[2]).trim()))
        
        
        if((transAc.value.hrs).trim()== (arr[2]).trim()){
          alert("deleted");
          
               //      alert(`${transAc.value.date} \n ${transAc.value.name}`);
          let getQ=transAc.delete();
         
         // alert(`this is key ${transAc.key}`);
              getQ.onsuccess=()=>{
            let key=getQ.result;
            //alert(key);

          }
             getQ.onerror=()=>{
               alert("error occured")
             }

     }
       else{ transAc.continue();}
      }
     

        
        else{
        //  alert(`name ${transAc.value.name}\n siku ${transAc.value.}\nsaa ${transAc.value.hrs}`)
          transAc.continue();
        }
        
        
        
      }
      else{
        //...
      }

    }
    
  }
    txn.oncomplete=()=>{
      db.close();
     
    }
    
  }
  miamalaLeo(current);
}

function deleteLengo(){
//let now1=saas.pop()
let defDB=currentDB[currentDB.length-1];
let mp1=currentACC[currentACC.length-1];

  let pJina=deleteThis.pop();
  
  
  let request=indexedDB.open(defDB);
  request.onsuccess=()=>{
    let db=request.result;
    
    let txn=db.transaction(mal,"readwrite");
    let store=txn.objectStore(mal);
   
    
    let del=store.delete(pJina);
    del.onsuccess=()=>{
      alert("deleted");
    }
    
    del.onerror=()=>{
      console.log(del.error)
    }
    
  
    txn.oncomplete=()=>{
      db.close();
     printMalengo();
    }
    
  }
  
}

function insertTransactionManually(value){
  
  deleteBar(["sideBar","deleteSignMapato"]);
  
  value=value.target.value;
  
  var sideBar=document.createElement("div");
  sideBar.id="sideBar";
  
  sideBar.style=`position:fixed;
                 top:18.5%; 
                 left:5%;
                 width:90%; 
                 z-index:22000;
                 min-height:64%; 
                 background:#ebebeb;
                 opacity:0.95;
                 display:flex;
                 overflow:scroll; 
                 flex-flow:column;
                 border-radius:7%;`;
  
  sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;
                                                 font-weight:400;
                                                 color:white; 
                                                 background:rgba(23,48,25,0.7);
                                                 width:74%;
                                                 margin-left:8%;
                                                 border-radius:5px;">Ingiza Muamala<br> <span id="addManually"> ${value} <span></h5>
  
  <form style="display:flex;
               flex-flow:column;
               justify-content:center;
               padding-right:15%;" id="f4" name="f4" onsubmit="return recordManually()">
  <p style="display:flex;
            margin-left:10%;
            color:black"> Bidhaa <input id="bidhaa" name="bidhaa" type="text" style="margin-left:auto; width:40%; border:1px dotted black;" required></p>
  
    <p style="display:flex;
              margin-left:10%;
              color:black">Bei <input type="number" id="bei" name="bei" style="margin-left:auto; width:40%; border:1px dotted black;" required></p>
    
        <p style="display:flex;
                  margin-left:10%;
                  color:black">Kiasi <input type="text" id="qt" name="qt" placeholder="kg,ps, nk" style="margin-left:auto; width:40%; border:1px dotted black;" required></p>
   
       <p style="display:flex;margin-left:10%;color:black">Faida <input type="number" id="faida" name="faida" style="margin-left:auto; width:40%; border:1px dotted black;" required></p>
   
   <p style="display:flex;margin-left:10%;"><input type="submit" value="rekodi" style="background:rgba(43,88,43,0.7);margin-left:auto;width:100%;box-shadow:1px 1px 1px #000;border-radius:10px; color:white;" /><p>
  </form>
  
  `
  
  document.body.appendChild(sideBar);
    crossSign(14,24,84,22000,"black");
    
   // seeAll(rd);
    
  //deleteBar(["sideBar"]);
  //return false
}

function recordingObjectManually(name,price,qt,faida,date){
 //let el=document.getElementById("screen1").innerHTML;
 // alert(el);
 
  //let qt=getWord(el);
  
 /* if(el=="..."){
    productNames.length=0;
    priceBag.length=0;
   return;
 } */
  //let qt2=getWord2(qt);
  
 // let fai=faidas.pop()*qt2;
  //alert(`qt is ${qt}\n qt2 is ${qt2} \n faida is ${fai}`);
 // console.log(`array`,faidas)
  document.getElementById("screen1").innerHTML="Hongera! Imerekodiwa";
  document.getElementById("screen2").innerHTML="";
  
  //alert(`date again ${date},faida ${faida}`)
  return {name:name,price:price,Qt:qt,date:date,hrs:(function(){ return putHR()}()),faida:faida};
}


function recordManually(){
let defDB=currentDB[currentDB.length-1];
let rd1=currentRd[currentRd.length-1];

let name=document.f4.bidhaa.value;
let price=Number((document.f4.bei.value).trim());
let qt=document.f4.qt.value;
let faida=Number(document.f4.faida.value);
let date=(document.getElementById("addManually").textContent).trim();
  
  let request=indexedDB.open(defDB);
  
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      window.location.reload();
    }
    let txn=db.transaction(rd1,"readwrite");
    let store=txn.objectStore(rd1);
    let query=store.put(recordingObjectManually(name,price,qt,faida,date));
    
    query.onsuccess=()=>{
      alert(`${date} , success, ${qt}`);
      let match=query.result;
    
    }
    txn.oncomplete=()=>{
      db.close()
    }
  }
  deleteBar(["sideBar","deleteSignMapato"]);
  
  miamalaLeo(date);
  return false;
}

function futaRecord(){
let defDB=currentDB[currentDB.length-1];
let mp1=currentACC[currentACC.length-1];
  
  if(confirm(`unafuta rekodi zako kwenye akaunti ya ${mp1} ?`)){
var request=indexedDB.open(defDB);
  
  request.onsuccess=()=>{
  var db=request.result;
  db.onversionchange=()=>{
    db.close();
    alert("Database version changed, Please, reload a page")
  }
  
  let txn=db.transaction(mp1,"readwrite");
  let store=txn.objectStore(mp1);
  
  let query=store.clear();;
  
  query.onsuccess=()=>{
    let match=query.result;
    
    if(match !==undefined){
      //console.log(match,"cleared successful!");
   
    }
    else{
      alert("Database ni tupu, tafadhali unda akaunti za bidhaa zako");
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
}



function futaJumla(){

if(confirm ("unafuta jumla zote")){

let defDB=currentDB[currentDB.length-1]
let mp1=currentACC[currentACC.length-1];
  
  let request1=indexedDB.open(defDB);
  
  request1.onsuccess=()=>{
    let db=request1.result;
    db.onversionchange=()=>{
    db.close();
    alert("Database version changed, Please, reload a page")
  }
  
  var txn=db.transaction(mp1,"readwrite");
  var store=txn.objectStore(mp1);
  
  var query=store.openCursor();
 
  query.onsuccess=()=>{
    var match7=query.result;
    if(match7 !==undefined){
  
   
   if(match7){
     
     if(match7.value.name!="total"){
   
  let jumla1=0; 
  let query1=store.put({name:match7.value.name,jumla:jumla1,values:match7.value.values,bei:match7.value.bei,bei_Kununua:match7.value.bei_Kununua,lengo:match7.value.lengo,unit:match7.value.unit,mzigo:match7.value.mzigo});
  
 query1.onsuccess=()=>{
 
   match7.continue();
 }
 
  
     }
    }

}
query.onerror=()=>{
  alert(query.result.error);
}

txn.oncomplete=()=>{
  db.close();
}
}
  }}
  printState();
  document.getElementById("screen1").innerHTML="...";
  document.getElementById("screen2").innerHTML="";
}


// recording Miamala;

function seeAll(obj){
let defDB=currentDB[currentDB.length-1]
  let request=indexedDB.open(defDB);
  
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
   
    let txn=db.transaction(obj,"readonly");
    let store=txn.objectStore(obj);
    
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ console.log(match.value);
        match.continue()}
      }
     /* else{
        alert("records are exhausted");
    }*/
  }
  query.onerror=()=>{
    alert(`error occurred`) 
  }
  txn.oncomplete=()=>{
    db.close();
  }
 }
}



function miamalaLeo(date=String(putDate())){
  
  let defDB=currentDB[currentDB.length-1];
  let rd1=currentRd[currentRd.length-1]
  
  deleteBar(["sideBar","deleteSignMapato","malengoHd","miamala_Table","backButton","optionButton","taarifaMapato"]);
  hideVisibility(["printState222"]);
  
  let sideBar=document.createElement("div");
  sideBar.id="malengoHd";
  
  sideBar.style=`position:fixed;top:0;left:-5px;min-width:100%;; background:rgba(0,23,0,1.8);z-index:20000`;
  
  sideBar.innerHTML +=` <h5 id="ubaoMiamala" style="margin-bottom:0;font-weight:450;font-size:1em;background:white;color:black;border-radius:10px;margin-left:35.7%;width:30%; text-align:center">Mapato</h5><div style="display:flex;font-weight:350;font-size:80%;justify-content: center; position:relative;top:-40.5%/*;left:18%*/;"><span onclick="miamalaLeo(putJana())" style="padding:0;font-size:170%;">\<<</span> <span align="center" id="currentDate" style=";font-weight:350;color:yellow;width:30%; overflow:scroll;position: fixed;top:1%;left:2%;" >${date}</span><span style="padding:4%;" onclick="miamalaLeo(putDate());jana1=0;">Leo</span><span onclick="miamalaLeo(putKesho());" style="padding:0;font-size:160%;">\>></span></div>
       
       <svg style="padding-top:5px;margin-left:10px;/*;border:1px solid white*/;border-radius:5px;"  onclick="timeBack();" width="24" height="20">
    <path d="M 4 4 H 18 M 4 9 H 18 M 4 14 H 18" stroke="white" stroke-Width="2" />
  </svg>`;
  
  document.body.appendChild(sideBar)
  
  //sideBar.appendChild(table);
  
  let n=0;
  let pt=10;
  let pl=7;
  let fw=400;
  
let request=indexedDB.open(defDB);
  
  
 
  //sideBar.appendChild(table);
  
  
  
 if(rd1==rd){ 
   
   let table=document.createElement("table");
  table.id="miamala_Table";
  table.style=`background:rgba(0,23,0,0.8);display:flex;flex-flow:column;padding-left:1em;padding-right:1em;padding-top:1em;padding-bottom:1em;border-collapse:collapse;overflow:scroll;position:relative;top:55px;left:-5px;min-height:100%;`
  table.innerHTML +=`<tr style=\"width:100%;margin-top:10px;padding-bottom:10px;font-weight:${fw};">
  <!--<td style=\"padding-top:${pt}%;padding-left:${pl}%;\">No</td>
  -->
  <td style=\"padding-top:${pt}%;border-right:1px solid white;font-weight:${fw};font-size:14px;min-width:70px;max-width:70px;\">Bidhaa</td>
  <td  style=\"padding-top:${pt}%;;\">Kiasi</td>
  <td style=\"padding-top:${pt}%;min-width:18%;max-width:18%;\">Malipo</td>
  <td style=\"padding-top:${pt}%;min-width:18%;max-width:18%;  \">Faida</td>
  <td style=\"padding-top:${pt}%;\">Muda</td>
  </tr>`;
  
   document.body.appendChild(table);
   
   request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(rd1,"readonly");
    let store1=txn.objectStore(rd1);
    let store=store1.index("date");
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     if(match.value.date==date){
      // console.log(match.value)
       if(match.value.name !="mapato2" && match.value.name != "viwango"){
    
       n=++n;
      // writing into the table;    
   if(n%2 != 0){ table.innerHTML +=`
 
  <!-- Muamala row -->

  <tr style="min-width:100%;background:rgba(30,78,32,0.8);padding-bottom:1em; ">
       
        <!-- Bidhaa entries -->
 <td onclick="deleteDialogue(this);" style=\"width:20%;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px; background:#ebebeb;color:black;min-width:70px;max-width:70px;border-right:1px solid white;border-radius:5px;\">${match.value.name}</td>
    <!-- Quantity entries -->
<td style=\"width:20%;padding-top:${pt}%;  font-weight:${fw};\">${match.value.Qt}</td>
       <!-- Price entries -->
<td style=\"width:20%;padding-top:${pt}%;font-weight:${fw};\">Tshs ${match.value.price}</td>
       <!-- Faida entries -->
<td style=\"width:20%;padding-top:${pt}%;font-weight:${fw};\">Tshs ${match.value.faida.toFixed(0)}</td>
       <!-- Hrs entries -->
<td style=\"width:20%;padding-top:${pt}%;font-weight:${fw};\"> ${match.value.hrs}</td>
 </tr>
       ` }
   else{ table.innerHTML +=`
 
     <!-- Muamala row -->
  <tr style="min-width:1000px;max-width:100%;padding-bottom:1em;color:gold;">
       
      <!-- Number entries -->
  <!--<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};\">${n}</td>-->
  
       <!-- Bidhaa entries -->
 <td offsetLeft="18%" onclick="deleteDialogue(this);" style=\"align-items:center;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px; background:gold;color:black;min-width:70px;max-width:70px;border-radius:5px\">${match.value.name}</td>
   
    <!-- Quantity entries -->
<td style=\"padding-top:${pt}%;font-weight:${fw};\">${match.value.Qt}</td>
      
       <!-- Price entries -->
<td style=\"padding-top:${pt}%;;font-weight:${fw};\">Tshs ${match.value.price}</td>
     
       <!-- Faida entries -->
<td style=\"padding-top:${pt}%;;font-weight:${fw};\">Tshs ${match.value.faida.toFixed(0)}</td>
      
       <!-- Hrs entries -->
<td style=\"padding-top:${pt}%;;font-weight:${fw};\"> ${match.value.hrs}</td>
 </tr>
       ` }
       
     
         
       }
        };
        match.continue()}
      }
     /* else{
        alert("records are exhausted");
    }*/
  }
  query.onerror=()=>{
    alert(`error occurred`) 
  }
  txn.oncomplete=()=>{
    db.close();
  }
 }}
 if(rd1==rd2){
   document.getElementById("ubaoMiamala").innerHTML="Matumizi";
   
let table=document.createElement("table");
  table.id="miamala_Table";
  table.style=`background:rgba(0,23,0,0.8);display:flex;flex-flow:column;padding-left:1em;padding-right:1em;padding-top:1em;padding-bottom:1em;border-collapse:collapse;overflow:scroll;position:relative;top:55px;left:-5px;min-height:100%;`
  table.innerHTML +=`<tr style=\"display:flex;flex:1 1 0;margin-top:10px;padding-bottom:2px;font-weight:${fw};">
  <!--<td style=\"padding-top:${pt}%;padding-left:${pl}%;\">No</td>
  -->
  <td style=\"padding-top:${pt}%;padding-left:0px;font-weight:${fw};font-size:14px;overflow:scroll;min-width:50px;max-width:50px;\">Matumizi</td>
  
  <td  style=\"padding-top:${pt}%;padding-left:${pl}%;\">Gharama</td><td style=\"padding-top:${pt}%;padding-left:${pl}%;min-height:50px;max-width:50px;\">Kundi</td>
  
  <td style=\"padding-top:${pt}%;padding-left:${pl}%;  \">Muda</td></tr>

  `;
  
   document.body.appendChild(table);
   
   
   
   
   request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(rd1,"readonly");
    let store1=txn.objectStore(rd1);
    let store=store1.index("date");
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     if(match.value.date==date){
      // console.log(match.value)
       if(match.value.name !="mapato2" && match.value.name != "viwango"){
     
    
       n=++n;
      // writing into the table;    
   if(n%2 != 0){ 
     console.log(match.value);
   table.innerHTML +=`

  <!-- Muamala row -->
  <tr style="display:flex;flex:1 1 0;background:rgba(30,78,32,0.8);padding-bottom:1em; ">
       <!-- Number entries -->
 <!--<td style=\"padding-top:0;padding-left:0;font-weight:${fw}; position:fixed:top:98%;left:97%;z-index:100;\">${n}</td> -->
        <!-- Bidhaa entries -->
 <td onclick="deleteDialogue(this);" style=\"padding-top:5%;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px;overflow:scroll; background:#ebebeb;color:black;min-width:70px;max-width:70px;border-radius:5px;text-align: center\">${match.value.name}</td>

          <!-- Price entries -->
<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};\">Tshs ${match.value.price}</td>

  <td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};\">Kundi ${match.value.group}</td>

       <!-- Hrs entries -->
<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};/*min-height:50px;max-width:50px;*/overflow:scroll;\"> ${match.value.hrs}</td>
 </tr>
       ` }
   else{ table.innerHTML +=`
 
     <!-- Muamala row -->
  <tr style="display:flex;flex:1 1 0;padding-bottom:1em;color:gold;">
       
      <!-- Number entries -->
  <!--<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};\">${n}</td>-->
  
       <!-- Bidhaa entries -->
 <td onclick="deleteDialogue(this);" style=\" padding-top:5%;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px;overflow:scroll; background:gold;color:black;min-width:70px;max-width:70px;border-radius:5px;text-align:center;\">${match.value.name}</td>
   

       <!-- Price entries -->
<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};\">Tshs ${match.value.price}</td>

    <td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};\">Kundi ${match.value.group}</td>
      
       <!-- Hrs entries -->
<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};\"> ${match.value.hrs}</td>
 </tr>
       ` }
       
       
     
         
       }
        };
        match.continue()}
      }
     /* else{
        alert("records are exhausted");
    }*/
  }
  query.onerror=()=>{
    alert(`error occurred`) 
  }
  txn.oncomplete=()=>{
    db.close();
  }
 }
 }
 
 optionButt(5,92,22000,"gold",showSideBarMeneja2,"Maelezo",[["Siku","maelezoSiku()"],["Wiki","maelezoWiki()"],["Wiki 2","maelezoWiki2()"],["Mwezi","maelezoMwezi()"],["Miezi 3","maelezoMiezi3()"],["Miezi 6","maelezoMiezi6()"],["Mwaka","maelezoMwaka()"],["Toka Mwanzo","maelezoYote()"]]);
  backButton(4);
}

function taarifa(date=String(putDate())){
  

  
  let defDB=currentDB[currentDB.length-1];
  let rd1=currentRd[currentRd.length-1]
  
  deleteBar(["sideBar","deleteSignMapato","malengoHd","miamala_Table","backButton","optionButton","taarifaMapato"]);
  hideVisibility(["printState222"]);
  
  let sideBar=document.createElement("div");
  sideBar.id="malengoHd";
  
  sideBar.style=`position:fixed;top:0;left:-5px;min-width:100%;; background:rgba(0,23,0,1.8);z-index:20000`;
  
  sideBar.innerHTML +=` <h5 style="margin-bottom:0;font-weight:450;font-size:1em;background:white;color:black;border-radius:10px;margin-left:35.7%;width:30%; text-align:center">Ripoti</h5><div style="display:flex;font-weight:350;font-size:80%;justify-content: center; position:relative;top:-40.5%/*;left:18%*/;"><span onclick="taarifa(putJana())" style="padding:0;font-size:170%;">\<<</span> <span align="center" id="currentDate" style=";font-weight:350;color:yellow;width:30%; overflow:scroll;position: fixed;top:1%;left:2%;" >${date}</span><span style="padding:4%;" onclick="taarifa(putDate());jana1=0;">Leo</span><span onclick="taarifa(putKesho());" style="padding:0;font-size:160%;">\>></span></div>
       
       <svg style="padding-top:5px;margin-left:10px;/*;border:1px solid white*/;border-radius:5px;"  onclick="timeBack();" width="24" height="20">
    <path d="M 4 4 H 18 M 4 9 H 18 M 4 14 H 18" stroke="white" stroke-Width="2" />
  </svg>`;
  
  document.body.appendChild(sideBar)
  
  //sideBar.appendChild(table);
  
  let n=0;
  let pt=10;
  let pl=7;
  let fw=400;
  
let request=indexedDB.open(defDB);
  
  
 
  //sideBar.appendChild(table);
  
  
  
  
   
   let table=document.createElement("table");
  table.id="miamala_Table";
  table.style=`background:rgba(0,23,0,0.8);display:flex;flex-flow:column;padding-left:1em;padding-right:1em;padding-top:1em;padding-bottom:1em;border-collapse:collapse;overflow:scroll;position:relative;top:87px;left:-5px;min-height:100%;`
  table.innerHTML +=`<tr style="display:flex;flex:1 1 0;background:rgba(30,38,32,0.8);padding-bottom:1em; color:gold;">
   <td onclick="deleteDialogue(this);" style=\"padding-top:${pt}%;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px;overflow:scroll;color:gold;min-width:50px;max-width:50px;border-radius:5px;\">Item</td>

<td style=\"padding-top:${pt}%;padding-left:${pl}%; min-width:50px;max-width:50px; font-weight:${fw};overflow:scroll;\">Mapato</td>

<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px">Matumizi</td>

<td style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px;">Balance</td>
 </tr>
   <tr style="display:flex;flex:1 1 0;background:rgba(30,38,32,0.8);padding-bottom:1em; ">
       <!-- Number entries -->
 
        <!-- Bidhaa entries -->
 <td onclick="deleteDialogue(this);" style=\"padding-top:5%;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px;overflow:scroll; background:#ebebeb;color:black;min-width:50px;max-width:50px;border-radius:5px;\">Mtaji</td>
    <!-- Quantity entries -->
<td id=\'mapatoMtaji\' style=\"padding-top:${pt}%;padding-left:${pl}%; min-width:50px;max-width:50px; font-weight:${fw};overflow:scroll;\">0</td>

<td id=\'matumiziMtaji\' style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px">0</td>

<td id=\'balanceMtaji\' style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px;">0</td>
 </tr>
 `
       ;
  
   document.body.appendChild(table);
   
   request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(mal,"readonly");
    let store=txn.objectStore(mal);
    //let store=store1.index("date");
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     
      // console.log(match.value)
       if(match.value.name !="mapato" && match.value.name != "viwango"){
    
       n=++n;
      // writing into the table;    
   if(n%2 == 1){
   table.innerHTML +=`
  <!-- Muamala row -->
  <tr style="display:flex;flex:1 1 0;background:rgba(30,78,32,0.8);padding-bottom:1em; ">
       <!-- Number entries -->
 
        <!-- Bidhaa entries -->
 <td onclick="deleteDialogue(this);" style=\"padding-top:5%;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px;overflow:scroll; background:#ebebeb;color:black;min-width:50px;max-width:50px;border-radius:5px;\">${match.value.name}</td>
    <!-- Quantity entries -->
<td id=\'mapato${match.value.name}\' style=\"padding-top:${pt}%;padding-left:${pl}%; min-width:50px;max-width:50px; font-weight:${fw};overflow:scroll;\">0</td>

<td id=\'matumizi${match.value.name}\' style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px">0</td>

<td id=\'balance${match.value.name}\' style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px;">0</td>
 </tr>
       ` }
  else{
   table.innerHTML +=`
  <!-- Muamala row -->
  <tr style="display:flex;flex:1 1 0;background:rgba(30,38,32,0.8);padding-bottom:1em; color:gold;">
   <td onclick="deleteDialogue(this);" style=\"padding-top:5%;max-height:30px;padding-left:0px;font-weight:${fw};font-size:14px;overflow:scroll; background:#ebebeb;color:black;min-width:50px;max-width:50px;border-radius:5px;\">${match.value.name}</td>

<td id=\'mapato${match.value.name}\' style=\"padding-top:${pt}%;padding-left:${pl}%; min-width:50px;max-width:50px; font-weight:${fw};overflow:scroll;\">0</td>

<td id=\'matumizi${match.value.name}\' style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px">0</td>

<td id=\'balance${match.value.name}\' style=\"padding-top:${pt}%;padding-left:${pl}%;font-weight:${fw};overflow:scroll;min-width:50px;max-width:50px;">0</td>
 </tr>
       ` }
       
       
     
         
       }
       ;
        match.continue()}
      }
     /* else{
        alert("records are exhausted");
    }*/
  }
  query.onerror=()=>{
    alert(`error occurred`) 
  }
  txn.oncomplete=()=>{
    db.close();
  }
   }
 
 
 optionButt(5,92,22000,"white",showSideBarMeneja2,"Maelezo",[["Siku","maelezoSiku()"],["Wiki","maelezoWiki()"],["Wiki 2","maelezoWiki2()"],["Mwezi","maelezoMwezi()"],["Miezi 3","maelezoMiezi3()"],["Miezi 6","maelezoMiezi6()"],["Mwaka","maelezoMwaka()"],["Toka Mwanzo","maelezoYote()"]]);
  backButton(4);


(function (){
  
  let current=date;
  
  
  let n=0;
  let mapato=0;
  let faida=0;
  
  
  let request=indexedDB.open(defDB);
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(rd,"readonly");
    let store1=txn.objectStore(rd);
    let store=store1.index("date");
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     if(match.value.date==current){
      // console.log(match.value)
       if(match.value.name !="mapato2" && match.value.name != "viwango"){
     
         mapato +=match.value.price;
         faida +=match.value.faida;
      n=++n;
      
          }
          
       }
      // match.continue();
         
       
         match.continue();
       }}
      else{
       // showDetails("Mapato ya Siku <br>" +String(current),mapato,faida,n);
       if(document.getElementById("mapatoMtaji")){
        let mt=document.getElementById("mapatoMtaji");
        mt.innerHTML=mapato-faida;
       }
       profitDistribution(faida,"matumizi");
        profitDistribution(faida,"mapato"); 
        
      }
    }
    txn.oncomplete=()=>{
      db.close();
       
      //alert("completed");
    }
   
  }
  }
())
  
}

function mapatoHelper2(k,period){
  k=k+1;
  let n=0;
  let mapato=0;
  let faida=0;
  let arr=[];
  
  function mp(k,p){
  let cur=putJana2(k)
  
  arr.push(cur);
  if(k!=0){
    //console.log(cur);
    
let defDB=currentDB[currentDB.length-1]

  
  
  let request=indexedDB.open(defDB);
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let rd1=rd;
    
    //console.log(db);
    
    let txn=db.transaction(rd1,"readonly");
    let store1=txn.objectStore(rd1);
    let store=store1.index("date");
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     if(match.value.date==cur){
      // console.log(match.value)
       if(match.value.name !="mapato2" && match.value.name != "viwango"){
     
         mapato +=match.value.price;
         faida +=match.value.faida;
      n=++n;
      
          }
          
       }
      // match.continue();
         
       
         match.continue();
       }}
      else{}
    }
    txn.oncomplete=()=>{

     
        showDetails(`Ripoti ya Mapato ya ${p}<br> <span style="font-size:80%;">${arr[0]} - ${arr[arr.length-1]}</span>`,mapato,faida,n);
        ;
        profitDistribution(faida)
           db.close();
     // alert("completed");
    }
    
  }
      
    
    
    
    mp(k=k-1,p)
  }
  else{
    
    return;
  }
  
}

mp(k,period);
}

function mapatoHelper(k,period){
  k=k-1;
  let n=0;
  let mapato=0;
  let faida=0;
  let arr=[];
 // let checks=[];
  
 function mp(k,p){
  
  
  
  for(let i=k; i>=0; i--){
    //console.log(cur);
    let cur=putJana2(i)
    arr.push(cur);
    
let defDB=currentDB[currentDB.length-1]

  
  
  let request=indexedDB.open(defDB);
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let rd1=rd;
    
    //console.log(db);
    
    let txn=db.transaction(rd1,"readonly");
    let store1=txn.objectStore(rd1);
    let store=store1.index("date");
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     if(match.value.date==cur){
      // console.log(match.value)
       if(match.value.name !="mapato2" && match.value.name != "viwango"){
     
         mapato +=match.value.price;
         faida +=match.value.faida;
      n=++n;
      
          }
          
       }
      // match.continue();
         
       
         match.continue();
       }}
      else{}
    }
    txn.oncomplete=()=>{

     
        showDetails(`Ripoti ya Mapato ya ${p}<br> <span style="font-size:80%;">${arr[0]} - ${arr[arr.length-1]}</span>`,mapato,faida,n);
        ;
       // checks.push(faida);
        
       profitDistribution(faida)
           db.close();

    }

  }
      
    
    
    
   // mp(k=k-1,p)
  }
  //let f=checks[checks.length-1];
 // f=Number(f);
//profitDistribution(f);
 
  
}


mp(k,period);
//console.log(arr)
//profitDistribution(100);
}

function maelezoWiki(){
  deleteBar(["sideBar"]);
jana1=0
  
  let rd1=currentRd[currentRd.length-1];
 if(rd1==rd) mapatoHelper(7,"Wiki");
 if(rd1==rd2) showMatumizi("wiki");
}
function maelezoWiki2(){
   deleteBar(["sideBar"]);
  // mapatoHelper(14,"Wiki 2");
   jana1=0;
   
 let rd1=currentRd[currentRd.length-1];
 if(rd1==rd) mapatoHelper(14,"Wiki 2");
 if(rd1==rd2) showMatumizi("wiki2");
 }
 
function maelezoMwezi(){
   deleteBar(["sideBar"]);
   //mapatoHelper(28,"Mwezi");
    jana1=0;
   
   let rd1=currentRd[currentRd.length-1];
 if(rd1==rd) mapatoHelper(28,"Mwezi");
 if(rd1==rd2) showMatumizi("mwezi");
 }
 
 function maelezoMiezi3(){
   deleteBar(["sideBar"]);
   jana1=0;
 //  let miezi=28*3;
 //  mapatoHelper(miezi,"Mwezi");
   
   let rd1=currentRd[currentRd.length-1];
 if(rd1==rd) mapatoHelper(28*3,"Mwezi");
 if(rd1==rd2) showMatumizi("Miezi 3");
 }

function maelezoMiezi6(){
 jana1=0;
 deleteBar(["sideBar"]);
 //let miezi=28*3*2;
  // mapatoHelper(miezi,"Miezi 6");
let rd1=currentRd[currentRd.length-1];
if(rd1==rd) mapatoHelper(28*6,"Mwezi");
 if(rd1==rd2) showMatumizi("Miezi 6");
}
 
function maelezoMwaka(){
  jana1=0;
deleteBar(["sideBar"]);
 
 let rd1=currentRd[currentRd.length-1];
if(rd1==rd) mapatoHelper(28*12,"Mwezi");
 if(rd1==rd2) showMatumizi("Mwaka");
 }

function maelezoSiku(){
  let rd1=currentRd[currentRd.length-1];
deleteBar(["sideBar"]);

let defDB=currentDB[currentDB.length-1];
  
  if(rd1==rd){
  let current=document.getElementById("currentDate").innerHTML;
  
  
  let n=0;
  let mapato=0;
  let faida=0;
  
  let request=indexedDB.open(defDB);
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(rd1,"readonly");
    let store1=txn.objectStore(rd1);
    let store=store1.index("date");
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     if(match.value.date==current){
      // console.log(match.value)
       if(match.value.name !="mapato2" && match.value.name != "viwango"){
     
         mapato +=match.value.price;
         faida +=match.value.faida;
      n=++n;
      
          }
          
       }
      // match.continue();
         
       
         match.continue();
       }}
      else{
        showDetails("Mapato ya Siku <br>" +String(current),mapato,faida,n);
        

      }
    }
    txn.oncomplete=()=>{
      db.close();
      //alert("completed");
      profitDistribution(faida); 
    }
   
  }
  }
  if(rd1==rd2){
    showMatumizi();
  }
  }
  
function profitDistribution(f,val="default"){
    
    let defDB=currentDB[currentDB.length-1];
    let rd1=currentRd[currentRd.length-1];
    
    if(val=="default"){
   if(rd1==rd){ 
     let el=document.getElementById("sideBar");
    
    let request=indexedDB.open(defDB);
    
    request.onsuccess=()=>{
      let db=request.result;
      
      let txn=db.transaction(mal,"readonly");
      let store=txn.objectStore(mal);
      
      let mapato=store.get("mapato");
      
      mapato.onsuccess=()=>{
        let obj=mapato.result;
        let val=obj.values;
        
     
        
        let query=store.openCursor();
        
        query.onsuccess=()=>{
          let match=query.result;
          
  if((match != undefined) && (match.value.name!="mapato")){
            
            let name=match.value.name;
            
            let rate=match.value.values/val;
            let distr=(rate*f).toFixed(1);
      
        el.innerHTML +=`
  <div style='display:flex;width:70%;margin:4px;margin-top:0;font-weight:400; padding-bottom:1em;padding-left:10%;padding-right:1em;overflow:scroll;font-size:100%;color:black' onclick=""><span style="max-width:100px;/* overflow:scroll;*/">${name}</span> <b style="margin-left:auto;max-width:70px;/*overflow:scroll;*/">${distr}</b></div>
             `;
              match.continue();
            
         
            
           
          }
          else{//alert("no more")
          }
              }
           }
      txn.oncomplete=()=>{
        db.close();
      }
        }
   }
   if(rd1==rd2){
     
   }
      
    }
    if(val=="mapato"){
      
    // let el=document.getElementById("sideBar");
    
    let request=indexedDB.open(defDB);
    
    request.onsuccess=()=>{
      let db=request.result;
      
      let txn=db.transaction(mal,"readonly");
      let store=txn.objectStore(mal);
      
      let mapato=store.get("mapato");
      
      mapato.onsuccess=()=>{
        let obj=mapato.result;
        let val=obj.values;
        
     
        
        let query=store.openCursor();
        
        query.onsuccess=()=>{
          let match=query.result;
          
  if((match != undefined) && (match.value.name!="mapato")){
            
            let name=match.value.name;
            
            let rate=match.value.values/val;
            let distr=(rate*f).toFixed(0);
      
        document.getElementById(`mapato${match.value.name}`).innerHTML=distr;
        
              match.continue();
          }
          else{//alert("no more")
          }
              }
           }
      txn.oncomplete=()=>{
        db.close();
      }
        }
   
    }
    if(val=="matumizi"){
      let arr3=["Mtaji"];
      let date=document.getElementById("currentDate").innerHTML;
      let matumizi=0;
      //alert(date);
    // let el=document.getElementById("sideBar");
    
    let request=indexedDB.open(defDB);
    
    request.onsuccess=()=>{
      let db=request.result;
      
      let txn=db.transaction(rd2,"readonly");
      let store=txn.objectStore(rd2);
      
      
        //let obj=mapato.result;
      //  let val=obj.values;
      
        let query=store.openCursor();
        
        query.onsuccess=()=>{
         // alert("open...");
          let match=query.result;
        //  alert(`group is ${match.value.group}\n date is ${match.value.date}`);
        
    if(match !=undefined){
    if(!arr3.includes(match.value.group)){ 
          arr3.push(match.value.group);
          
        }}
          
  if((match != undefined) && (match.value.date ==date)){
           // alert("open 222");
            let group=match.value.group;
            let pr=match.value.price;
            if(match.value.group =="Mtaji"){
              //alert("hello");
            let elM=document.getElementById("matumiziMtaji");
            
            elM.innerHTML=Number(elM.innerHTML) + match.value.price;
            }

        addMalengo2(group,pr)
       
        match.continue();
            }
          else{
            if(match)match.continue();
            }
          }
          
      txn.oncomplete=()=>{
     
    db.close()
       
        (function(){
          for(let i=0; i<arr3.length; i++){
            let id="matumizi"+String(arr3[i]);
            if(document.getElementById(id)){
              let cur=document.getElementById(id);
              let mapato=cur.previousElementSibling.innerHTML;
              let balance=cur.nextElementSibling.innerHTML;
              
              if(mapato && Number(balance) == 0){
                cur.nextElementSibling.innerHTML=Number(mapato);
              }
            }
          }
        }())
        ;
      }
        }
   
    }
    function addMalengo2(group,val){
    let v=0;
    
    if(document.getElementById(`matumizi${group}`)){
      
      let el=document.getElementById(`matumizi${group}`);
       
       el.innerHTML= Number(el.innerHTML)
      
     v+= Number(el.innerHTML) +Number(val);
     el.innerHTML=v;
     let prev=el.previousElementSibling;
     let next=el.nextElementSibling;
     
     next.innerHTML=(Number(prev.innerHTML)-Number(v)).toFixed(1);
   
    }
  }
  
     }

function maelezoYote(){

deleteBar(["sideBar"]);
let defDB=currentDB[currentDB.length-1];
let rd1=currentRd[currentRd.length-1];
  
  if(rd1==rd){
  
  let n=0;
  let mapato=0;
  let faida=0;
  
  let request=indexedDB.open(defDB);
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(rd1,"readonly");
    let store1=txn.objectStore(rd1);
  
    let query=store1.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
     
      // console.log(match.value)
       if(match.value.name !="mapato2" && match.value.name != "viwango"){
     if(match.value.price && match.value.faida){
    
         mapato +=match.value.price;
         faida +=match.value.faida;
      n=++n;
      
          }}
  
         match.continue();
       }}
      else{
        showDetails("Siku Zote",mapato,faida,n);
     profitDistribution(faida); 
        
    
      }
    }
    txn.oncomplete=()=>{
      db.close();
    }
    
  }
  } 
  if(rd1==rd2){
     showMatumizi("zote");
     }
  }
  
function matumiziSiku(muda="siku"){
  
   let todays=document.getElementById("currentDate").innerHTML
   let m=0;

   
   let defDB=currentDB[currentDB.length-1]
  let request=indexedDB.open(defDB);
  
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(rd2,"readonly");
    let store=txn.objectStore(rd2);
    
    if(muda=="siku"){
    
    let query=store.openCursor();
    
  query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       
 if(match.value.date==todays){
   
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
        match.continue()}
        else{match.continue();}
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) }
  }
    if(muda=="zote"){
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
    if(match !=null && match.value){
       
 
   console.log(match.value);
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
       
        match.continue();
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) }
  }
    if(muda=="wiki"){ 
      jana1=0;
      for(let i=7; i>0; i--){
        let today=putJana();
        let query=store.openCursor();
        console.log(today)
      query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       
 if(match.value.date==today){
   
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
        match.continue()}
        else{match.continue();}
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) } }
    }
    if(muda=="wiki2"){
      jana1=0;
      for(let i=14; i>0; i--){
        let today=putJana();
        let query=store.openCursor();
        console.log(today)
      query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       
 if(match.value.date==today){
   
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
        match.continue()}
        else{match.continue();}
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) } }
    }
    if(muda=="mwezi"){
      jana1=0;
      for(let i=28; i>0; i--){
        let today=putJana();
        let query=store.openCursor();
        console.log(today)
      query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       
 if(match.value.date==today){
   
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
        match.continue()}
        else{match.continue();}
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) } }
    }
    if(muda=="Miezi 3"){
   
     jana1=0;
      for(let i=28*3; i>0; i--){
      
        let today=putJana();
        let query=store.openCursor();
       // console.log(today)
      query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       
 if(match.value.date==today){
   
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
        match.continue()}
        else{match.continue();}
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) } }
    }
    if(muda=="Miezi 6"){
   
     jana1=0;
      for(let i=28*6; i>0; i--){
      
        let today=putJana();
        let query=store.openCursor();
       // console.log(today)
      query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       
 if(match.value.date==today){
   
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
        match.continue()}
        else{match.continue();}
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) } }
    }
    if(muda=="Mwaka"){
   
     jana1=0;
      for(let i=28*12; i>0; i--){
      
        let today=putJana();
        let query=store.openCursor();
       // console.log(today)
      query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       
 if(match.value.date==today){
   
       m+=match.value.price;
       addMalengo(match.value.group,match.value.price);
       
        match.continue()}
        else{match.continue();}
      }
     

  }
  query.onerror=()=>{
    alert(`error occurred`) } }
    }
    
    
  txn.oncomplete=()=>{
    db.close();
    document.getElementById("sideBar").innerHTML += `<div style='display:flex;width:70%; padding-bottom:1em;padding-top:1em;font-weight:350;font-size:100%; margin:2px;padding-left:10%;color:black; '>Jumla<b id="matumiz8" style="margin-left:auto;">${m}</b></div>`
  }
  }
  function addMalengo(nam,val){
    let v=0;
    if(document.getElementById(`mat${nam}`)){
      let el=document.getElementById(`mat${nam}`);
     // console.log(el.innerHTML);
       
       el.innerHTML= Number(el.innerHTML)
      
     v+= Number(el.innerHTML) +Number(val);
     el.innerHTML=v;
    }
  }
  
 }
  
  
 
 
function showMatumizi(muda="siku"){
   let d=document.getElementById("currentDate").innerHTML;
       
    deleteBar(["sideBar","deleteSignMapato"]);
    
    
   var sideBar=document.createElement("div");
  sideBar.id="sideBar";
   
   sideBar.style=`position:fixed; top:18.5%; left:15%;width:70%; z-index:22000;height:70%; background:#ebebeb;opacity:0.9;display:flex;overflow:scroll; flex-flow:column;border-radius:7%;`;
  
  sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;font-weight:400;color:white; background:rgba(23,48,25,0.7);width:80%;margin-left:8%;border-radius:5px;">Matumizi ya ${muda} <br> ${d}</h5>
  `
   
   document.body.appendChild(sideBar);
   
   let defDB=currentDB[currentDB.length-1]
  let request=indexedDB.open(defDB);
  
  request.onsuccess=()=>{
    let db=request.result;
    
    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(mal,"readonly");
    let store=txn.objectStore(mal);
    //let store=store1.index("name");
    
    let query=store.openCursor(null,"nextunique");
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if((match !=null && match.value) && match.value.name!="mapato"){
       if(match.value != null || undefined){ 
       sideBar.innerHTML +=`  <div style='display:flex;width:70%; padding-bottom:1em;padding-top:1em;font-weight:350;font-size:100%; margin:2px;padding-left:10%;color:black; '>${match.value.name}<b id=\'mat${match.value.name}\' style="margin-left:auto;">0</b></div>`
       
        match.continue()}
      }
  }
  query.onerror=()=>{
    alert(`error occurred`) 
  }
  txn.oncomplete=()=>{
    db.close();
    matumiziSiku(muda);
  }
 }
   crossSign(12,22.6,79,22000,"black");
 }

//miamalaLeo();

function zilizoisha(){
  
let defDB=currentDB[currentDB.length-1]

let mp1=currentACC[currentACC.length-1];
  
     deleteBar(["deleteSignMapato","sideBar"]);
     
     
     let div=document.createElement("div");
    div.id="sideBar";
    
    div.style=`position:fixed; top:18.5%; left:15%;width:70%; z-index:22000;height:70%; background:#ebebeb;opacity:1.9;display:flex;overflow:scroll; flex-flow:column;border-radius:7%;`;
    
    div.innerHTML +=`<h5 align="center" style='border-radius:5%;background:rgba(5,85,20,0.9);color:white;font-weight:450;margin-left:8%;width:60%;'>Zilizoisha</h5>`;
    
    let n=0;
     let request=indexedDB.open(defDB);
     
request.onsuccess=()=>{
    let db=request.result;

    db.onversionchange=()=>{
      db.close();
      location.reload();
    }
    
    let txn=db.transaction(mp1,"readonly");
    let store=txn.objectStore(mp1);
    
    let query=store.openCursor();
    
    query.onsuccess=()=>{
      
      let match=query.result;
      if(match !=null && match.value){
       if(match.value != null || undefined){ 
       
       if(match.value.mzigo==0){
       
         div.innerHTML +=`<div style='display:flex;gap:3%;border-top:0.5px dotted black;padding-bottom:4%; padding-top:3%;padding-left:4%;padding-right:4%;'><span style="font-weight:350;font-size:80%;color:black">${++n}</span><span style="font-weight:350;font-size:90%;margin-right:auto;color:black">${match.value.name}</span><button onclick="pushIds2(this);formBox2('ongeza');" style="border-radius:10px;font-size:80%;background:none;color:black;border:1px dotted rgba(30,30,30,0.8);">Ongeza</button></div>`;
           }
        match.continue()}
      }
   }
  query.onerror=()=>{
    alert(`error occurred`) 
  }
  txn.oncomplete=()=>{
    db.close();
  }
  
  crossSign(12,22.5,77,22000,"black");
 }
 
document.body.appendChild(div);

}





let ubaoCounter=[];
function isItSame(id){
 
 let arr=new Array();
 let pr= Number(document.getElementById("screen2").innerHTML);
 let w=document.getElementById("screen1").innerHTML;
  arr[0]=w;
  arr[1]=pr;
  ubaoCounter.push(arr);
 
 let el=document.getElementById(String(id));
 let name=el.parentElement.children[0].textContent;
  
 
   productNames.push(name);



   if(!productNames.every(nm=>nm==name)){
     //final price;
     if(pr !=""){priceBag.push(pr);
    // alert(` name is ${name} \n ub is ${ub}`);
     //reserve and remove last name of the product;
   let name2= productNames.pop();
     
     //take the actual name for recording;
     name=productNames.pop();
     
     //take the last price recorded
     let price=priceBag.pop();
     
     //record transaction;
    // recordTransaction(name,price);
     //alert(`${name} sold for ${price}`);
      productNames.length=0;
      productNames.push(name2);
      priceBag.length=0;
     
    priceBag.push(pr);
  // changeIndicator(true);
    
  }
}
      else{
       // changeIndicator(false);
      }
    }
 let grp2=[];
 
function forceRecord(){
  saverArray.length=0;
  let pr= Number(document.getElementById("screen2").innerHTML);
  
  
   if(productNames.length !=0){  let name=productNames.pop();
     if(pr !=""){priceBag.push(pr);
     //take the last price recorded
     let price=priceBag.pop();
     
     //record transaction;
     recordTransaction(name,price,grp2[grp2.length-1]);
    
      productNames.length=0;
  
      priceBag.length=0;

   }}
   else{
   bgLoading("Kurekodi,<br>Ingiza muamala kwanza"); 

}
}

function undoUbao(){
  let label=document.getElementById("screen1");
  let n=document.getElementById("screen2");
  if(ubaoCounter.length !=0){
    let content=ubaoCounter.pop();
  label.textContent=content[0];
  n.textContent=content[1];
}}

function singleOutObject(str,[...name]){
  
  let defDB=currentDB[currentDB.length - 1];
  let acc=currentACC[currentACC.length -1];
  
  let request=indexedDB.open(defDB);
  
  request.onsuccess=()=>{
    let db=request.result;
    
    let txn=db.transaction(str,"readonly");
    
    let store=txn.objectStore(str);
    
    //let index=store.index("name")
  
  
  let cursor=store.openCursor();
  
  cursor.onsuccess=()=>{
    
    let match=cursor.result;
    
    if(match != undefined){
   for(let i=0; i<name.length; i++){
      if(match.value.name == name[i]){
        console.log(name[i],match.value);
      }
        match.continue();
        }
      }
      else{
        console.log("didn't get");
        //match.continue();
      }
      
    }
    
  
  
  txn.oncomplete=()=>{
    db.close();
  }
}
}

/*setTimeout(()=>{
    seeAll(mat4);
  //profitDistribution()
},5000);*/

//STORAGE;

 


  
let ts=0;



function changeMatumizi(thiss,val=true){
  
  let defDB=currentDB[currentDB.length - 1];
  
  let mp1=currentACC[currentACC.length-1];
  
  let value=thiss.value;
  
  let name2=idS[idS.length-1];
  alert(name2);
  
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
      if(val=="group"){
     let rq2= store.put({name:match.name,jumla:match.jumla,values:match.values,group:value,date:match.date})
     ;
     rq2.onsuccess=()=>{
      alert("yees, its change changed");
       //console.log(` line 1335, ${rq2.result} was added successful!`)
     }}
      if(val=="jumla"){
     let rq2= store.put({name:match.name,jumla:match.jumla,values:match.values,group:match.group})
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


function setPrice2(id){
  let el=document.getElementById(String(id));
  let value=el.value;
  let par=el.parentElement;
  let prev=par.previousElementSibling;
  let name="beiMatumizi"+String(prev.innerHTML);
  localStorage.setItem(name,value);
  par.style.display="none";
  
}


 

 function putOptions42(){
let list6=document.getElementById("list6");
list6.innerHTML=`<option>zote</option>`;
let list5=document.getElementById("list5");


let arr=[];

let val=list5.value;

var sorted=sortObjects(state3);
var keys=Object.keys(sorted);
  
if(val=="zote"){
    
for(let i=0; i<keys.length; i++){
  let option=document.createElement("option");
  
  if(!arr.includes(`${keys[i][0]}${keys[i][1]}`)){ option.textContent=`${keys[i][0]}${keys[i][1]}${keys[i][2]}`;
  list6.appendChild(option)
            }
  arr.push(`${keys[i][0]}${keys[i][1]}${keys[i][2]}`);
   }
}
 else{
  
for(let i=0; i<keys.length; i++){
  let option=document.createElement("option");
  
  if(`${keys[i][0]}`==val){ option.textContent=`${keys[i][0]}${keys[i][1]}${keys[i][2]}`;
  list6.appendChild(option)
     }
   }
 }}
 



 
 
 
let minChoice=0;
function minimiz(value="zote"){
   var el=document.getElementById("table");
   let sel=document.getElementById("list");
  
   
   
   if(value=="zote"){
     printState();
    // list2.style.display="none";
   }
   
  else{ 
    if(minChoice==0){
      for(let i=0; i<el.children.length; i++){
     if(el.children[i].id[0] != value){
       el.children[i].style.display="none";
          }
       }
      ++minChoice;
       
    }
   else{
    let selected=sel.value;
       for(let i=0; i<el.children.length; i++){ 
         el.children[i].style="display:flex;gap:7px; flex-flow:column;";
       }
      sel.value=selected;
      for(let j=0; j<el.children.length; j++){
       
     if(el.children[j].id[0] != value){
       
       el.children[j].style.display="none";
          }
         
       }
       //minChoice=0;
        }
     }
   // putOptions2();
    //sel.style.display="none";
  }


let minChoice5=0;
function minimiz5(value="zote"){
   var el=document.getElementById("table4");
   
   let sel=document.getElementById("list5");
   
   if(value=="zote"){
     printProject3(state3);
   
    // list2.style.display="none";
   }
   
  else{ 
    if(minChoice5==0){
      for(let i=0; i<el.children.length; i++){
     if(el.children[i].id[0] != value){
       el.children[i].style.display="none";
      
        
         //list.style.display="none";
          }
       }
         ++minChoice5;
    }
    else{
      let selected=sel.value;
      printProject3(state3);
      sel.value=selected;
     
      for(let i=0; i<el.children.length; i++){
     if(el.children[i].id[0] != value){
       el.children[i].style.display="none";
         ++minChoice5;
          }
    
       }
     
        }
     }
     putOptions42();
  }

let minChoice2=0;
function minimiz2(value="zote"){
   var el=document.getElementById("table");
   
   let sel=document.getElementById("list2");
   
   if(value=="zote"){
     printState();
   //  list2.style.display="none";
   //  list.style.display="block";
   }
   
  else{ 
    if(minChoice2==0){
      for(let i=0; i<el.children.length; i++){
     if(`${el.children[i].id[0] +el.children[i].id[1]+el.children[i].id[2]}` != value){
       el.children[i].style.display="none";
          }
       }
        ++minChoice2;  
    }
    else{
     let selected=sel.value;
     printState();
     sel.value=selected;
     
      for(let i=0; i<el.children.length; i++){
     if(`${el.children[i].id[0]}${el.children[i].id[1]+el.children[i].id[2]}`!= value){
       el.children[i].style.display="none";
      
        }
      }
    }
  }
 // putOptions();
}



 


   
 function putBorder(id){
     
     var el=document.getElementById(String(id));
     // my list div #parent;
     
     var parent=el.parentElement;
     var par=parent.parentElement;
     
     let sibling=el.nextElementSibling;
   if(par.children){ for(let i=0; i<3; i++){
     
     
if(par.children[i].children){ 
  
              par.children[i].children[0].style="border-bottom:none; background:none;";
            }
    
  let p=par.children[i].children[1];
  if(p){
    p.style="display:none;";
  }
    
    }
     el.style="border-top:1px solid rgba(20,76,21,0.8);background:#ebebeb;padding:2.5px;color:rgba(12,52,16,1);border-radius:10px;";
     
     if(sibling){
       sibling.style="display:flex; flex-flow:column;";
     }
   }}
   
 function putBorder2(id){
   
   let el=document.getElementById(String(id));
   el.parentElement.style.display="none";

  
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
   
 function printValues(){
let defDB=currentDB[currentDB.length-1]
let mp1=currentACC[currentACC.length -1];

     var mtaji2=0;
         
  rekodiMapato.style.display="none";
 document.getElementById("rekodiMatumizi").style.display="none";
         
   document.getElementById("rekodiManunuzi").style.display="none";
         
table2.style.display="block";
     table2.innerHTML="";
     
     //four top of the table columns no,bidhaa,mauzo,unit sold,lengo, units lengo;
table2.innerHTML=`<caption>Stock<br>${putDate()}</caption><tr style="display:flex;flex:1 1 0;">
            <th scope="column" style="font-weight:550;min-width:40px;max-width:50px;margin-left:-1%;">No</th>
            <th scope="column" style="font-weight:550;min-width:100px;max-width:100px;padding-right 5px;text-align:left;" >Bidhaa</th>
            <th scope="column"  style="font-weight:550;margin-left:-12%;min-width:80px;max-width:80px;">Mauzo</th>
            </th>
            <th scope="column"  style="font-weight:550;margin-left:7px;min-width:80px;max-width:80px;" >Mzigo Uliouzwa</th>  <th scope="column"  style="font-weight:550;margin-left:7px;min-width:80px;max-width:80px;" >Mzigo Uliobaki</th><th scope="column"  style="font-weight:550;margin-left:7px;min-width:80px;max-width:80px;">Thamani ya Mzigo</th>
           </tr>`

   
          let request=indexedDB.open(defDB);
          
          request.onsuccess=()=>{
            let db=request.result;
            
            
            
            let txn=db.transaction(mp1,"readwrite");
            
            let store=txn.objectStore(mp1);
            
            let query=store.openCursor();
            
      query.onsuccess=()=>{
              let match=query.result;
              
     if((match !== null && match.value.name !="total") && match.value.name !="mtaji"){
    
          let item=match.value.name;
          
    var tr=document.createElement("tr");
  tr.style=""
  //setting item number;
  var td1=document.createElement("td")         ;
   //td1.className="nums";
   td1.innerHTML=`${++n}`;
   td1.style="min-width:40px;max-width:40px;overflow:scroll;"
 
 //first header mauzo;
 var th=document.createElement("th");
 th.scope="row";
 th.style="text-align:left;min-width:100px;max-width:100px;padding-right:5px;overflow:scroll;"
// th.className="items";
 th.innerHTML=`${item}`;
            
// total monetary value in sales;
  var td=document.createElement("td");
   //td.className="values";
   td.style="margin-left:-5%;min-width:80px;max-width:80px;"
   td.innerHTML=match.value.jumla;
            
//total units sold
 var td2=document.createElement("td")            ;
   // td2.className="values";
    td2.style="text-align:left;min-width:80px;max-width:80px;margin-left:-2%;";
 td2.innerHTML=`${match.value.unit} ${Number(match.value.jumla/match.value.bei).toFixed(0)} `

let lengo=document.createElement("td");
 //lengo.className="values";
 lengo.innerHTML=`${match.value.unit} ${Number(match.value.mzigo).toFixed(0)}`;
   lengo.style="text-align:left;max-width:80px;margin-left:1%";
  
let td3=document.createElement("td");

let mtaji=document.createElement("td");
mtaji.style="text-align:left;margin-left:1%;max-width:80px;min-width:80px;";

mtaji2 +=(match.value.bei_Kununua * match.value.mzigo);
mtaji.textContent=(match.value.bei_Kununua * match.value.mzigo).toFixed(0);
   // td3.className="values";
    let u=Number(match.value.lengo/match.value.bei).toFixed(0);
    
//td1=putting item number
     tr.appendChild(td1);
//th=putting name of the item;
     tr.appendChild(th);
//td=total monetary value in sales;
     tr.appendChild(td);
//td2=total units sold;
     tr.appendChild(td2)

  // putting mzigo uliobaki;
   tr.appendChild(lengo);
   
   tr.appendChild(mtaji);

//setting number of units per lengo;

if(u=="NaN"){
      td3.innerHTML="-";
     // tr.appendChild(td3);
      table2.appendChild(tr);
    }
    else{
      td3.innerHTML=u;
    //  tr.appendChild(td3);
      table2.appendChild(tr);
    }
             
     
       
       match.continue()
     }
         else{
           //alert("records are exhausted")
           };   
       }
          
          txn.oncomplete=()=>{
            //alert("completed");
           
            
            db.close()
             }}
             
function tot(){
  let mp1=currentACC[currentACC.length -1];
  
  let defDB=currentDB[currentDB.length-1];
               let request=indexedDB.open(defDB);
               
 request.onsuccess=()=>{
                 let db=request.result;
                 let txn=db.transaction(mp1,"readonly");
                 let store=txn.objectStore(mp1);
                 
               
         let q=store.get("total");

          q.onsuccess=()=>{
            let match=q.result;
            
            
            if(match){
              let q2=store.get("mtaji");
            q2.onsuccess=()=>{
              let match2=q2.result;
              if(match2){
                console.log(match2)
              let t=`<tr><td><td style="margin-left:40px;">Mauzo</td><td  style="margin-left:-15px;">${match.total}</td><td style="margin-left:40px;">Mtaji:Bei ya Kununua</td><td  style="margin-left:-15px;">${match2.total}</td><td style="margin-left:40px;">Mtaji:Bei ya Kuuza</td><td  style="margin-left:-15px;">${match2.total2}</td></tr>` 
              
              table2.innerHTML +=t;
                }
              }
            }
          }
          q.onerror=()=>{
            alert("not successful")
          }
          txn.oncomplete=()=>{
            db.close();
          }
          
          
          
             }
  
}
tot();
         
        var par=rekodi.parentElement;
        par.style.display="none";
         n=0;
        }
     




  document.addEventListener('DOMContentLoaded', function() {







storage();

fontsize(90);


scrollBar("printState222");






var list2=document.getElementById("list2");

 var rekodi=document.getElementById('rekodi');
   table1 =document.getElementById("table");
   console.log(table1)
   var table2=document.getElementById("table2");
var list=document.getElementById("list");
var table1=document.getElementById("table");






document.onreadystatechange=()=>{
  if(document.readyState !=="complete"){
    //printState();
    document.querySelector("body").style.visibility="hidden"
    let bg=document.createElement("div");
  bg.id="bg";
  bg.innerHTML=`<p style="position:fixed;left:40%; top:46%">Inapakia..</p>`;
  bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,26,0,1.9);margin-left:-10%;margin-top:-10%;";
  
  document.body.appendChild(bg);
}
  else{
   // document.getElementById("bg").remove();
    document.querySelector(" body").style.visibility="visible";
   // printState()
  containerForOpenedDB();
loginPage();

}
}

       // LOGIN SECTION

//user interface





        
  })