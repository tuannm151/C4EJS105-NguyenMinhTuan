// show most rated recipes 
function favoritedAmountCompare(a, b) {
    return Number(a.favorited_amount) > Number(b.favorited_amount) ? -1 : 1;
}
recipes.sort(favoritedAmountCompare);
// show rank 1
switch(recipes[0].category) {
    case 'asia':
        document.getElementById('rank1-category').innerHTML = 'Món Á';
        break;
    case 'foreign':
        document.getElementById('rank1-category').innerHTML = 'Món ngoại';
        break;
    case 'viet':
        document.getElementById('rank1-category').innerHTML = 'Món Việt';
        break;   
}
switch(recipes[0].type) {
    case 'main':
        document.getElementById('rank1-type').innerHTML = 'Bữa chính';
        break;
    case 'side':
        document.getElementById('rank1-type').innerHTML = 'Bữa phụ';
        break;
    case 'bf':
        document.getElementById('rank1-type').innerHTML = 'Bữa sáng';
        break;
}
for(i = 1; i <= 3 ;i++) {
    document.getElementById(`rank${i}-img`).src = recipes[i - 1].img;
    document.getElementById(`rank${i}-amount`).innerHTML = recipes[i - 1].favorited_amount;
    document.getElementById(`rank${i}-name`).innerHTML = recipes[i - 1].name;
}
// main-content-start------------------------
// fuction remove vietnamse tones
function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g," ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    return str;
}

// show recipes in main-container
let category = 'all', difficult = 'all', time ='all', type = 'all';
let recipes_per_page = 6;
let currentPage = 1;
let item_container = document.getElementById('item-container');
let filteredRecipes = recipes;
let searchedRecipes = recipes;

numPages= () => {
    return Math.ceil(searchedRecipes.length / recipes_per_page);
}

function prevPage() {
    if(currentPage > 1) {
        currentPage--;
        showRecipes(currentPage);
    }
}
function nextPage() {
    if(currentPage < numPages()) {
        currentPage++;
        showRecipes(currentPage);
    }
}
function showThisItem(clicked_id) {
    console.log(clicked_id);
    showDetailItem(clicked_id);
}
showRecipes = (page) => {
    let btn_next = document.getElementById("btn_next");
    let btn_prev = document.getElementById("btn_prev");
    let itemContainers = document.getElementsByClassName('content-item');
    console.log(itemContainers); 
    item_container.innerHTML = '';
    for(let idx = (page-1)*recipes_per_page; idx < page*recipes_per_page && idx < searchedRecipes.length; idx++) { 
            item_container.insertAdjacentHTML('beforeend', `<div class="content-item" id="${searchedRecipes[idx].id}" onClick="showThisItem(this.id);">
            <div class="item-img"><img src="${searchedRecipes[idx].img}" alt=""></div>
            <div class="item-detail">
                <div class="item-name">${searchedRecipes[idx].name}</div>
                <div class="most-favorited-amount"><i class="fab fa-gratipay"></i><span id="item-favorited-amount">${searchedRecipes[idx].favorited_amount}</span> <span id="item-time">~${searchedRecipes[idx].time} min</span></div>
            </div>
        </div>`);
    }
    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
showRecipes(currentPage);
//----------------main-content-end-----------------------------
// function that uppercase first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showDetailItem(itemID) {
    let recipeCategory = document.getElementsByClassName('more-detail-category');
    let thisRecipe = recipes.filter((recipe) => Number(recipe.id) == itemID);
    let thisRecipeIngredients = [];
    for(let idx in thisRecipe[0].ingredients_amount) {
        let thisIngredient = ingredients.filter((ingredient) => ingredient.id == thisRecipe[0].ingredients[idx]);
        thisRecipeIngredients.push(thisIngredient[0]);
    } 
    document.getElementsByClassName('more-detail-title')[0].innerHTML = thisRecipe[0].name;
    let thisRecipeCategory;
    let thisRecipeType
    switch(thisRecipe[0].category) {
        case 'asia':
            thisRecipeCategory = 'Món Á';
            break;
        case 'foreign':
            thisRecipeCategory = 'Món ngoại';
            break;
        case 'viet':
            thisRecipeCategory = 'Món Việt';
            break;   
    }
    console.log(thisRecipeIngredients);
    switch(thisRecipe[0].type) {
        case 'main':
            thisRecipeType = 'Bữa chính';
            break;
        case 'side':
            thisRecipeType = 'Bữa phụ';
            break;
        case 'bf':
            thisRecipeType = 'Bữa sáng';
            break;
    }
    let allCategory = `<span><i class="fas fa-globe-asia"></i>${thisRecipeCategory}</span> <span><i class="fas fa-egg"></i>Độ khó: ${capitalizeFirstLetter(thisRecipe[0].difficult)}</span> <span><i class="fas fa-stopwatch"></i>Thời gian: ${thisRecipe[0].time} min</span> <span><i class="fas fa-utensils"></i>Loại: ${thisRecipeType}</span>`;
    recipeCategory[0].innerHTML = allCategory;
    document.getElementById('more-detail-img').src = thisRecipe[0].img;
    let ingredientsList = document.getElementById('ul-ingredients');
    ingredientsList.innerHTML = '';
    for(let idx in thisRecipe[0].ingredients) {
        ingredientsList.insertAdjacentHTML('beforeend',
        `<li>${thisRecipe[0].ingredients_amount[idx]} ${thisRecipeIngredients[idx]['measurement']} ${thisRecipeIngredients[idx].ingredient}</li>`
        )
    }
    let instructionsList = document.getElementById('ol-instructions');
    instructionsList.innerHTML = '';
    for(let ins of thisRecipe[0].recipe_instruction) {
        instructionsList.insertAdjacentHTML('beforeend', 
        `<li>${ins}</li>`
        )
    }
}
showDetailItem(0);






