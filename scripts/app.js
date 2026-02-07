//Código principal
import {  abrirForm, updateLoginId } from "./utils.js";

const button = document.getElementById("abrirFormB")
const menu = [
  "Home", "Sobre", "Serviços", "Depoimentos", "Contato", "Login",
];
const nav = document.querySelector("nav");
// linha removida: tentativa anterior de manipular login antes de existir

const htmlFinal = menu.map(nome => {
  return nome === "Login" 
    ? `<a href="pages/login.html" id="login-fechado">${nome}</a>` 
    : `<a href="#${nome}">${nome}</a>`;
}).join(""); // Aqui o .join faz sentido, pois o .map retornou um Array

nav.innerHTML = htmlFinal;


nav.addEventListener("click", function (event) {
  if (nav.classList.contains("fechado")) {
    nav.classList.remove("fechado");
    nav.classList.add("aberto");
  } else {
    nav.classList.toggle("fechado");
    nav.classList.remove("aberto")
  }
});

button.addEventListener("click", abrirForm);

document.addEventListener("DOMContentLoaded", function () {
  
  if (localStorage.getItem("formSubmitted") === "true") {
    button.classList.add("form-closed");
    updateLoginId("login-aberto");
  } else {
    updateLoginId("login-fechado");
    button.classList.remove("form-closed");
  }
});
