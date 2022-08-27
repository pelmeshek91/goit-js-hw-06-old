const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { elements } = form;
  let field_email = elements[0];
  let field_passw = elements[1];
  if (field_email.value.length == 0 || field_passw.value.length == 0) {
    alert("Всі поля повинні бути заповнені");
    return 0;
  }
  let obj = { email: field_email.value, password: field_passw.value };
  document.querySelector(".login-form").reset();
  console.log(obj);
});
