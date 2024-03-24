import { arrowBack, arrowForward, search, menu, reload, settings,plus, addCircle} from "./icons";
import { putDate,putJana,putKesho } from "../utils/time";
import { showSideBar } from "./Navigation";
import { showSearchUI } from "./SearchUI";

export function Footer() {
    const footer = document.createElement('footer');
    footer.classList.add('fixed', 'bottom-0', 'left-0', 'w-full', 'bg-gray-100', 'p-4', 'flex', 'items-center', 'justify-between', 'shadow-md');

    // Total
    const totalContainer = document.createElement('div');
    totalContainer.classList.add('flex', 'items-center', 'text-gray-800');

    const totalValue = document.createElement('h3');
    totalValue.textContent = '201000'; // Example value
    totalValue.classList.add('font-bold', 'text-lg');
    totalContainer.appendChild(totalValue);

    footer.appendChild(totalContainer);

    // Spacing
    const space = document.createElement('div');
    space.classList.add('mx-8');
    footer.appendChild(space);

    // Icons Container
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('flex');

    // Back arrow icon
    const backArrowIcon = reload(() => {});
    backArrowIcon.classList.add('icons', 'arrow-back', 'hover-effect', 'w-6', 'h-6', 'cursor-pointer', 'mx-2');
    backArrowIcon.setAttribute('title', 'Reload');
    backArrowIcon.addEventListener('mouseenter', function() {
        showMessage('Reload');
    });
    backArrowIcon.addEventListener('mouseleave', function() {
        hideMessage();
    });
    iconsContainer.appendChild(backArrowIcon);

    // Forward arrow icon
    const forwardArrowIcon = addCircle(() => {});
    forwardArrowIcon.classList.add('icons', 'arrow-forward', 'hover-effect', 'w-6', 'h-6', 'cursor-pointer', 'mx-2');
    forwardArrowIcon.setAttribute('title', 'ongeza bidhaa');
    forwardArrowIcon.addEventListener('mouseenter', function() {
        showMessage('Forward');
    });
    forwardArrowIcon.addEventListener('mouseleave', function() {
        hideMessage();
    });
    iconsContainer.appendChild(forwardArrowIcon);

    // Search icon
    const searchIcon = search(() => {});
    searchIcon.classList.add('icons', 'search', 'hover-effect', 'w-6', 'h-6', 'cursor-pointer', 'mx-2');
    searchIcon.setAttribute('title', 'Search');
    searchIcon.addEventListener('mouseenter', function() {
        showMessage('Search');
    });
    searchIcon.addEventListener('mouseleave', function() {
        hideMessage();
    });
    //iconsContainer.appendChild(searchIcon);

    // Menu icon
    const menuIcon = settings(() => {});
    menuIcon.classList.add('icons', 'menu', 'hover-effect', 'w-6', 'h-6', 'cursor-pointer', 'mx-2');
    menuIcon.setAttribute('title', 'Settings');
    menuIcon.addEventListener('mouseenter', function() {
        showMessage('Settings');
    });
    menuIcon.addEventListener('mouseleave', function() {
        hideMessage();
    });
    iconsContainer.appendChild(menuIcon);

    footer.appendChild(iconsContainer);

    document.body.appendChild(footer);

    return footer;
}

function showMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('absolute', 'text-xs', 'text-gray-600', 'bg-white', 'p-2', 'rounded', 'shadow', 'bottom-10', 'left-0', 'transform', 'translate-x-1/2', 'opacity-100', 'transition', 'duration-300', 'ease-in-out', 'z-10');
    document.body.appendChild(messageElement);
    setTimeout(()=>{
        if(messageElement)messageElement.remove()
    },1500);
}

function hideMessage() {
    const messageElement = document.querySelector('.text-gray-600');
    if (messageElement) {
        messageElement.remove();
    }
}
