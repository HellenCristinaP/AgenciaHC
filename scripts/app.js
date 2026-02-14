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
  ? `<a href="pages/login.html" class="menu__item" id="login-closed">${nome}</a>` 
  : `<a href="#${nome}" class="menu__item">${nome}</a>`;
}).join(""); // Aqui o .join faz sentido, pois o .map retornou um Array

nav.innerHTML = htmlFinal;


nav.addEventListener("click", function (event) {
  if (nav.classList.contains("menu--closed")) {
    nav.classList.remove("menu--closed");
    nav.classList.add("menu--open");
  } else {
    nav.classList.toggle("menu--closed");
    nav.classList.remove("menu--open")
  }
});

button.addEventListener("click", abrirForm);

document.addEventListener("DOMContentLoaded", function () {
  
  if (localStorage.getItem("formSubmitted") === "true") {
    button.classList.add("section__form--closed");
    updateLoginId("menu__item__login--closed");
  } else {
    updateLoginId("menu__item__login--closed");
    button.classList.remove("section__form--closed");
  }
});
