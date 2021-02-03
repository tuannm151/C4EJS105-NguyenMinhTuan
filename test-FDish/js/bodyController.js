

// listener for filter bar
let categorySelect = document.getElementById('category-select');
let difficultSelect = document.getElementById('difficult-select');
let timeSelect = document.getElementById('time-select');
let typeSelect = document.getElementById('type-select');


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
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('keyup', (e) => {
    currentSearchFilter();
});
// window.addEventListener('scroll', () => {
//     console.log(window.pageYOffset);
// })


