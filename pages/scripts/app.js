import { exibirNomeUsuario, valorN, atualizarSaldoFormatado } from "./utils.js";
import { Cliente, Conta } from "./classes.js";

const client = new Cliente(
    localStorage.getItem("nomeUsuario"),
    localStorage.getItem("emailUsuario"),
    localStorage.getItem("passwordUsuario"),
);
const account = new Conta(client);
const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");

const saldoSpan = document.getElementById("saldo");

depositarBtn.addEventListener("click", function () {
    const input = prompt("Digite o valor para depositar:");
    if (input === null) return;
    const valor = valorN(input);

    account.depositar(valor);

    if (saldoSpan) {
        saldoSpan.textContent = atualizarSaldoFormatado(account);
    }
});

retirarBtn.addEventListener("click", function () {
    const input = prompt("Digite o valor para retirar:");
    if (input === null) return;
    const valor = valorN(input);

    account.sacar(valor);

    if (saldoSpan) {
        saldoSpan.textContent = atualizarSaldoFormatado(account);
    }
});

exibirNomeUsuario();
if (saldoSpan) {
    saldoSpan.textContent = atualizarSaldoFormatado(account);
}