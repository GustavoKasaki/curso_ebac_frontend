const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length ; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// .forEach = faz iteração com arrays, sem retornar
redesSociais.forEach(function(item, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${item}`);
})


// .map = loop de repetição para manipulação de arrays
const numeros = [1, 2, 3, 4, 5]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    numeroAtual = numeroAtual * 2;
    return numeroAtual;
})
console.log(dobroDosNumeros)

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})
console.log(alunos2)

//.find = localizar itens em um array
const paula = alunos2.find(function(item) {
    return item.nome == 'Paula' //retorna true ou false
})
console.log(paula)

//.findIndex = localizar itens em um array e retorna o valor do index no array
const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula'
})
console.log(indiceDaPaula)

//.every = aplica para todos os itens do array
alunos2.push ({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoFrontend = alunos2.every(function(item) {
    return item.curso == 'Frontend';
})
console.log(todosAlunosSaoFrontend)

// .some = aplica para pelo menos um item do array
const existeAlgumAlunoBackend = alunos2.some(function(item) {
    return item.curso == 'Backend'
})
console.log(existeAlgumAlunoBackend)

const existeAlgumAlunoFullstack = alunos2.some(function(item) {
    return item.curso == 'Backend' && item.curso == 'Frontend'
})
console.log(existeAlgumAlunoFullstack)

// .filter = filtra o array para exibir os itens solicitados
function filtraAlunosBackend(aluno) {
    return aluno.curso == 'Backend'
}
const alunosDeBackend = alunos2.filter(filtraAlunosBackend);
console.log(alunosDeBackend)

// .reduce = reduz o array
const nums = [10, 20, 30, 10]
const soma = nums.reduce(function(acc, itemAtual) {
    return acc += itemAtual // '+=' = incremento
}, 0) // '0' = começar no primeiro indice
console.log(soma)

let somaComFor = 0
for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i]
}
console.log(somaComFor)
