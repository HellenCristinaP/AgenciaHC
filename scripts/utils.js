//Funções auxiliares.
const form = document.querySelector("form");

function abrirForm() {
    console.log("Abrir formulário");
    form.classList.remove("form-closed");
    form.classList.add("form-open");
    document.body.classList.add("bodyGray");
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.classList.add("form-closed");
    form.classList.remove("form-open");
    document.body.classList.remove("bodyGray");
});

export { abrirForm };