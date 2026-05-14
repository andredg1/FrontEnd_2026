function validarCPF() {

    let cpf = prompt("Digite seu CPF:");

    let resultado = document.getElementById("resultado");

    cpf = cpf.replace(/\D/g, "");

    if (cpf.length != 11) {
        resultado.innerText = "CPF inválido";
        resultado.style.color = "red";
        return;
    }

   
    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto == 10) {
        resto = 0;
    }

    if (resto != Number(cpf[9])) {
        resultado.innerText = "CPF inválido";
        resultado.style.color = "red";
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
        resultado.innerText = "CPF inválido";
        resultado.style.color = "red";
        return;
    }

    resultado.innerText = "CPF válido";
    resultado.style.color = "green";
}
