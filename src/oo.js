"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} disse oi!`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0; // O modificador 'protected' torna o atributo protegido, porém podendo ser alterado por herdeiros
        this.numeroConta = numeroConta;
    }
    static retornaNumeroBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPF extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPF(123456);
