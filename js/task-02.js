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
  itemIngredients.textContent = `${ingredient}`;
  itemIngredients.classList.add("item");
  return itemIngredients;
});
listIngredients.append(...addIngredients);
