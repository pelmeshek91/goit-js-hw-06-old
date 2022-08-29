const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const addIngredients = ingredients.map((ingredient) => {
  const itemIngredients = document.createElement("li");
  itemIngredients.textContent = ingredient;
  itemIngredients.classList.add("item");
  return itemIngredients;
});
listIngredients.append(...addIngredients);

/* 2-й варіант без create */

/* const listIngredients = document.querySelector("#ingredients");
const newItemList = addIngredients(ingredients);

function addIngredients(ingredients) {
  return ingredients
    .map((ingredient) => `<li class=item>${ingredient}</li>`)
    .join("");
}
listIngredients.innerHTML = newItemList; */
