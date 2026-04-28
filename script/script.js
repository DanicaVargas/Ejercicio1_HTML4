document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");

  password1.addEventListener("input", validar);
  password2.addEventListener("input", validar);

  function validar() {
    if (password1.value !== password2.value) {
      password2.setCustomValidity("Las contraseñas deben coincidir");
    } else {
      password2.setCustomValidity("");
    }
  }
}