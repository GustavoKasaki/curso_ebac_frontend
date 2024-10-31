let meuMap = new Map(); // Map = Conjunto de dados Chave-Valor
meuMap.set('nome', 'gustavo'); // '.set' = configura o map, sendo o primeiro argumento a chave, e o segundo argumento o valor
meuMap.set('stack', 'html, css, js');
console.log(meuMap);

const nome = meuMap.get('nome'); // '.get' = retorna o valor da chave do argumento
console.log(nome);

console.log(meuMap.size); // '.size' = retorna o tamanho (numero de chaves) do map

console.log(meuMap.has('sobrenome')); // '.has' = verifica se a chave informada no argumento existe no map, e retorna um booleano

// meuMap.clear(); // '.clear' = remove as chaves salvas no map
// console.log(meuMap.size); 

for (let chave of meuMap.keys()) { // '.key' = retorna todas as chaves do map
    console.log(chave)
}

for (let valor of meuMap.values()) { // '.key' = retorna todos os valores do map
    console.log(valor)
}

for (let entrada of meuMap.entries()) { // '.entries' = retorna todas as chaves e seus respectivos valores
    console.log(entrada)
}

for (let [chave, valor] of meuMap.entries()) { // é possivel declarar arrays como variaveis
    console.log(`${chave}: ${valor}`)
}

meuMap.delete('stack'); // '.delete' = remove a chave informada do map
console.log(meuMap);


const cpfs = new Set(); // Set = Conjunto de dados apenas com valores não repetidos

cpfs.add('40142276855');
cpfs.add('41880312808');
cpfs.add('13949377840');

console.log(cpfs);
console.log(cpfs.keys()); // por ser um Set, sempre retornará os valores pois não possui chaves
console.log(cpfs.values()); // por ser um Set, sempre retornará os valores pois não possui chaves

cpfs.forEach((valor) => { // '.forEach' = aplica a função para cada valor do Set
    console.log(valor);
})

// Transformar array em um set e eliminar duplicatas
const array = ['Gustavo Kasaki', 'Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Gian Souza', 'Luana'];

const arrayComoSet = new Set([...array]); // utilizando spread operator para 'quebrar' o array em valores separados, e removendo os valores duplicados
console.log(arrayComoSet);

const arraySemItensDuplicados = [...arrayComoSet];
console.log(arraySemItensDuplicados); // no terminal, os arrays são exibidos entre colchetes '[]'