//pegar os valores dos campos nome, altura  peso

function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    let imc = peso / (altura * altura);
    alert(`O IMC é: ${imc}`);
    
    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    } else {
        let imc = peso / (altura * altura);
        alert(`O IMC é: ${imc}`);
    }

}

function gerarTextImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}