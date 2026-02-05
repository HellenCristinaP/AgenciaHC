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

depositarBtn.addEventListener("click", function () {
    const input = prompt("Digite o valor para depositar:");
    const valor = valorN(input);

    account.depositar(valor);

    // 4. Atualização da UI:
    const saldoSpan = document.getElementById("saldo");
    const saldoFormatado = atualizarSaldoFormatado(account);
    saldoSpan.textContent = saldoFormatado;
});

retirarBtn.addEventListener("click", function () {
    const input = prompt("Digite o valor para retirar:");
    const valor = valorN(input);

    account.sacar(valor);

    const saldoSpan = document.getElementById("saldo");
    const saldoFormatado = atualizarSaldoFormatado(account);
    saldoSpan.textContent = saldoFormatado;
});

exibirNomeUsuario();