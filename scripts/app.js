import {  abrirForm, alternarVisibilidadeLogin  } from "./utils.js";

const button = document.getElementById("abrirFormB")
const menu = [
  "Home", "Sobre", "Serviços", "Depoimentos", "Contato", "Conta",
];
const nav = document.querySelector("nav");


const htmlFinal = menu.map(nome => {
  return nome === "Conta" 
  ? `<a href="pages/login.html" class="menu__item no-select" id="login-closed">${nome}</a>` 
  : `<a href="#${nome}" class="menu__item no-select">${nome}</a>`;
}).join("");

nav.innerHTML = htmlFinal;

nav.addEventListener("click", function (event) {
  if (window.innerWidth < 900) {
    if (event.target.tagName === "A") {
      nav.classList.add("menu--closed");
      nav.classList.remove("menu--open");
      return;
    }
    if (nav.classList.contains("menu--closed")) {
      nav.classList.remove("menu--closed");
      nav.classList.add("menu--open");
    } else {
      nav.classList.add("menu--closed");
      nav.classList.remove("menu--open");
    }
  }
});

button.addEventListener("click", abrirForm);

document.addEventListener("DOMContentLoaded", function () {
  const formEnviado = localStorage.getItem("formSubmitted") === "true";

  if (formEnviado) {
    button.classList.add("section__form--closed");
    alternarVisibilidadeLogin(true);
  } else {
    button.classList.remove("section__form--closed");
    alternarVisibilidadeLogin(false);
  }
});
