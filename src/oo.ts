class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) { // parametros obrigatórios sempre devem vir antes dos opcionais
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `${this.nome} disse oi!`
    }
}

class ContaBancaria {
    protected saldo: number = 0; // O modificador 'protected' torna o atributo protegido, porém podendo ser alterado por herdeiros
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    static retornaNumeroBanco() { // O modificador 'static' torna o método estatíco diretamente na classe, podendo ser acessado sem criar instancias do objeto
        return 125;
    }

    private getSaldo() { // O modificador 'private' torna o atributo protegido e impede o acesso e alteração por herdeiros
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

class ContaBancariaPF extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new ContaBancariaPF(123456);
