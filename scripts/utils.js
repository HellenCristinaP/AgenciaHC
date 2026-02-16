//Funções auxiliares.
const form = document.querySelector("form");
const spanClose = document.querySelector("form span");
const button = document.getElementById("abrirFormB");

// Arrow function reutilizável para atualizar o id do elemento de login
const updateLoginId = (newId) => {
  // Seleciona o link de login procurando pelo arquivo de destino (login.html)
  const loginElement = document.querySelector("a[href='login.html']");

  if (loginElement) {
    loginElement.removeAttribute("class", "menu__item--closed");
    if (newId) loginElement.setAttribute("class", newId);
  }
};

spanClose.addEventListener("click", function () {
  form.classList.add("section__form--closed");
  form.classList.remove("section__form--open");
  document.body.classList.remove("bodyGray");
});

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

  if (form.elements["firtsName"].value === "" || form.elements["email"].value === "" || !form.elements["email"].value.includes("@") || form.elements["lastName"].value === "" || form.elements["password"].value === "") {
    alert("Por favor, preencha os campos corretamente. Nome, Sobrenome, Email e Senha são obrigatórios, e o Email deve conter '@'");
    return;
  }

  if (button) {
    button.classList.add("menu__item--open");
  }
  
  // Atualiza o id do link de login usando a função reutilizável
  updateLoginId("menu__item__login--closed");

  localStorage.setItem("formSubmitted", "true");
  localStorage.setItem("nomeUsuario", form.elements["firtsName"].value);
  localStorage.setItem("sobrenomeUsuario", form.elements["lastName"].value);
  localStorage.setItem("emailUsuario", form.elements["email"].value);
  localStorage.setItem("passwordUsuario", form.elements["password"].value);
});

export { abrirForm, updateLoginId };