"use strict";
// Função convencional
function calculaArea(b, h) {
    return b * h;
}
// Arrow Function
const calculaArea2 = (b, h) => b * h;
function somar(...numeros) {
    // numeros.reduce();
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return '10 é maior que 5';
    }
    else {
        return 5;
    }
}
const resultadoDoTeste = teste();
