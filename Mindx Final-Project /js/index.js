document.getElementById('recipe_name').innerHTML = recipes[0].recipe_name;
document.getElementById('category').innerHTML = recipes[0].category;
document.getElementById('time').innerHTML = recipes[0].time;
document.getElementById('difficult').innerHTML = recipes[0].difficult;
document.getElementById('type').innerHTML = recipes[0].type;
let listIngrediens = document.getElementById('list_ingrediens');
for(let item of recipes[0].recipe_ingredients) {
    listIngrediens.insertAdjacentHTML("beforeend",`<li>${item.amount} ${ingrediens[Number(item.id)].measurement} ${ingrediens[Number(item.id)].name} </li>`);
}
let listInstruction = document.getElementById('list_instructions');
for(let item of recipes[0].recipe_instruction) {
    listInstruction.insertAdjacentHTML('beforeend',`<li>${item}</li>`);
}