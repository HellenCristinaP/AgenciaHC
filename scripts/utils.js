//Funções auxiliares.
const form = document.querySelector("form");
const login = document.querySelector("a[href='/pages/conta.html']");
const spanClose = document.querySelector("form span");
const button = document.getElementById("abrirFormB");

spanClose.addEventListener("click", function () {
  form.classList.add("form-closed");
  form.classList.remove("form-open");
  document.body.classList.remove("bodyGray");
});

function abrirForm() {
  form.classList.remove("form-closed");
  form.classList.add("form-open");
  document.body.classList.add("bodyGray");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  form.classList.add("form-closed");
  form.classList.remove("form-open");
  document.body.classList.remove("bodyGray");

  if (form.elements["firtsName"].value === "" || form.elements["email"].value === "" || !form.elements["email"].value.includes("@") || form.elements["lastName"].value === "" || form.elements["password"].value === "") {
    alert("Por favor, preencha os campos corretamente. Nome, Sobrenome, Email e Senha são obrigatórios, e o Email deve conter '@'");
    return;
  }

  if (button) {
    button.classList.add("form-closed");
  }
  login.removeAttribute("id");
  login.setAttribute("id", "login-aberto");

  localStorage.setItem("formSubmitted", "true");
  localStorage.setItem("nomeUsuario", form.elements["firtsName"].value);
  localStorage.setItem("sobrenomeUsuario", form.elements["lastName"].value);
  localStorage.setItem("emailUsuario", form.elements["email"].value);
  localStorage.setItem("passwordUsuario", form.elements["password"].value);
});


export { abrirForm, login };