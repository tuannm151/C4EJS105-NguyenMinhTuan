// admin page ---------- 
let tbody = document.getElementById('ts_body');
let listTr = tbody.getElementsByTagName("tr");
let isUpdating = false;
let elementIdx;
let newRecipe = {}
let newRecipeIngredients = [];
let newRecipeAmount = [];
let newRecipeInstruction = [];

addModifyFunction = (index) => {
    let newElement = listTr[index].lastChild;
    newElement.addEventListener('click', (e) => {
        // project's index
        elementIdx = Number(convertIdx(e.target.parentNode.id));
        if (e.target.innerHTML == 'X') {
            // delete element in database
            recipes.splice(elementIdx, 1);
            // delete element in html interface
            e.target.parentNode.parentNode.remove();
            // clearInput();
        }
        else if (e.target.innerHTML == 'U') {
            isUpdating = true;
            resetNewRecipesForm();
            document.getElementById('new-item-name').value = recipes[elementIdx].name;
            document.getElementById('new-recipes-description').value = recipes[elementIdx].description;
            document.getElementById('new-item-category').value = recipes[elementIdx].category;
            document.getElementById('new-item-difficult').value = recipes[elementIdx].difficult;
            document.getElementById('new-item-time').value = recipes[elementIdx].time;
            document.getElementById('new-item-type').value = recipes[elementIdx].type;
            document.getElementById('new-item-img').value = recipes[elementIdx].img;
            document.getElementById('new-item-add-btn').innerHTML = 'Update';
            // show ingredients in recipe
            let thisRecipeIngredients = [];
            for (let idx in recipes[elementIdx].ingredients_amount) {
                let thisIngredient = ingredients.filter((ingredient) => ingredient.id == recipes[elementIdx].ingredients[idx]);
                thisRecipeIngredients.push(thisIngredient[0]);
            }
            let ingredientsList = document.getElementById('new-ingredients-ul');
            ingredientsList.innerHTML = '';
            for (let idx in recipes[elementIdx].ingredients) {
                ingredientsList.insertAdjacentHTML('beforeend',
                    `<li>${recipes[elementIdx].ingredients_amount[idx]} ${thisRecipeIngredients[idx]['measurement']} ${thisRecipeIngredients[idx].ingredient}</li>`
                )
            }
            // show instruction in recipe
            for(let instruction of recipes[elementIdx].recipe_instruction) {
                document.getElementById('instruction-ol').insertAdjacentHTML('beforeend', `
                <li>${instruction}</li>
                `)
            }
        }
    });
}
function convertIdx(str) {
    let id = str.split('.');
    return id[1];
}
function loadCurrentRecipeList() {
    if (activeUser[0].role != 'admin') {
        for (let recipeID of activeUser[0].created) {
            let thisRecipe = recipes.filter((recipe) => recipe.id == recipeID);
            let idx = recipes.indexOf(thisRecipe[0]);
            if (thisRecipe[0] != undefined) {
                tbody.insertAdjacentHTML('beforeend', `<tr><td>${thisRecipe[0].name}</td><td>${thisRecipe[0].category}</td><td>${thisRecipe[0].difficult}</td><td>${thisRecipe[0].time}</td><td>${thisRecipe[0].type}</td><td id='idx.${idx}'><button>X</button><button>U</button></td></tr>`);
                addModifyFunction(idx);
            }
        }
    } else {
        for (let idx in recipes) {
            tbody.insertAdjacentHTML('beforeend', `<tr><td>${recipes[idx].name}</td><td>${recipes[idx].category}</td><td>${recipes[idx].difficult}</td><td>${recipes[idx].time}</td><td>${recipes[idx].type}</td><td id='idx.${idx}'><button>X</button><button>U</button></td></tr>`);
            addModifyFunction(idx);
        }
    }
}

// for (let idx in recipes) {
//     if(activeUser[0].role != 'admin') {

//     }
//     tbody.insertAdjacentHTML('beforeend', `<tr><td>${recipes[idx].name}</td><td>${recipes[idx].category}</td><td>${recipes[idx].difficult}</td><td>${recipes[idx].time}</td><td>${recipes[idx].type}</td><td><button>X</button><button>U</button></td></tr>`);
//     // addModifyFunction(idx);
// }
// //fuction add new item to html and database 
addNewRecipe = (name, category, difficult, time, type, ingredients, ingredients_amount, descriptions, instructions) => {
    newRecipe.id = recipes.length;
    newRecipe.name = name;
    newRecipe.category = category;
    newRecipe.difficult = difficult;
    newRecipe.time = time;
    newRecipe.type = type;
    newRecipe.ingredients = ingredients;
    newRecipe.ingredients_amount = ingredients_amount;
    newRecipe.description = descriptions;
    newRecipe.recipe_instruction =
        recipes.push(newRecipe);
    tbody.insertAdjacentHTML('beforeend', `<tr><td>${name}</td><td>${category}</td><td>${difficult}</td><td>${time}</td><td>${type}</td><td><button>X</button><button>U</button></td></tr>`);
    addModifyFunction(listTr.length - 1);
}
document.getElementById('new-item-add-btn').addEventListener('click', () => {
    let newRecipeName = document.getElementById('new-item-name').value;
    let newRecipeDifficult = document.getElementById('new-item-difficult').value;
    let newRecipeCategory = document.getElementById('new-item-category').value;
    let newRecipeTime = document.getElementById('new-item-time').value;
    let newRecipeType = document.getElementById('new-item-type').value;
    let newRecipeImage = document.getElementById('new-item-img').value;
    let newRecipeDescription = document.getElementById('new-recipes-description').value;
    if (isUpdating == false) {
        addNewRecipe(newRecipeName, newRecipeCategory, newRecipeDifficult, newRecipeTime, newRecipeType, newRecipeIngredients, newRecipeAmount, newRecipeDescription, newRecipeInstruction);
        // reset input on html interface
        activeUser[0].created.push(recipes.length - 1);
        loadUserPage();
        resetNewRecipesForm();
    } else {
        // update html interface
        let listTd = listTr[elementIdx].getElementsByTagName('td');
        listTd[0].innerHTML = newRecipeName;
        listTd[1].innerHTML = newRecipeCategory;
        listTd[2].innerHTML = newRecipeDifficult;
        listTd[3].innerHTML = newRecipeTime;
        listTd[4].innerHTML = newRecipeType;
        // update database
        recipes[elementIdx].name = newRecipeName;
        recipes[elementIdx].ingredients = newRecipeIngredients;
        recipes[elementIdx].ingredients_amount = newRecipeAmount;
        recipes[elementIdx].category = newRecipeCategory;
        recipes[elementIdx].difficult = newRecipeDifficult;
        recipes[elementIdx].time = newRecipeTime;
        recipes[elementIdx].type = newRecipeType;
        recipes[elementIdx].img = newRecipeImage;
        recipes[elementIdx].description = newRecipeDescription;
        // clear
        resetNewRecipesForm();
    }
});


//------------------- INGREDIENT SELECT -------------------- //
function showInfoIngredient(ingredientID) {
    let thisIngredient = ingredients.filter((ingredient) => ingredient.id == ingredientID);
    document.getElementById('ingredient-img').src = thisIngredient[0].img;
    document.getElementsByClassName('ingredient-measurement')[0].innerHTML = thisIngredient[0].measurement;
}
function convertIngredientID(str) {
    let id = str.split('.');
    console.log(id[1]);
    return id[1];
}

function showListIngredients(type) {
    let ingredientsOpt = document.getElementById('ingredients');
    ingredientsOpt.innerHTML = '';
    let listCategoratedIngredient = ingredients.filter((ingredient) => ingredient.type == type);
    for (let ingredient of listCategoratedIngredient) {
        ingredientsOpt.insertAdjacentHTML('beforeend', `
        <option value="i.${ingredient.id}">${ingredient.ingredient}</option>
        `)
    }
    showInfoIngredient(convertIngredientID(ingredientsOpt.value));
}
showListIngredients('vegetable');
let ingredientsTypeSelectBar = document.getElementById('ingredients-type');
ingredientsTypeSelectBar.addEventListener('change', () => {
    showListIngredients(ingredientsTypeSelectBar.value);
});
document.getElementById('ingredients').addEventListener('change', () => {
    showInfoIngredient(convertIngredientID(document.getElementById('ingredients').value));
})
document.getElementById('ingredient-add-btn').addEventListener('click', () => {
    // add ingredient to temp arr
    let ingredient = $("#ingredients option:selected").text()
    let ingredientAmmount = document.getElementById('ingredient-amount').value;
    newRecipeIngredients.push(Number(convertIngredientID(document.getElementById('ingredients').value)));
    newRecipeAmount.push(Number(document.getElementById('ingredient-amount').value));
    // add ingredient to html interface
    document.getElementsByClassName('new-ingredients-ul')[0].insertAdjacentHTML('beforeend', `
    <li>${ingredientAmmount} ${document.getElementsByClassName('ingredient-measurement')[0].innerHTML} ${ingredient}</li>
    `)
    // reset input after added
    document.getElementById('ingredient-amount').value = '';
})
function createNewInstruction() {
    let newInstruction = document.getElementById('insutruction-input');
    newRecipeInstruction.push(newInstruction.value);
    document.getElementById('instruction-ol').insertAdjacentHTML('beforeend', `
    <li>${newInstruction.value}</li>
    `)
    newInstruction.value = '';
    $('.new-recipes-popup').animate({
        scrollTop: $('.new-recipes-popup')[0].scrollHeight,
    }, 700);
}
function resetNewRecipesForm() {
    isUpdating = false;
    document.getElementById('new-item-name').value = null;
    document.getElementById('insutruction-input').value = '';
    document.getElementById('ingredient-amount').value = '';
    document.getElementById('new-item-add-btn').innerHTML = 'Add';
    document.getElementById('new-item-img').value = null;
    document.getElementById('new-recipes-description').value = null;
    document.getElementById('instruction-ol').innerHTML = '';
    newRecipeIngredients = [];
    newRecipeAmount = [];
    newRecipeInstruction = [];
    newRecipe = {};
}
