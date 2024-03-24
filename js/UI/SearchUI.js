export function SearchUI() {
    // search container
    document.getElementById('table').style.display = "none";
    document.getElementById('header').style.display = 'none';
    const searchContainer = document.createElement('div');
    searchContainer.classList.add('fixed','p-8', 'flex', 'justify-center', 'items-center');

    // search box container
    const searchBoxContainer = document.createElement('div');
    searchBoxContainer.classList.add('w-full', 'max-w-md', 'mx-auto', 'rounded', 'overflow-hidden', 'shadow-lg', 'flex', 'flex-col', 'relative', 'bg-white');

    // Back button
    const backButton = document.createElement('button');
    backButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>';
    backButton.classList.add('absolute', 'top-2', 'left-2', 'text-gray-600', 'hover:text-gray-800', 'focus:outline-none');
    backButton.addEventListener('click', function() {
        searchContainer.remove();
    });
    searchBoxContainer.appendChild(backButton);

    // search input
    const searchInput = document.createElement('input');
    searchInput.classList.add('w-full', 'py-2', 'px-4', 'outline-none', 'text-gray-800', 'placeholder-gray-600', 'bg-gray-100', 'rounded-md', 'focus:bg-white', 'transition', 'duration-300');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search...');
    searchBoxContainer.appendChild(searchInput);

    // search button
    const searchButton = document.createElement('button');
    searchButton.classList.add('h-12', 'bg-blue-500', 'text-white', 'rounded-b', 'flex', 'items-center', 'justify-center', 'hover:bg-blue-600', 'focus:outline-none', 'transition', 'duration-300');
    searchButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14a6 6 0 102 0z"/></svg>';
    searchBoxContainer.appendChild(searchButton);

    // search results container
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.classList.add('mt-4', 'flex', 'flex-col', 'overflow-y-auto');

    // Create sample search results
    for (let i = 1; i <= 5; i++) {
        const searchResultItem = document.createElement('div');
        searchResultItem.classList.add('py-2', 'px-4', 'bg-gray-200', 'text-gray-700', 'rounded', 'cursor-pointer', 'hover:bg-gray-300', 'transition', 'duration-300');
        searchResultItem.textContent = `Search Result ${i}`;
        searchResultsContainer.appendChild(searchResultItem);
    }

    // Append elements to search container
    searchBoxContainer.appendChild(searchResultsContainer);
    searchContainer.appendChild(searchBoxContainer);

    // Event listener to hide search UI when clicked outside
    searchContainer.addEventListener('click', function(event) {
        if (!searchBoxContainer.contains(event.target)) {
            searchContainer.remove();
        }
    });

    return searchContainer;
}

// Add a function to show search UI when triggered
export function showSearchUI() {
    const searchUI = SearchUI();
    document.body.appendChild(searchUI);
}
