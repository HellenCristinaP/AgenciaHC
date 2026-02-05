//Código principal
import { abrirForm, login } from "./utils.js";

const button = document.getElementById("abrirFormB")

button.addEventListener("click", abrirForm);

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("formSubmitted") === "true") {
    button.classList.add("form-closed");
    login.removeAttribute("id");
    login.setAttribute("id", "login-aberto");
  } else {
    login.removeAttribute("id");
    login.setAttribute("id", "login-fechado");
    button.classList.remove("form-closed");
  }
});