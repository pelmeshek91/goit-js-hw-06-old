const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  const textValue = event.target.value;
  outputText.textContent = textValue.length > 0 ? textValue : "Anonymous";
});
