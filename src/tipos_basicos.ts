// Declarar booleanos
let estaChovendo: boolean = false;
estaChovendo = true;

// Declarar numeros
let idade: number = 28;
let altura: number = 1.76;

// Declarar strings
const nacionalidade: string = 'Brasileira';

// Declarar arrays
const colegas: string[] = ['Gustavo', 'Lucas']
const tecnologias: Array<string> = ['html', 'css', 'js'];

// Declarar arrays somente leitura (impossibilita o .push)
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

// Declarar tuplas
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Gustavo', true, 28];

// Declarar union type (permite input de dois ou mais tipos diferentes)
let idadeDaAna: number | string = 25;
idadeDaAna = '25 anos';

// Declarar any (aceita qualquer tipo)
let dadosApi: any;
dadosApi = 10;
dadosApi = true;
dadosApi = [1, 2, 3];
dadosApi = 'string';
console.log(dadosApi);