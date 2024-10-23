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
    this.salario = salario;

    Pessoa.call(this, nome); //acessa as informações do objeto 'Pessoa'
}

const funcionario1 = new Funcionario('Maria', 'Dev Front-End', 'R$ 3.000,00');
funcionario1.dizOi();
funcionario1.dizCargo();