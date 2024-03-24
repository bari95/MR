
import { arrowBack, arrowForward, search, menu } from "./icons";
import { putDate,putJana,putKesho } from "../utils/time";
import { showSideBar } from "./Navigation";
import { showSearchUI } from "./SearchUI";


let dialogCheck=false;

export function Header(title = 'Nepasel') {
    const header = document.createElement('header');
    header.id = "header";
    header.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'bg-gray-100', 'p-4', 'flex', 'items-center', 'justify-between', 'shadow-md');

    // Centered content
    const centerDiv = document.createElement('div');
    centerDiv.classList.add('flex', 'flex-col', 'items-center');

    // Title
    const titleElement = document.createElement('h4');
    titleElement.textContent = title;
    titleElement.classList.add('font-bold', 'text-lg');
    centerDiv.appendChild(titleElement);

    // Date
    const mapatoElement = document.createElement('span');
    mapatoElement.textContent = "mapato";
    mapatoElement.classList.add('text-xs', 'text-gray-500');
    centerDiv.appendChild(mapatoElement);

    header.appendChild(centerDiv);

    // Arrow back SVG
    const arrowBackSvg = arrowBack(() => {
        putJana("date")
    });
    arrowBackSvg.classList.add('icons', 'arrow-back', 'hover-effect', 'w-6', 'h-6', 'cursor-pointer');
    header.appendChild(arrowBackSvg);
    addHoverMessage(arrowBackSvg, {header:"rudi nyuma", message:['Unarudi siku moja nyuma','pia ukirekodi inarekodi kulingana na tarehe inayoonekana juu'],duration:3000});

    // Date element
    const dateElement = document.createElement('span');
    dateElement.textContent = putDate();
    dateElement.id = "date";
    dateElement.classList.add('text-xs', 'text-gray-500');
    header.appendChild(dateElement);

    // Arrow forward SVG
    const arrowForwardSvg = arrowForward(() => {
        putKesho("date")
    });
    arrowForwardSvg.classList.add('icons', 'arrow-forward', 'hover-effect', 'w-6', 'h-6', 'cursor-pointer');
    header.appendChild(arrowForwardSvg);
    addHoverMessage(arrowForwardSvg, 'Go Forward');

    // Search bar
    const searchBar = search(showSearchUI);
    searchBar.classList.add('search-bar');
    header.appendChild(searchBar);
    addHoverMessage(searchBar, 'Search');

    // Menu bar
    const menuBar = menu(showSideBar);
    menuBar.classList.add('menu-bar', 'text-black', 'hover:text-blue-500', 'transition', 'duration-300', 'ease-in-out', 'cursor-pointer');
    header.appendChild(menuBar);
    addHoverMessage(menuBar, 'Open Menu');

    document.body.appendChild(header);

    return header;
}

function addHoverMessage(element, message) {
    element.addEventListener('mouseenter', function() {
        showMessage(message);
    });
    element.addEventListener('mouseleave', function() {
        hideMessage();
    });
}

function showMessage(message) {
    if (typeof message === 'string') {
        // Show simple hover message
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.classList.add('absolute', 'text-xs', 'text-gray-600', 'bg-white', 'p-2', 'rounded', 'shadow', 'top-10', 'left-1/2', '-translate-x-1/2', 'opacity-100', 'transition', 'duration-300', 'ease-in-out', 'z-10');
        document.body.appendChild(messageElement);
        setTimeout(() => {
            if (messageElement) messageElement.remove();
        }, 1500);
    } else if (typeof message === 'object') {
        // Show dialogue box
        const dialogElement = document.createElement('div');
        dialogElement.classList.add('fixed', 'top-10', 'left-0', 'w-3/4', 'flex', 'justify-center', 'items-center', 'bg-gray-900', 'bg-opacity-50', 'z-50');

        const dialogBox = document.createElement('div');
        dialogBox.classList.add('bg-white', 'rounded', 'p-4', 'max-w-md');

        // Header
        const header = document.createElement('h2');
        header.textContent = message.header;
        header.classList.add('text-lg', 'font-semibold', 'mb-2');
        dialogBox.appendChild(header);

        // Body
        message.message.forEach(bodyText => {
            const bodyPara = document.createElement('p');
            bodyPara.textContent = bodyText;
            bodyPara.classList.add('text-sm', 'mb-2');
            dialogBox.appendChild(bodyPara);
        });

        // Checkbox
        const checkboxDiv = document.createElement('div');
        checkboxDiv.classList.add('flex', 'items-center', 'mb-4');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = dialogCheck;
        checkbox.addEventListener('change',()=>{
            dialogCheck=true
            hideMessage()
        })
        checkboxDiv.appendChild(checkbox);

        const checkboxLabel = document.createElement('label');
        checkboxLabel.textContent = "sitaki kuona hii tena";
        checkboxLabel.classList.add('ml-2', 'text-sm');
        checkboxDiv.appendChild(checkboxLabel);

        dialogBox.appendChild(checkboxDiv);

        // Button
        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.classList.add('bg-blue-500', 'text-white', 'px-4', 'py-2', 'rounded', 'hover:bg-blue-600', 'focus:outline-none', 'transition', 'duration-300', 'ease-in-out');
        closeButton.addEventListener('click', function() {
            if(dialogElement)dialogElement.remove();
            if(checkbox.checked) {
                hideMessage();
            }
        });
        dialogBox.appendChild(closeButton);

        dialogElement.appendChild(dialogBox);
       if(!checkbox.checked) document.body.appendChild(dialogElement);
      // document.body.appendChild(dialogBox);
        setTimeout(() => {
            if(dialogElement)dialogElement.remove();
            if (checkbox.checked) {
                hideMessage();
            }
        }, message.duration || 5000); // Default duration is 5 seconds
    }
}


function hideMessage() {
    const messageElement = document.querySelector('.text-gray-600');
    if (messageElement) {
        messageElement.remove();
    }
}
