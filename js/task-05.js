const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  outputText.textContent =
    event.target.value.length > 0 ? event.target.value : "Anonymous";
});
