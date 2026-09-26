//Funções auxiliares.
const form = document.querySelector("form");
const spanClose = document.querySelector("form span");
const button = document.getElementById("abrirFormB");

const alternarVisibilidadeLogin  = (estaCadastrado) => {
  const loginElement = document.querySelector("a[href$='login.html']");
  
  if (loginElement) {
    if (estaCadastrado) {
      loginElement.classList.remove("menu__item--closed");
    } else {
      loginElement.classList.add("menu__item--closed");
    }
  }
};

spanClose.addEventListener("click", function () {
  form.classList.add("section__form--closed");
  form.classList.remove("section__form--open");
  document.body.classList.remove("bodyGray");
}); //Remove o Form clicando no span

function abrirForm() {
  form.classList.remove("section__form--closed");
  form.classList.add("section__form--open");
  document.body.classList.add("bodyGray");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("section__form--closed");
  form.classList.remove("section__form--open");
  document.body.classList.remove("bodyGray");

  if (form.elements["firstName"].value === "" || form.elements["email"].value === "" || !form.elements["email"].value.includes("@") || form.elements["lastName"].value === "" || form.elements["password"].value === "") {
    alert("Por favor, preencha os campos corretamente. Nome, Sobrenome, Email e Senha são obrigatórios, e o Email deve conter '@'");
    return;
  }

  if (button) {
    button.classList.add("section__form--closed");
  }
  
  alternarVisibilidadeLogin(true);

  localStorage.setItem("formSubmitted", "true");
  localStorage.setItem("nomeUsuario", form.elements["firstName"].value);
  localStorage.setItem("sobrenomeUsuario", form.elements["lastName"].value);
  localStorage.setItem("emailUsuario", form.elements["email"].value);
  localStorage.setItem("passwordUsuario", form.elements["password"].value);
});

export { abrirForm, alternarVisibilidadeLogin };