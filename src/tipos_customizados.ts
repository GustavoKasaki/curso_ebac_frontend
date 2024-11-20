// Define um tipo customizado
type aluno = {
    nome: string;
    cursos?: string[]; // o simbolo de ? indica que o atributo é opcional
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', 'UX/UI'],
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Front-end', 'Python'],
        idade: 23,
    }
]

alunos.push({
    nome: 'Ana',
    cursos: ['Arquitetura'],
    idade: 29,
});

// Usando o tipo personalizado em variaveis
const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 32,
}

// Usando o tipo personalizado em funções
function exibeAluno(aluno: aluno) {
    console.log(aluno.nome);
}