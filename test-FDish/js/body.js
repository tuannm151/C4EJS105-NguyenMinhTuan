// show most rated recipes 
function favoritedAmountCompare(a, b) {
    return Number(a.favorited_amount) > Number(b.favorited_amount) ? -1 : 1;
}
recipes.sort(favoritedAmountCompare);

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
        let btn_next = document.getElementById("btn_next");
        let btn_prev = document.getElementById("btn_prev");
        // let itemContainers = document.getElementsByClassName('content-item');
        item_container.innerHTML = '';
        for(let idx = (page-1)*recipes_per_page; idx < page*recipes_per_page && idx < searchedRecipes.length; idx++) { 
                item_container.insertAdjacentHTML('beforeend', `<div class="item photo">
                <div class="content">
                  <div class="title">
                    <h3> ${searchedRecipes[idx].name}</h3>
                  </div>
                  <img class="photothumb" src="${searchedRecipes[idx].img}">
                  <div class="desc">
                    <p> <i>Tôm rang thịt ba chỉ (cháy cạnh)</i>
                      Thịt ba chỉ mềm xen lẫn mỡ giòn giòn, trong khi thịt tôm chắc, thơm mùi hành tỏi phi, thêm nước sốt sền sệt, mằn mặn, ngòn ngọt. Thêm bát cơm trắng với ít dưa chua hay cà muối thì còn gì bằng.</p>
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

// function showDetailItem(itemID) {
//     let recipeCategory = document.getElementsByClassName('more-detail-category');
//     let thisRecipe = recipes.filter((recipe) => Number(recipe.id) == itemID);
//     let thisRecipeIngredients = [];
//     for(let idx in thisRecipe[0].ingredients_amount) {
//         let thisIngredient = ingredients.filter((ingredient) => ingredient.id == thisRecipe[0].ingredients[idx]);
//         thisRecipeIngredients.push(thisIngredient[0]);
//     } 
//     document.getElementsByClassName('more-detail-title')[0].innerHTML = thisRecipe[0].name;
//     let thisRecipeCategory;
//     let thisRecipeType
//     switch(thisRecipe[0].category) {
//         case 'asia':
//             thisRecipeCategory = 'Món Á';
//             break;
//         case 'foreign':
//             thisRecipeCategory = 'Món ngoại';
//             break;
//         case 'viet':
//             thisRecipeCategory = 'Món Việt';
//             break;   
//     }
//     switch(thisRecipe[0].type) {
//         case 'main':
//             thisRecipeType = 'Bữa chính';
//             break;
//         case 'side':
//             thisRecipeType = 'Bữa phụ';
//             break;
//         case 'bf':
//             thisRecipeType = 'Bữa sáng';
//             break;
//     }
//     let allCategory = `<span><i class="fas fa-globe-asia"></i>${thisRecipeCategory}</span> <span><i class="fas fa-egg"></i>Độ khó: ${capitalizeFirstLetter(thisRecipe[0].difficult)}</span> <span><i class="fas fa-stopwatch"></i>Thời gian: ${thisRecipe[0].time} min</span> <span><i class="fas fa-utensils"></i>Loại: ${thisRecipeType}</span>`;
//     recipeCategory[0].innerHTML = allCategory;
//     document.getElementById('more-detail-img').src = thisRecipe[0].img;
//     let ingredientsList = document.getElementById('ul-ingredients');
//     ingredientsList.innerHTML = '';
//     for(let idx in thisRecipe[0].ingredients) {
//         ingredientsList.insertAdjacentHTML('beforeend',
//         `<li>${thisRecipe[0].ingredients_amount[idx]} ${thisRecipeIngredients[idx]['measurement']} ${thisRecipeIngredients[idx].ingredient}</li>`
//         )
//     }
//     let instructionsList = document.getElementById('ol-instructions');
//     instructionsList.innerHTML = '';
//     for(let ins of thisRecipe[0].recipe_instruction) {
//         instructionsList.insertAdjacentHTML('beforeend', 
//         `<li>${ins}</li>`
//         )
//     }
// }
// showDetailItem(0);
// // admin page ---------- 
// let tbody = document.getElementById('ts_body');
// let listTr = tbody.getElementsByTagName("tr");
// let isUpdating = false;
// let elementIdx;
// addModifyFunction = (index) => {
//     let newElement = listTr[index].lastChild;
//     newElement.addEventListener('click', (e) => {
//         // project's index
//         elementIdx = e.target.parentNode.parentNode.rowIndex - 1;
//         if (e.target.innerHTML == 'X') {
//             // delete element in database
//             recipes.splice(elementIdx,1);
//             // delete element in html interface
//             e.target.parentNode.parentNode.remove();
//             // clearInput();
//         }
//         else if (e.target.innerHTML == 'U') {
//             isUpdating = true;
//             document.getElementById('new-item-id').value = recipes[elementIdx].id;
//             document.getElementById('new-item-name').value = recipes[elementIdx].name;
//             document.getElementById('new-item-ingredients').value = recipes[elementIdx].ingredients;
//             document.getElementById('new-item-amount').value = recipes[elementIdx].ingredients_amount;
//             document.getElementById('new-item-category').value = recipes[elementIdx].category;
//             document.getElementById('new-item-difficult').value = recipes[elementIdx].difficult;
//             document.getElementById('new-item-time').value = recipes[elementIdx].time;
//             document.getElementById('new-item-type').value = recipes[elementIdx].type;
//             document.getElementById('new-item-img').value = recipes[elementIdx].img;
//             document.getElementById('new-item-add-btn').innerHTML = 'Update';
//         }
//     });
// }
// for (let idx in recipes) {
//     tbody.insertAdjacentHTML('beforeend', `<tr><td>${recipes[idx].id}</td><td>${recipes[idx].name}</td><td>${recipes[idx].category}</td><td>${recipes[idx].difficult}</td><td>${recipes[idx].time}</td><td>${recipes[idx].type}</td><td>${recipes[idx].ingredients}</td><td>${recipes[idx].ingredients_amount}</td><td><button>X</button><button>U</button></td></tr>`);
//     addModifyFunction(idx);
// }
// clearInput = () => {
//     document.getElementById('new-item-add-btn').innerHTML = 'Add'
//     document.getElementById('new-item-id').value = null;
//     document.getElementById('new-item-name').value = null;
//     document.getElementById('new-item-ingredients').value = null;
//     document.getElementById('new-item-amount').value = null;
//     document.getElementById('new-item-img').value = null;
//     isUpdating = false;
// }
// //fuction add new item to html and database 
// addNewRecipe = (id, name, category, difficult, time, type, ingredients, ingredients_amount) => {
//     let newRecipe = {}
//     newRecipe.id = id;
//     newRecipe.name = name;
//     newRecipe.category = category;
//     newRecipe.difficult = difficult;
//     newRecipe.time = time;
//     newRecipe.type = type;
//     newRecipe.ingredients = ingredients;
//     newRecipe.ingredients_amount = ingredients_amount;
//     recipes.push(newRecipe);
//     tbody.insertAdjacentHTML('beforeend', `<tr><td>${id}</td><td>${name}</td><td>${category}</td><td>${difficult}</td><td>${time}</td><td>${type}</td><td>${ingredients}</td><td>${ingredients_amount}</td><td><button>X</button><button>U</button></td></tr>`);
//     addModifyFunction(listTr.length - 1);
// }
// document.getElementById('new-item-add-btn').addEventListener('click', () => {
//     let newRecipeId = document.getElementById('new-item-id').value;
//     let newRecipeName = document.getElementById('new-item-name').value;
//     let newRecipeDifficult = document.getElementById('new-item-difficult').value;
//     let newRecipeCategory = document.getElementById('new-item-category').value;
//     let newRecipeTime = document.getElementById('new-item-time').value;
//     let newRecipeType = document.getElementById('new-item-type').value;
//     let newRecipeIngredients = document.getElementById('new-item-ingredients').value.split(" ");
//     let newRecipeAmount = document.getElementById('new-item-amount').value.split(" ");
//     let newRecipeImage = document.getElementById('new-item-img').value;
//     if (isUpdating == false) {
//         addNewRecipe(newRecipeId, newRecipeName, newRecipeCategory, newRecipeDifficult, newRecipeTime, newRecipeType, newRecipeIngredients, newRecipeAmount);
//         // reset input on html interface
//         clearInput();
//     } else {
//         // update html interface
//         let listTd = listTr[elementIdx].getElementsByTagName('td');
//         listTd[0].innerHTML = newRecipeId;
//         listTd[1].innerHTML = newRecipeName;
//         listTd[2].innerHTML = newRecipeCategory;
//         listTd[3].innerHTML = newRecipeDifficult;
//         listTd[4].innerHTML = newRecipeTime;
//         listTd[5].innerHTML = newRecipeType;
//         listTd[6].innerHTML = newRecipeIngredients;
//         listTd[7].innerHTML = newRecipeAmount;
//         // update database
//         recipes[elementIdx].id = newRecipeId;
//         recipes[elementIdx].name = newRecipeName;
//         recipes[elementIdx].ingredients = newRecipeIngredients;
//         recipes[elementIdx].ingredients_amount = newRecipeAmount;
//         recipes[elementIdx].category = newRecipeCategory;
//         recipes[elementIdx].difficult = newRecipeDifficult;
//         recipes[elementIdx].time = newRecipeTime;
//         recipes[elementIdx].type = newRecipeType;
//         recipes[elementIdx].img = newRecipeImage;
//         // clear
//         clearInput();
//     }
//     showRecipes(currentPage);
// });
// // clear button
// document.getElementById('new-item-clear-btn').addEventListener('click', () => {
//     clearInput();
// });






