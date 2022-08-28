let counterValue = document.querySelector("#value");
console.dir(counterValue);

document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue.innerHTML--;
  });

document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue.innerHTML++;
  });
