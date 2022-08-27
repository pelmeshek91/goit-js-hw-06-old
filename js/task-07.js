const form = document.querySelector("#font-size-control");
form.addEventListener("input", (event) => {
  const { target } = event;
  if (
    target.value >= target.getAttribute("min") &&
    target.value <= target.getAttribute("max")
  ) {
    document.querySelector("#text").style.fontSize = `${target.value}px`;
  }
});
