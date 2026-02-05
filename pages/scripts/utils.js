const nomeUsuarioSpan = document.getElementById("nomeUsuario");
const nomeUsuario = localStorage.getItem("nomeUsuario");
const valorN = (valor) => { return parseFloat(valor.replace(",", ".")); }

function exibirNomeUsuario() {
    if (nomeUsuario) {
        nomeUsuarioSpan.textContent = nomeUsuario;
    }
}

function atualizarSaldoFormatado(conta) {
    return conta.getSaldo().toLocaleString('pt-BR', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    });
}

export { exibirNomeUsuario, valorN, atualizarSaldoFormatado };