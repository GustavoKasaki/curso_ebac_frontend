// function somar(a, b) { // Função tradicional
//     return a + b;
// }

function somar() { // 'arguments' = tipo de objeto iteravel como array, embora não seja um
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return `Soma com arguments: ${soma}`;
}
console.log(somar(10,20,30))


// REST: usado como argumento
function somarComRest(...numeros) { // '...' torna o argumento da função em REST, permitindo utilizar métodos de array
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return `Soma com REST: ${soma}`;
}
console.log(somarComRest(10,20,30))


// Spread operator
const numeros = [1,2,3,4];
console.log(...numeros)

const timesSP = ['Palmeiras', 'Santos', 'Bragantino', 'São Paulo'];
const timesRJ = ['Vasco', 'Botafogo', 'Flamengo', 'Fluminense'];

// const timesDeFutebol = timesSP.concat(timesRJ); // Concatenação padrão
const timesDeFutebol = [...timesSP, ...timesRJ]; // Concatenação usando Spread
console.log(timesDeFutebol);

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1); // primeiro item da string
console.log(item2); // segundo item da string
console.log(item3); // terceiro item da string
console.log(outrosTimes); // demais itens da string


const carroDaJulia = {
    modelo: 'Gol',
    marca: 'VW',
    motor: 1.6
}

// const carroDaAna = { // Declaração de objeto padrão
//     modelo: 'Gol',
//     marca: 'VW',
//     motor: 1.8
// }

const carroDaAna = {
    ...carroDaJulia, // Usando Spread para reaproveitar propriedades de outro objeto, sem precisar replicar tudo, e alterar as propriedades se necessário
    motor: 1.8
}

console.log(carroDaAna);


// Desestruturação - acessar propriedades de um objeto
// const motorDoCarroDaAna = carroDaAna.motor;
const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);