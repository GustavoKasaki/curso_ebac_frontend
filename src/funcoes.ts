// Função convencional
function calculaArea(b: number, h: number): number {
    return b * h;
}

// Arrow Function
const calculaArea2 = (b: number, h: number): number => b * h;

function somar(...numeros: number[]): void {
    // numeros.reduce();
    console.log(numeros);
}

function teste(): string | number {
    if (10 > 5) {
        return '10 é maior que 5';
    }
    else {
        return 5;
    }
}

const resultadoDoTeste = teste();