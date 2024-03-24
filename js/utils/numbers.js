

export 
function shortenNumber(val){
  
  let ln=String(val).length;
  
  if(ln ==5 || ln==6 ){
   return val=String((Number(val)/1000).toFixed(0))+"k";
   return val;
  }
  
  if(ln==7){
    return val=String((Number(val)/1000000).toFixed(2))+"M"
    return val
  }
  
  if(ln==10){
    val=String((Number(val)/1000000000).toFixed(4))+"B";
    return val
  }
  
  else{return val}
  
}
