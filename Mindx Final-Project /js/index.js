document.getElementById('recipe_name').innerHTML = recipes[0].recipe_name;
let listIngrediens = document.getElementById('list_ingrediens');
for(let item of recipes[0].recipe_ingredients) {
    listIngrediens.insertAdjacentHTML("beforeend",`<li>${item.amount} ${ingrediens[Number(item.id)].measurement} ${ingrediens[Number(item.id)].name} </li>`);
}