function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", function (event) {
  event.preventDefault();
  const color = getRandomHexColor();
  document.querySelector(".color").innerHTML = color;
  body.style.backgroundColor = color;
});
