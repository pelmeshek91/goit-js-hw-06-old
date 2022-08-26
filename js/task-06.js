const input = document.querySelector("#validation-input");
input.addEventListener("input", (event) => {
  const {
    classList,
    value,
    dataset: { length },
  } = event.target;

  classList.add("valid");
  value.length !== +length
    ? classList.add("invalid")
    : classList.remove("invalid");
});
