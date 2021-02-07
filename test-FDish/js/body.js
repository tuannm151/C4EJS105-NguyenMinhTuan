

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
let item_container = document.getElementById('item-container');
let category = 'all', difficult = 'all', time ='all', type = 'all';
let recipes_per_page = 6;
let currentPage = 1;
let filteredRecipes = recipes;
let searchedRecipes = recipes;
let yOffset;
let btn_next = document.getElementById("btn_next");
let btn_prev = document.getElementById("btn_prev");
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
    showDetailItem(clicked_id);
}

showRecipes = (page) => {
        // let itemContainers = document.getElementsByClassName('content-item');
        item_container.innerHTML = '';
        for(let idx = (page-1)*recipes_per_page; idx < page*recipes_per_page && idx < searchedRecipes.length; idx++) { 
                item_container.insertAdjacentHTML('beforeend', `<div class="item photo" id="${searchedRecipes[idx].id}" onClick="showDetailItem(this.id);">
                <div class="content">
                  <div class="title">
                    <h3> ${searchedRecipes[idx].name}</h3>
                  </div>
                  <img class="photothumb" src="${searchedRecipes[idx].img}">
                  <div class="desc">
                    <p> ${searchedRecipes[idx].description}</p>
                  </div>
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
        allItems = document.getElementsByClassName("item");
        function resizeInstance(instance){
            item = instance.elements[0];
          resizeGridItem(item);
   }        
  for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
  }
    }
showRecipes(currentPage);
//----------------main-content-end-----------------------------
// function that uppercase first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function showDetailItem(itemID) {
    // scroll form back to the top
    $('#form').animate({
        scrollTop: 0
    },100);
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
    let allCategory = `<span><i class="fa fa-map-o" aria-hidden="true"></i>. ${thisRecipeCategory}</span>| <span><i class="fa fa-check-square" aria-hidden="true"></i>. ${capitalizeFirstLetter(thisRecipe[0].difficult)}</span>| <span><i class="fa fa-clock-o" aria-hidden="true"></i>. ${thisRecipe[0].time} min</span>| <span><i class="fa fa-cutlery" aria-hidden="true"></i>. ${thisRecipeType}</span>`
    recipeCategory[0].innerHTML = allCategory;
    document.getElementById('more-detail-img-big').src = thisRecipe[0].img;
    document.getElementById('more-detail-img-small').src = thisRecipe[0].img;
    document.getElementsByClassName('more-detail-desc')[0].innerHTML = `<p>${thisRecipe[0].description}</p>`;
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
    document.getElementById('favorited-amount').innerHTML = thisRecipe[0].favorited_amount;
    // favorite btn
    document.getElementsByClassName('love-action')[0].id = thisRecipe[0].id;
    let favBtn = document.querySelector('.love-action');
    if(activeUser[0].favorite.includes(thisRecipe[0].id)) {
        favBtn.classList.add('active');
    } else if(favBtn.classList.contains('active')) {
        favBtn.classList.remove('active');
    }
    // get current yOffset
    yOffset = window.pageYOffset;
    document.getElementsByClassName('grid')[0].style.position = 'fixed';
    document.getElementById("myBlog").style.display = "block";
}
// function for scroll to the top
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
//   }

// btn close detail item div
function closeForm() {
    document.getElementById("myBlog").style.display = "none";
    document.getElementsByClassName('grid')[0].style.position = 'static';
    window.scroll(0,yOffset);
}
// prev, next btn reveal 
// $(window).scroll(function(){
//     $('#btn_next').addClass('scrolled', $(this).scrollTop() > 1000);
// });






