//Definição das classes.
class Cliente {
    #saldo;
    constructor(nome, email, telefone, saldo) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.#saldo = saldo;
    }

    getSaldo() {
        return this.#saldo;
    }

    depositar(valor, pessoa) {
        if(valor > 0 && valor > this.#saldo){
            this.#saldo += valor;
            return `Depósito realizado para ${pessoa} com sucesso!`;
        } else {
            return "Valor inválido para depósito.";
        }
    }

    sacar(valor) {
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            return "Saque realizado com sucesso!";
        } else {
            return "Saldo insuficiente para saque.";
        }
    }
}

class Conta {
    constructor(cliente) {
        this.cliente = cliente;
    }

    verificarSaldo() {
        return this.cliente.getSaldo();
    }

}
