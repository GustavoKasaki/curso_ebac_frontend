const form = document.getElementById('formNumero');
const containerValidacao = document.querySelector('.validacao');

function validaNumero(A,B) {
    const calculo = B > A;
    console.log(calculo);
    return calculo;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = parseInt(document.getElementById('numeroA').value, 10); console.log(numeroA);
    const numeroB = parseInt(document.getElementById('numeroB').value, 10); console.log(numeroB);
    const msgValido = `O número B (${numeroB}) é MAIOR que o número A (${numeroA})!`;
    const msgInvalido = `O número B (${numeroB}) NÃO É MAIOR que o número A (${numeroA})!`;
    const msgIgual = `O número B (${numeroB}) é IGUAL ao número A (${numeroA})!`;
    let formValido = false;

    formValido = validaNumero(numeroA,numeroB);

    if(formValido) {
        containerValidacao.innerHTML = msgValido;
        document.querySelector('.validacao').style.border = '4px solid green'
    }

    else if (numeroA == numeroB) {
        containerValidacao.innerHTML = msgIgual;
        document.querySelector('.validacao').style.border = '4px solid yellow'
    }

    else {
        containerValidacao.innerHTML = msgInvalido;
        document.querySelector('.validacao').style.border = '4px solid red'
    }
})

form.addEventListener('reset', function(r) {
    containerValidacao.textContent = '';
    document.querySelector('.validacao').style.border = '';
})
