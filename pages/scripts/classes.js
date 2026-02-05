//Definição das classes.
export class Cliente {
    #senha;
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.#senha = senha;
    }

    getSenha() {
        return this.#senha;
    }
}

export class Conta {
    #saldo;
    constructor(cliente) {
        this.cliente = cliente;
        this.#saldo = 0;
    }
    
    getSaldo() {
        return this.#saldo;
    }
    
    depositar(valor) {
        if(valor > 0 && valor > this.#saldo){
            this.#saldo += valor;
            return alert("Depósito realizado com sucesso!");;
        } else {
            return alert("Valor inválido para depósito.");
        }
    }
    
    sacar(valor) {
        if(valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            return alert("Saque realizado com sucesso!");;
        } else {
            return alert("Saldo insuficiente para saque.");
        }
    }

    getSaldo() {
        return this.#saldo;
    }
}
