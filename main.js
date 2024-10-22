// Declaração de objeto (não utilizado por ser inviável em projetos grandes)
const carro = {
    modelo: 'C3',
    fabricante: 'Citroen',
    anoModelo: 2012,
    anoFabricacao: 2011,
    acelerar: function() {
        console.log('vrum');
    }
}

// Função Construtora (o objeto inicia com maiusculo)
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('acelerar');
    }
}

// Instâncias (lembrar de usar 'new')
const carroDoJoao = new Carro('Fiesta', 'Ford', 2020, 2019);
const carroDaMaria = new Carro('Ka', 'Ford', 2021, 2020);

console.log(carro);
console.log(carroDoJoao);
console.log(carroDaMaria);


const nome = 'Gustavo';
const idade = '28';
const maiorDeIdade = true;
const conhecimentos = ['html', 'css', 'javascript'];

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(typeof nome); //'typeof' = retorna o tipo da variavel 'nome'
console.log(typeof idade);
console.log(typeof maiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);

console.log(carroDaMaria instanceof Carro); //'instanceof' = retorna se a instancia de determinado objeto
console.log(conhecimentos instanceof Array);