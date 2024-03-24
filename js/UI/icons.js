

function makeSvg(p,onClickHandler){


    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.classList.add("icons"); // Add a class for styling
    svg.setAttribute("fill", "currentColor");
   
    //path.setAttribute("clip-rule", "evenodd");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", `${p}`);
    path.setAttribute("fill-rule", "evenodd");

    svg.appendChild(path);

    svg.addEventListener("click", onClickHandler);

    // Add hover effect using CSS
    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}


export function search(onClickHandler) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.classList.add("icons"); // Add a class for styling
    svg.setAttribute("fill", "currentColor");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z");
    path.setAttribute("fill-rule", "evenodd");
    svg.appendChild(path);

    // Add onClick event handler
    svg.addEventListener("click", onClickHandler);

    // Add hover effect using CSS
    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}




export function addCircle(onClickHandler) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.classList.add("icons"); // Add a class for styling
    svg.setAttribute("fill", "currentColor");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z");
    path.setAttribute("fill-rule", "evenodd");
    svg.appendChild(path);

    // Add onClick event handler
    svg.addEventListener("click", onClickHandler);

    // Add hover effect using CSS
    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}


export function plus(onClickHandler) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.classList.add("icons"); // Add a class for styling
    svg.setAttribute("fill", "currentColor");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z");
    path.setAttribute("fill-rule", "evenodd");
    svg.appendChild(path);

    // Add onClick event handler
    svg.addEventListener("click", onClickHandler);

    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}


export function arroBack(onClickHandler) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.classList.add("icons"); // Add a class for styling
    
    svg.setAttribute("fill", "currentColor");

    const pathData = "m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill-rule", "evenodd");
    svg.appendChild(path);

    // Add onClick event handler if provided
    if (onClickHandler) {
        svg.addEventListener("click", onClickHandler());
    }

    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}



export function arrowBack(onClickHandler) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.classList.add("icons"); // Add a class for styling
    svg.setAttribute("fill", "currentColor")

    const pathData = "M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill-rule", "evenodd");
    svg.appendChild(path);

    // Add onClick event handler if provided
    if (onClickHandler) {
        svg.addEventListener("click", onClickHandler);
    }

    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}


export function arrowDown(onClickHandler) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.classList.add("icons"); // Add a class for styli
    svg.setAttribute("fill", "currentColor");

    const pathData = "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);

    svg.appendChild(path);

    // Add onClick event handler if provided
    if (onClickHandler) {
        svg.addEventListener("click", onClickHandler);
    }

    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}

export function arrowDropDown(onClickHandler=()=>{
    console.log("yeeeees")
}) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("height", "24");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("width", "24");
    svg.setAttribute("fill", "currentColor");


    const pathData = "M480-360 280-560h400L480-360Z";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    
    path.setAttribute("fill-rule", "evenodd");
    svg.appendChild(path);

    // Add onClick event handler if provided
    if (onClickHandler) {
        svg.addEventListener("click", onClickHandler);
    }

    svg.addEventListener("mouseover", function() {
        this.classList.add("hover-effect");
    });

    svg.addEventListener("mouseout", function() {
        this.classList.remove("hover-effect");
    });

    return svg;
}


export function arrowForward(onClickHandler) {
    return makeSvg("m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z",onClickHandler)
}


export function arrowUpward(onClickHandler) {
  
  return makeSvg("M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z",onClickHandler)

}

export function cancel(onClickHandler) {
    return makeSvg("m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z",onClickHandler)
}


export function close(onClickHandler) {
   return makeSvg("m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z",onClickHandler)
}


export function closeSmall(onClickHandler) {
    return makeSvg("m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z",onClickHandler);
}


export function download(onClickHandler) {
    return makeSvg("M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z",onClickHandler)
}


export function expand(onClickHandler) {
   return makeSvg("M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z",onClickHandler)
}

export function home(onClickHandler) {
    return makeSvg("M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z",onClickHandler)
}


export function menu(onClickHandler){

 return makeSvg( "M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z",onClickHandler)

}


export function reload(onClickHandler){

 return makeSvg("M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z",onClickHandler)

}

export function settings(onClickHandler){

    return makeSvg("m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z",onClickHandler)

}

export function undo(onClickHandler){

    return makeSvg("M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z0-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z",onClickHandler)

}


export function changeAccount(onClickHandler){

    return makeSvg("M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z",onClickHandler)

}

export function financialPlans(onClickHandler){

    return makeSvg("M160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Zm213 80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200Z",onClickHandler)

}

export function ripoti(onClickHandler){

    return makeSvg("M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640ZM160-240v-320 13-173 480Zm0-400h640v-80H160v80Zm303 480H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v213q-35-25-76.5-39T716-560q-57 0-107.5 21.5T520-480H160v240h279q3 21 9 41t15 39Zm213 80-12-60q-12-5-22.5-10.5T620-164l-58 18-40-68 46-40q-2-13-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T664-420l12-60h80l12 60q12 5 22.5 10.5T812-396l58-18 40 68-46 40q2 13 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T768-140l-12 60h-80Zm40-120q33 0 56.5-23.5T796-280q0-33-23.5-56.5T716-360q-33 0-56.5 23.5T636-280q0 33 23.5 56.5T716-200ZM280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z0-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z",onClickHandler)

}

export function risiti(onClickHandler){

    return makeSvg("M240-80q-50 0-85-35t-35-85v-120h120v-560l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v680q0 50-35 85t-85 35H240Zm480-80q17 0 28.5-11.5T760-200v-560H320v440h360v120q0 17 11.5 28.5T720-160ZM360-600v-80h240v80H360Zm0 120v-80h240v80H360Zm320-120q-17 0-28.5-11.5T640-640q0-17 11.5-28.5T680-680q17 0 28.5 11.5T720-640q0 17-11.5 28.5T680-600Zm0 120q-17 0-28.5-11.5T640-520q0-17 11.5-28.5T680-560q17 0 28.5 11.5T720-520q0 17-11.5 28.5T680-480ZM240-160h360v-80H200v40q0 17 11.5 28.5T240-160Zm-40 0v-80 80Z",onClickHandler)

}


export function risiti2(onClickHandler){

    return makeSvg("M120-80v-800l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v800l-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-80H240v80Zm-40 404h560v-568H200v568Zm0-568v568-568Z",onClickHandler)

}

export function finance(onClickHandler){

    return makeSvg("M320-414v-306h120v306l-60-56-60 56Zm200 60v-526h120v406L520-354ZM120-216v-344h120v224L120-216Zm0 98 258-258 142 122 224-224h-64v-80h200v200h-80v-64L524-146 382-268 232-118H120Z",onClickHandler)

}


export function chart(onClickHandler){

    return makeSvg("M160-200h160v-320H160v320Zm240 0h160v-560H400v560Zm240 0h160v-240H640v240ZM80-120v-480h240v-240h320v320h240v400H80Z",onClickHandler)

}

export function stockLevels(onClickHandler){

    return makeSvg("M200-120q-33 0-56.5-23.5T120-200v-640h80v640h640v80H200Zm40-120v-360h160v360H240Zm200 0v-560h160v560H440Zm200 0v-200h160v200H640Z",onClickHandler)

}


