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