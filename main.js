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

// console.log(carro);
// console.log(carroDoJoao);
// console.log(carroDaMaria);


const nome = 'Gustavo';
const sobrenome = null;
const idade = '28';
const maiorDeIdade = true;
const conhecimentos = ['html', 'css', 'javascript'];


const pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos
}

Object.freeze(pessoa); //trava o objeto e seus atributos, impedindo a alteração posterior
console.log(Object.keys(pessoa)); //retorna os nomes dos atributos de um objeto como array
console.log(Object.keys(pessoa).length); //retorna a quantidade de atributos
console.log(Object.values(pessoa)); //retorna os atributos do objeto como array

// console.log(typeof nome); //'typeof' = retorna o tipo da variavel 'nome'
// console.log(typeof idade);
// console.log(typeof maiorDeIdade);
// console.log(typeof conhecimentos);
// console.log(typeof pessoa);

// console.log(carroDaMaria instanceof Carro); //'instanceof' = retorna se a instancia de determinado objeto
// console.log(conhecimentos instanceof Array);

console.log(pessoa.nome); //exibir determinado atributo de um objeto usando '.'
console.log(pessoa['nome']); //exibir determinado atributo de um objeto usando '[]'

//exibir determinado atributo de um objeto usando uma função
function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}
exibeAtributo('nome');

if (pessoa['sobrenome']) { //callback retorna true ou false, se existir o atributo (false se for null)
    console.log('Essa pessoa tem um sobrenome!');
}

if ('sobrenome' in pessoa) {
    console.log('O atributo existe no objeto');
}