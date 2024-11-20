"use strict";
// Declarar booleanos
let estaChovendo = false;
estaChovendo = true;
// Declarar numeros
let idade = 28;
let altura = 1.76;
// Declarar strings
const nacionalidade = 'Brasileira';
// Declarar arrays
const colegas = ['Gustavo', 'Lucas'];
const tecnologias = ['html', 'css', 'js'];
// Declarar arrays somente leitura (impossibilita o .push)
const notas = [7, 9, 5, 8];
// Declarar tuplas
const lista = ['Gustavo', true, 28];
// Declarar union type (permite input de dois ou mais tipos diferentes)
let idadeDaAna = 25;
idadeDaAna = '25 anos';
// Declarar any (aceita qualquer tipo)
let dadosApi;
dadosApi = 10;
dadosApi = true;
dadosApi = [1, 2, 3];
dadosApi = 'string';
console.log(dadosApi);
// Tipagem implícita
let curso = 'front-end'; // as '' indicam que o tipo da variavel é uma string
// Tipagem explícita
let salario = 3000; // a sequência (: number) define que o tipo da variavel é um número
