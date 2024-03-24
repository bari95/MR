import { currentDB,currentACC } from "../database/auth";

let n=0, m=0, b=0, w=0, mar=0;
var colors=["white","teal"];
var colors2=["black","white"];
var border=["black","gold"];
var widt=["120%","100%"];
var margin=["-10%","0"];

export function navBar(w, h) {
    let cv = document.createElement("div");
    cv.style.position = "fixed";
    cv.style.top = "2.5%";
    cv.style.left = "87%";
    cv.style.zIndex = "120";
    cv.style.border = "1.25px solid white";
    cv.style.borderRadius = "5px";
    cv.id = "navBar";
    
    // Styling the SVG icon
    cv.innerHTML = `<svg width="20.5" height="16.5" style="fill: none; stroke: white; stroke-width: 1.6;">
      <path d="M 3 5 L 18 5 M 3 10 L 18 10 M 3 15 L 18 15"/>
    </svg>`;
    
    document.body.appendChild(cv);
  
    cv.addEventListener("click", () => {
      showSideBar();
      crossSign(12, 4, 94, 24000, "white");
      hideVisibility(["printState222"]);
    });
  }

  export function mainHeader(){
    let hd=document.createElement("h4");
      hd.id="title1";
     let val=currentDB[currentDB.length-1];
    hd.className="bg-black"
     hd.textContent=val;
   document.body.appendChild(hd);
   
 }
 
 export function backButton(top=1,left=3,index=20000,color="white"){
     
     
  let cv=document.createElement("div");
  cv.style=`position:fixed; top:${top}%; left:${left}%;z-index:${index};borde:1px solid white;`;
  cv.id="backButton";
  cv.innerHTML=`<svg width="34" height="34">
  <!--  <circle cx="14" cy="14" r="12.5" fill=${color} /> -->
  <path d="M 24 14.5 H 4.5" stroke=${color} stroke-Width="2"/>
  <path d="M 4.5 14.5 L 15 9" stroke=${color} stroke-Width="2"/>
  <path d="M 4.5 14.5 L 15 19.5" stroke="white" stroke-Width="2"/> 
  <path d="M 4.5 14.5 H 2" stroke=${color} stroke-Width="1"/> 
  </svg>`;
  
  document.body.appendChild(cv);
  cv.addEventListener("click",()=>{
    back();
  })
}

export function optionButt(top=3,left=92,index=60000,color="white",callback,...pars){
  let cv=document.createElement("div");
  cv.id="optionButton";
  
  cv.style=`position:fixed; top:${top}%; left:${left}%;z-index:${index};`;

  cv.innerHTML=`<svg width="20" height="23" >
  <circle cx="8" cy="5" r="2" fill=\"${color}\" /> 
  <circle cx="8" cy="12" r="2" fill=\"${color}\" />
  <circle cx="8" cy="19" r="2" fill=\"${color}\" />
</svg>`;
  
  document.body.appendChild(cv);
  cv.addEventListener("click",()=>{
   callback(...pars);
  });
 }
 
export function optionButton(){
 deleteBar(["sideBar","deleteSignMapato"])
  let cv=document.createElement("div");
  cv.id="optionButton";
  //cv.width=w;
 // cv.height=h;
  cv.style="position:fixed; top:1%; left:92%;z-index:120;";
 // cv.id="navBar";
  cv.innerHTML=`<svg width="20" height="23" >
  <circle cx="8" cy="5" r="2" fill="white" /> 
  <circle cx="8" cy="12" r="2" fill="white" />
  <circle cx="8" cy="19" r="2" fill="white" />
</svg>`;
  
  document.body.appendChild(cv);
  cv.addEventListener("click",()=>{
     showSideBarMeneja();
  })
}
 
export function searchIcon(){
    let div=document.createElement("div")
    div.id="search"
    div.style="position:fixed; top:1.7%; left:71.5%;z-index:120";
    div.innerHTML=`
    <svg width="30" height="30">
    <circle cx="14" cy="14" r="8" stroke="white" fill="transparent" stroke-Width="1.4" />
    <path d="M 20 20 L 28 28" stroke="white" stroke-Width="2.4" />
    </svg>
    `;
    document.body.appendChild(div);
    
    div.addEventListener("click",()=>{
     // showSideBar();
     // crossSign(12,10);
    })
    
  }
  
 export function deleteBar([...arr]){
    for(let i=0; i<arr.length; i++){
   if(document.getElementById(arr[i])){document.getElementById(arr[i]).remove();
      }
    }
  } 

export function defect(id){
  var el=document.getElementById(String(id));
 
//  el.style.hover="background:green;"
}

  
 export function hideBar([...arr]){
    for(let i=0; i<arr.length; i++){
   if(document.getElementById(arr[i])){document.getElementById(arr[i]).style.display="none";
      }
    }
  }  
  
 export function hideVisibility([...arr]){
    for(let i=0; i<arr.length; i++){
   if(document.getElementById(arr[i])){document.getElementById(arr[i]).style.visibility="hidden";
      }
    }
  }  
  
 export function showVisibility([...arr]){
    for(let i=0; i<arr.length; i++){
   if(document.getElementById(arr[i])){document.getElementById(arr[i]).style.visibility="visible";
      }
    }
  }  
    
 export function crossSign(long,top,left,index=22001,color="gold",id){
   
  // document.body.style.background="rgba(57,93,60,0.9)";
   
   
   if(document.getElementById("deleteSignMapato")){
     document.getElementById("deleteSignMapato").remove();
   }
   
    let cv=document.createElement("div");
    
  
    cv.id='deleteSignMapato';
    cv.style=`position:absolute; top:${top}%; left:${left}%;z-index:${index};`;
     cv.innerHTML=`
    <svg width="20" height="20">
    <path d=\"M 2 2 L ${long} ${long} M ${long} 2 L 2 ${long}\" stroke=\"${color}\" stroke-Width="2.5" />
    </svg>
    `
    
  
    
   
    document.body.appendChild(cv)
  
    cv.addEventListener("click",()=>{
      deleteBar(["sideBar","deleteSignMapato","bg","formBox","bg2","formBox2","sideBarRudi","sideBarRudiCrossSign"]);
    });
  }


     
 export const defect2 = (id)=>{
    var el=document.getElementById(String(id));
   setTimeout(defect,250,id);
   if(n==colors.length){
     n=0;
   }
   
   if(m==colors2.length){
     m=0;
   }
   
   if(b==border.length){
     b=0;
   }
   
  if(w==widt.length){
     w=0;
   }
   
   if(mar==margin.length){
     mar=0;
   }
   
   const styleTag=document.head.appendChild(document.createElement("style"));
  styleTag.textContent=`.data{
   /* background:rgba(9,9,69,0.7);*/
    font-family:Sans-Serif;
    min-height:50px;
    min-width:50px;
    background:;
    color:gold;
    transition: background 0.25s;
  } 
  .data:hover{
   width:${widt[w++]};
   margin-left:${margin[mar++]};
  /* border:2px dotted ${border[b++]};*/
   background:${colors[n++]};
   font-size:120%;
   color:${colors2[m++]};}`;
  }

 export function putOptions(){
  
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
    