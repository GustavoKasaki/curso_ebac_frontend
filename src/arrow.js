// const minhaFuncao = function() {return 'Diz olá'}
const minhaFuncao = () => {'Diz olá'} //arrow function pode omitir o 'return'

const retornaUmCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log(minhaFuncao())
console.log(retornaUmCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10
    },
    frear: function() {
        this.velocidadeAtual -= 10
    }
}

carro.acelerar();
carro.frear();

console.log(carro.velocidadeAtual)
console.log(carro.acelerar)
console.log(carro.frear)