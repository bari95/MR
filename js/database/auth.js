
import {deleteBar, optionButt} from "../UI/HelperUI";
import {printState} from "../UI/MainUI";
import { crossSign } from "../UI/HelperUI";

export let rd = "records";
export let rd2 = "records2";
export let mp = "mapato1";
export let currentDB=[];
export let currentACC=[mp];
export let currentRd=[rd]
export let mal = "malengo";
export let mat = "matumiz4";
export let mat4 = "matumiz8";


export function loginPage(){
    //document.body.innerHTML=""
    optionButt();
     
       deleteBar(["sideBar","deleteSignMapato","title1"]);
   
     var sideBar=document.createElement("div");
     sideBar.align="center";
    sideBar.id="loginPage";
    
    sideBar.style=`position:fixed; top:0; left:0;min-width:100%; z-index:22000; min-height:100%; background:rgba(0,32,11,1.8);`;
    
    let header=`<h3 align="center" style="margin-bottom:0;font-weight:400;color:white; position:fixed;top:18%;left:20%; /*background:#ebebeb;*/border-radius:5px;"> Ingia kwenye Akaunti</h3>`;
    
    sideBar.innerHTML +=header;
    
    let loginInterface=`
    <div style=" position:fixed;top:30%;left:22%;border:1px solid  #ebebeb;/*padding-left:24%;width:80%;min-height:100%*/;border-radius:5px;"> 
    <!-- Login infos -->
    <form id="f3" name="f3" onsubmit="return authorizingLogin();" style="display:flex;flex-flow:column;justify-content:center;flex:1 1 0;margin-top:25px;margin-bottom:25px;/*margin-left:15%;border:1px solid gold*/;border-radius:10px;">
   <!-- <div style="background:blue; width:40%;text-align:center;margin-bottom:8%;margin-top:10%;margin-left:30%;border-radius:10px;color:white;">Ingia </div>
    -->
    <input style="width:60%;height:20px; border-radius:10px;margin-bottom:20px;margin-left:20%" type="text" id="name3" name="name3" placeholder="ingiza jina" required>
    
      <input style="width:60%;height:20px; border-radius:10px;margin-bottom:20px;margin-left:20%" type="text" id="pw3" name="pw3" placeholder="password" required>
    
    <input style="width:30%;border-radius:10px;font-weight:350; color:blue;padding:5px;margin-left:35%;font-size:110% " type="submit" value="login" />
    
    
    </form>
    <i> Hauna akaunti ? <button onclick="newDatabaseForm();" style="color:blue;border-radius:5px;padding-bottom:3px;min-height:30px;">mpya</button></i>
    
    </div>
    `
    
    sideBar.innerHTML +=loginInterface;
    
    document.body.appendChild(sideBar)
      
  
    
    
  }
  
  //authentication
  function newDatabaseForm(){
    
    deleteBar(["formBox"]);
    
    
    let div=document.createElement("div");
    div.id="formBox";
    div.style="display:flex;gap:10px;justify-content:center;position:fixed;top:20%;left:4%;width:92%;z-index:30000;height:46%; background:rgba(59,99,59,0.9);border-radius:10px;border:1px solid rgba(255,255,255,0.8);"
    div.innerHTML=`
    <form name="f2" id="f2" onsubmit="return newDatabase();" style="padding:5px;display:flex;flex-flow:column;justify-content: center;height:110%;">
    <caption ><b align="center" style="margin-bottom:2%;font-weight:370;">Ingiza akaunti mpya</b></caption>
         <input type="text"  id="jina2" name="jina2" placeholder="jina" class="box" style="margin-bottom:10px;" required>
   
       <input type="number"  id="password" name="password" placeholder="password" class="box" style="margin-bottom:10px;" required>
    <input type="submit" value="ok" style="width:20%; position:relative;left:40%;border-radius:5px;"/>
    `;
    document.body.appendChild(div);
    let bg=document.createElement("div");
    bg.id="bg";
    bg.style="position: absolute;left:0;top:0;z-index:9000;width:140%;height:140%; background:rgba(0,0,0,0.6);margin-left:-10%;margin-top:-10%;";
    
    document.body.appendChild(bg);
    
    crossSign(13,24,85,31000,"white");
  
    
  }
  //database
 export function containerForOpenedDB(){
    
    let c="container";
    let request=indexedDB.open(c);
    
    request.onupgradeneeded=()=>{
      let db=request.result;
      
      let store=db.createObjectStore("arrays",{keyPath:"name"});
      
      let pwIndex=store.createIndex("password","password");
      
    }
    request.onsuccess=()=>{
      let db=request.result;
      
     let txn=db.transaction("arrays","readonly");
     let store=txn.objectStore("arrays");
     
     let query=store.get("defaults2");
     
     query.onsuccess=()=>{
       
       let result=query.result;
       console.log(result);
       if(result !=undefined){
  
        currentDB.push(result.name1);
        printState();
  
  ;
       }
     }
      
  
      
    }
    
  }
  
  function currentPush(val,val2){
    //console.log(val);
    currentACC.push(val);
    currentRd.push(val2);
  }
  
  export function logout(){
      let c="container";
    let request=indexedDB.open(c);
    
    request.onsuccess=()=>{
      let db=request.result;
      
     let txn=db.transaction("arrays","readwrite");
     let store=txn.objectStore("arrays");
     
     let query=store.delete("defaults2");
     
     query.onsuccess=()=>{
      alert("defaults2 deleted successfully");
       loginPage();
     }
     query.onerror=()=>{
       alert("not deleted")
     }
     
     txn.oncomplete=()=>{
       db.close();
     }
    }
  }
  
  export function deleteDatabase(){
    if(confirm ("unafuta akaunti hii ?")){
      let db2=currentDB[currentDB.length-1];
      
    let request=indexedDB.deleteDatabase(db2);
    
    request.onsuccess=(e)=>{
      e.preventDefault();
      
      alert(`${db2} deleted successful`) ;
      
      let c="container";
    let request2=indexedDB.open(c);
    
    request2.onsuccess=()=>{
      
      let db=request2.result;
      
      let txn=db.transaction("arrays","readwrite");
      let store=txn.objectStore("arrays");
      let query=store.delete("defaults2");
      
      query.onsuccess=()=>{
  
        alert("succeeeeess");
        
      }
      
      query.onerror=()=>{
        alert(query.error.name);
      }
      
      txn.oncomplete=()=>{
       db.close();
       
     (function (){
       
      let request=indexedDB.open("container");
   
     request.onsuccess=()=>{
         let db=request.result;
     
     let txn2=db.transaction("arrays","readwrite");
     
     let store=txn2.objectStore("arrays");
       
     
     
     let query=store.delete(db2);
     
     query.onsuccess=()=>{
       currentDB.length=0
       let obj=query.result;
       alert("everything deleted");
     }
     query.onerror=()=>{
       alert("error occured");
     }
     txn2.oncomplete=()=>{   
        db.close();
        loginPage();
     }}
       }()) //alert ("txn complete");
      }
      
    }
    
    }
    request.onerror=()=>{
      alert(`${db2} not deleted`);
      console.log(request.error);
    }
    }
  }
  //opening up a container database
  
  
  export function badiliAkaunti(thiss){
    let c=thiss.previousElementSibling.textContent;
    currentDB.push(c);
  
    
   let request=indexedDB.open("container");
   
   request.onsuccess=()=>{
     let db=request.result;
     
     let txn=db.transaction("arrays","readwrite");
     
     let store=txn.objectStore("arrays");
     
     let query=store.get(c);
     
     query.onsuccess=()=>{
       let obj=query.result;
      // console.log(obj)
       
       let query2=store.put({name:"defaults2",name1:obj.name, password:obj.password});
       
       query2.onsuccess=()=>{
       //  alert("default set successful");
       }
     }
     txn.oncomplete=()=>{
       db.close();
     
    //alert("transaction complete");
     }
   }
     printState();
  }

  
  export function addOpenedDB(name,pw){
    let c="container";
    let request=indexedDB.open(c);
    
    request.onsuccess=()=>{
      
      let db=request.result;
      
      let txn=db.transaction("arrays","readwrite");
      let store=txn.objectStore("arrays");
      let query=store.add({name:name,password:pw});
      let query2=store.put({name:"defaults2",password:pw,name1:name});
      
      query2.onsuccess=()=>{
        alert("default inserted successful!");
      }
      query.onsuccess=()=>{
        let match=query.result;
        
  
          alert(` Jina la ${name} limeongezwa kwemye opened database `);
      
    }
         query.onerror=()=>{
           if(query.error.name=="ConstraintError"){
             alert(`Akaunti yenye jina ${name} tayari imesajiliwa`);
            // txn.abort();
             db.close();
             return;
           }
          else{ 
            alert (`error occured:${query.error}`);
          // console.log(`error object ${query.error}`);
           db.close();
          // txn.abort();
           return;
           }
         }
         query2.onerror=()=>{ 
  
          alert(`${query2.error.name}`);
           
           
         }
    
      txn.oncomplete=()=>{
        db.close()
        alert ("uees")
              deleteBar(["sideBar","optionButton","formBox"]);
        currentDB.push(name);
        initializer(name);
        printState();
        
       
        //alert("its finished");
      }
    }
  }
  
  export function authorizingLogin(){
    
    let name=document.f3.name3.value;
    let pw=document.f3.pw3.value;
    
    let c="container";
    let request=indexedDB.open(c,1);
    
    request.onsuccess=()=>{
      
      let db=request.result;
      
      let txn=db.transaction("arrays","readwrite");
      let store=txn.objectStore("arrays");
      let query=store.get(name);
      let query2=store.put({name:"defaults2",name1:name, password:pw});
      query.onsuccess=()=>{
        let match=query.result;
        console.log(match);
        
      if(match !=undefined){  if(match.name==name){
           if(match.password==pw){
            currentDB.push(name);
             initializer(name);
             deleteBar(["sideBar","optionButton"]);
             printState();
             
             db.close();
           }
           else{
          
        alert(`password si sahihi`);
         db.close();
         return;
          
      }
        }
        
      // match.continue();
      
      
    }
    else{
      alert(`Biashara yenye jina ${name} haipo`);
    }
    
      }
    
      txn.oncomplete=()=>{
        db.close()
      //  alert("authentication finished");
      }
    }
    
    return false;
  }
  
  export function newDatabase(){ 
    let d="databases";
    let name=document.f2.jina2.value;
    let password=document.f2.password.value;
    
    addOpenedDB(name,password);
    
    return false
    
  }
  
  export function otherDatabases(){
    
    let cur=currentDB[currentDB.length-1];
    
       deleteBar(["deleteSignMapato","sideBar"]);
       
       
       let div=document.createElement("div");
      div.id="sideBar";
      div.style="position:fixed;top:0%;left:53.8%; width:40%;border-radius:6%; background:rgba(30,50,10,0.9);display:flex;flex-flow:column;overflow:scroll;z-index:20000;padding-left:2.5%; padding-bottom:7%;padding-right:3%; border:0.5px dotted gold;";
      div.innerHTML +=`<h5 align="center" style='border-radius:5%;background:rgba(255,255,255,0.9);color:black;font-weight:450; width:80%;'>Badili Akaunti</h5>`;
      
      let n=0;
       let request=indexedDB.open("container");
       
  request.onsuccess=()=>{
      let db=request.result;
  
      db.onversionchange=()=>{
        db.close();
        location.reload();
      }
      
      let txn=db.transaction("arrays","readonly");
      let store=txn.objectStore("arrays");
      
      let query=store.openCursor();
      
      query.onsuccess=()=>{
        
        let match=query.result;
        if(match !=null && match.value){
         if(match.value != null || undefined){ //console.log(match.value);
         
         if(match.value.name!= cur  && (match.value.name != "defaults2" && match.value.name !="defaults")){
          // arr.push(match.value.name);
           //alert(match.value.name);
           div.innerHTML +=`<div style='display:flex;gap:3%;border-top:0.5px dotted white;padding-bottom:4%; padding-top:3%;'><span style="font-weight:350;font-size:60%;">${++n}</span><span style="font-weight:350;font-size:90%;margin-right:auto;">${match.value.name}</span><button onclick="badiliAkaunti(this);" style="border-radius:10px;font-size:60%;background:none;color:gold;border:1px solid white;">Ingia</button></div>`;
         }
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
    
    crossSign(12,4,93,20000,"white");
   }
   
  document.body.appendChild(div);
  
  // return arr;
  }