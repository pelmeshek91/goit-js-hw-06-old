const showAllCategories = document.querySelectorAll(".item");
console.log("Number of categories: ", showAllCategories.length);

const categoriesArr = [...showAllCategories];
for (const categories of categoriesArr) {
  const namesOfCategories = categories.querySelector("h2");
  const countItems = categories.querySelector("ul");
  console.log("Category: ", namesOfCategories.textContent);
  console.log("Elements: ", countItems.children.length);
}
