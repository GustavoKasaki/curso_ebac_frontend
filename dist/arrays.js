"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (item, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(item));
});

// .map = loop de repetição
var numeros = [1, 2, 3, 4, 5];
var dobroDosNumeros = numeros.map(function (numeroAtual) {
  numeroAtual = numeroAtual * 2;
  return numeroAtual;
});
console.log(dobroDosNumeros);
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);

//.find = localizar itens em um array
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula'; //retorna true ou false
});
console.log(paula);

//.findIndex = localizar itens em um array e retorna o valor do index no array
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);
alunos2.push({
  nome: 'Lucio',
  curso: 'Backend'
});

//.every = aplica para todos os itens do array
var todosAlunosSaoFrontend = alunos2.every(function (item) {
  return item.curso == 'Frontend';
});
console.log(todosAlunosSaoFrontend);

// .some = aplica para pelo menos um item do array
var existeAlgumAlunoBackend = alunos2.some(function (item) {
  return item.curso == 'Backend';
});
console.log(existeAlgumAlunoBackend);
var existeAlgumAlunoFullstack = alunos2.some(function (item) {
  return item.curso == 'Backend' && item.curso == 'Frontend';
});
console.log(existeAlgumAlunoFullstack);

// .filter = filtra o array para exibir os itens solicitados
function filtraAlunosBackend(aluno) {
  return aluno.curso == 'Backend';
}
var alunosDeBackend = alunos2.filter(filtraAlunosBackend);
console.log(alunosDeBackend);

// .reduce = reduz o array
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acc, itemAtual) {
  return acc += itemAtual; // '+=' = incremento
}, 0); // '0' = começar no primeiro indice
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);