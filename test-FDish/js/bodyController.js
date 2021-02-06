

// listener for filter bar
let categorySelect = document.getElementById('category-select');
let difficultSelect = document.getElementById('difficult-select');
let timeSelect = document.getElementById('time-select');
let typeSelect = document.getElementById('type-select');
let clearSearchButton = document.getElementById('clear-search-btn');
const searchBar = document.getElementById('search-bar');
// category filter
function filterRecipes() {
    filteredRecipes = recipes;
    if(category != 'all') {
        filteredRecipes = recipes.filter((recipe) => recipe.category == category);
    }
    if(difficult != 'all') {
       filteredRecipes = filteredRecipes.filter((recipe) => recipe.difficult == difficult);
    }
    if(time != 'all') {
        filteredRecipes = filteredRecipes.filter((recipe) => Number(recipe.time) <= Number(time));
    }
    if(type != 'all') {
        filteredRecipes = filteredRecipes.filter((recipe) => recipe.type == type);
    }
} 
// if filter not found any clear html
clearHTMLItem = () => {
    item_container.innerHTML = '';
    btn_next.style.visibility = "hidden";
    currentPage = 1;
}
// search filter
currentSearchFilter = () => {
    let searchString = searchBar.value;
    currentPage = 1;
    searchedRecipes = filteredRecipes.filter((recipe) => {
        return (
            removeVietnameseTones(recipe.name).toLowerCase().includes(removeVietnameseTones(searchString).toLowerCase())
        );
    });
    if(searchedRecipes.length != 0) {
        showRecipes(currentPage);
    } else clearHTMLItem();
}

categorySelect.addEventListener('change', () => {
    category = categorySelect.value;
    filterRecipes();
    currentSearchFilter();
});
difficultSelect.addEventListener('change', () => {
    difficult = difficultSelect.value;
    filterRecipes();
    currentSearchFilter();
});
timeSelect.addEventListener('change', ()=> {
    time = timeSelect.value;
    filterRecipes();
    currentSearchFilter();
});
typeSelect.addEventListener('change', () => {
    type = typeSelect.value;
    filterRecipes();
    currentSearchFilter();
});
document.getElementById('search-bar-container').addEventListener('click', (e) => {
    if(e.target.tagName === 'I' || e.target.tagName === 'BUTTON' || (e.target.tagName === 'DIV' && document.body.clientWidth >= 1700)) {
        searchBar.value = '';
            currentSearchFilter();
            clearSearchButton.style.display = 'none'; 
    }
});
searchBar.addEventListener('keyup', () => {
    clearSearchButton.style.display = 'block';
    currentSearchFilter();
    // in case user not using clear btn to remove the text
    if(searchBar.value == '') {
        clearSearchButton.style.display = 'none';
    }
});
// USER CLICK USER'S ICON OPEN USER PAGE
function openUserPage() {
    document.body.style.overflow = 'hidden';
    $('.user-page-outer-container').css('display','block');
}
function closeUserPage() {
    document.body.style.overflow = 'visible';
    $('.user-page-outer-container').css('display','none');
} 
window.addEventListener('click', (e) => {
    console.log(e.target);
})





