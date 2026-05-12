function validarCPF() {

    let cpf = prompt("Digite seu CPF:");

    let resultado = document.getElementById("resultado");

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length != 11) {
        alert("CPF inválido");
        return;
    }

    // ======================
    // PRIMEIRO DÍGITO
    // ======================
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto == 10) {
        resto = 0;
    }

    if (resto != Number(cpf[9])) {
        alert("CPF inválido");
        return;
    }
    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto == 10) {
        resto = 0;
    }

    if (resto != Number(cpf[10])) {
        alert("CPF inválido");
        return;
    }

    alert("CPF válido");
}