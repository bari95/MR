import { deleteBar } from "./HelperUI";
import { closeSmall } from "./icons";
import { finance, chart,ripoti,risiti,changeAccount,stockLevels,financialPlans,risiti2,search } from "./icons";

export function showSideBar() {
  deleteBar(["sideBar", "deleteSignMapato"]);

  const sideBar = document.createElement("div");
  sideBar.id = "sideBar";
  sideBar.classList.add(
    "fixed",
    "top-0",
    "right-0",
    "w-60",
    "mt-14",
    "bg-gray-100",
    "border",
    "border-gray-200",
    "shadow-md",
    "rounded-md",
    "z-50"
  );

  const closeButton = closeSmall(() => deleteBar(["sideBar"]));
  closeButton.classList.add("absolute", "top-0", "right-0", "m-2", "cursor-pointer", "hover:text-gray-600");
  sideBar.appendChild(closeButton);

  const title = document.createElement("h5");
  title.textContent = "Kaunta ya Meneja";
  title.classList.add(
    "font-medium",
    "text-base",
    "py-2",
    "pl-4",
    "ml-0",
    "bg-gray-300",
    "rounded-t-md",
    "text-left"
  );
  sideBar.appendChild(title);

  const items = [
    { text: "Miamala ya Leo", action: "eraseBody(['navBar','rekodiMapato','hd','search'],miamalaLeo);deleteTransaction(2);", icon: risiti},
    { text: "Rekodi Mapato", action: "currentPush(mp, rd); printState();", icon: risiti2},
    { text: "Record Matumizi", action: "currentPush(mat4, rd2); printState();", icon: risiti2 },
    { text: "Ripoti", action: "eraseBody(['navBar','rekodiMapato','hd','search'], taarifa);", icon: ripoti },
    { text: "Angalia Stock", action: "printValues();", icon: chart  },
    { text: "Angalia Bidhaa zilizoisha", action: "zilizoisha();", icon: stockLevels  },
    { text: "Pangilia Mgawanyo wa Mapato", action: "eraseBody(['navBar','rekodiMapato','hd','search'], malengoHeader);", icon:financialPlans  },
    { text: "Badili Akaunti", action: "otherDatabases();", icon:changeAccount }
  ];

  const itemList = document.createElement("div");
  itemList.classList.add("py-2");

  items.forEach((item) => {
    const div = document.createElement("div");
  
    div.classList.add(
      "px-4",
      "py-2",
      "flex",
      
      "cursor-pointer",
      "text-xs",
      "border-b",
      "hover:bg-blue-500",
      "hover:text-white",
      "transition",
      "duration-200",
      "rounded-xs",
      "shadow-xs",
      "ease-in-out",
      "md:hover:bg-transparent",
      "border-b"
    );

    const el=document.createElement('span');
    el.textContent=item.text;
    div.appendChild(el);

    if (item.icon) {
  
      const icon = item.icon();
      const elI=document.createElement('span');
      elI.className="ml-auto"
      div.appendChild(elI);

    // icon.classList.add("w-full", "h-full", "mr-2","border-b"); // Customize icon size and margin if needed
      div.appendChild(icon);
    }

    
    div.setAttribute("onclick", item.action);
    itemList.appendChild(div);
  });

  sideBar.appendChild(itemList);
  document.body.appendChild(sideBar);
}

function customIconFunction() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 20 20");
  svg.setAttribute("fill", "currentColor");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("d", "M10 3a1 1 0 00-.707.293l-7 7a1 1 0 00-.084 1.32l.083.094 1.414 1.414a1 1 0 001.32.083l.094-.083L10 6.414 15.793 12.2a1 1 0 001.32-.083l.094-.083 1.414-1.414a1 1 0 00-.083-1.497l-.083-.094-7-7A1 1 0 0010 3z");
  path.setAttribute("clip-rule", "evenodd");

  svg.appendChild(path);
  return svg;
}





export function showSideBarMeneja(){
    alert('we are showing sideBar')
  if(document.getElementById("sideBar")){
   
    deleteBar(["sideBar","deleteSignMapato"]);
    
   var sideBar=document.createElement("div");
  sideBar.id="sideBar";
  
  sideBar.style=`position:fixed; top:0%; left:74.5%;width:25%; z-index:950000; min-height:25%; background:rgba(0,23,0,0.8);display:flex; flex-flow:column;border-radius:7%;box-shadow:-2px 2px 2px rgba(225,225,225,0.7);`;
  
  sideBar.innerHTML +=` <h5 align="center" style="margin-bottom:0;">Kaunta ya Meneja </h5> <div onclick='' style='width:100%; padding-bottom:1em;padding-top:1em;font-weight:350;font-size:80%; margin:4px;overflow:scroll;'>\>> Weka Malengo ya Mapato</div><div onclick="ongezaKipengeleGharama();" style='width:100%;margin:4px;margin-top:2px;font-weight:350; padding-bottom:1em;overflow:scroll;font-size:80%;'>\>> Ingiza vipengele vya gharama</div>`;
  
  document.body.appendChild(sideBar);
  crossSign(12,1,90,24000,"yellow","sideBar");
  
}
  else{
    
   var sideBar=document.createElement("div");
  sideBar.id="sideBar";
  
  sideBar.style=`position:fixed; top:0.5%; left:59.5%;width:40%; z-index:22000; min-height:25%; background:rgba(0,23,0,1.8);display:flex; flex-flow:column;border-radius:7%;box-shadow:-2px 2px 0px rgba(225,225,225,0.7);`;
  
  sideBar.innerHTML +=`<h5 align="center" style="margin-bottom:0;font-weight:400;color:black; background:white;width:68%;margin-left:8%;border-radius:5px;">Weka Malengo </h5><div onclick='ongezaLengo();' style='width:100%; padding-bottom:1em;padding-top:1em;font-weight:350;font-size:80%; margin:4px;overflow:scroll;padding-left:0.5em;'>1.  Weka Malengo ya Mapato</div><div style='width:100%;margin:4px;margin-top:2px;font-weight:350; padding-bottom:1em;padding-left:0.5em;overflow:scroll;font-size:80%;' onclick="formVipengeleGharama();">2. Ingiza vipengele vya gharama</div>`;
  
  document.body.appendChild(sideBar);
  crossSign(11,4.7,93,24000,"white",'sideBar');
  
       }
       
      // crossSign(14,25,85);
     // recordTransaction(2);
   }
export function showSideBarMeneja2(header, [...lists], top = 4.7, left = 93, color = "white") {
    alert('we are showing sideBar')
    deleteBar(["sideBar", "deleteSignMapato"]);

    var sideBar = document.createElement("div");
    sideBar.id = "sideBar";

    sideBar.style.position = "fixed";
    sideBar.style.top = "0.5%";
    sideBar.style.left = "59.5%";
    sideBar.style.width = "40%";
    sideBar.style.zIndex = "22000";
    sideBar.style.minHeight = "25%";
    sideBar.style.background = "rgba(0, 23, 0, 1.8)";
    sideBar.style.display = "flex";
    sideBar.style.flexFlow = "column";
    sideBar.style.borderRadius = "7%";
    sideBar.style.boxShadow = "-2px 2px 0px rgba(225, 225, 225, 0.7)";

    sideBar.innerHTML += `<h5 align="center" style="margin-bottom: 0; font-weight: 400; color: black; background: white; width: 68%; margin-left: 8%; border-radius: 5px;">${header}</h5>`;

    for (let i = 0; i < lists.length; i++) {
        sideBar.innerHTML += `<div onclick='${lists[i][1]};' style='width: 100%; padding-bottom: 1em; padding-top: 1em; font-weight: 350; font-size: 80%; margin: 4px; overflow: scroll; padding-left: 0.5em; cursor: pointer;'>${i + 1}. ${lists[i][0]}</div>`;
    }

    document.body.appendChild(sideBar);
    crossSign(11, top, left, 22000, color);
}
