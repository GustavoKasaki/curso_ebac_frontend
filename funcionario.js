function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá')
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario; //'_' antes do atributo torna-o privado

    this.getSalario = function() {
        return `O salário de ${this.nome} é R$ ${_salario}`;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') { //verifica se 'valor' é um número e não uma string
            _salario = valor;
        }
    }

    Pessoa.call(this, nome); //acessa as informações do objeto 'Pessoa'
}

const funcionario1 = new Funcionario('Maria', 'Dev Front-End', '5000');

funcionario1.setSalario('mil');

console.log(funcionario1);
console.log(funcionario1.getSalario());
