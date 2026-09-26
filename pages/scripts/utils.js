const nomeUsuarioSpan = document.getElementById("nomeUsuario");
const nomeUsuario = localStorage.getItem("nomeUsuario");
const valorN = (valor) => { 
    if (!valor) return 0;
    return parseFloat(valor.replace(",", ".")); 
};

function exibirNomeUsuario() {
    if (nomeUsuario) {
        nomeUsuarioSpan.textContent = nomeUsuario;
    }
}

function atualizarSaldoFormatado(conta) {
    return conta.getSaldo().toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });
}

export { exibirNomeUsuario, valorN, atualizarSaldoFormatado };