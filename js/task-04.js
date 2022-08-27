let counterValue = document.querySelector("#value");

document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue.innerHTML = +counterValue.innerHTML - 1;
  });

document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue.innerHTML = +counterValue.innerHTML + 1;
  });
