// Declaração do objeto
class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

// Declaração das instâncias
const aluno1 = new Aluno('Gustavo', 8);
const aluno2 = new Aluno('Liliane', 6);
const aluno3 = new Aluno('Renan', 2);
const aluno4 = new Aluno('Cintia', 4);
const aluno5 = new Aluno('Eliana', 9);

// Colocando todas as instâncias em um array
const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

function retornarAlunosAprovados(array) {
    return array
        .filter(aluno => aluno.nota >= 6) // verificar os alunos com nota maior ou igual à 6
        .map(aluno => aluno.nome); // criar novo array apenas com os alunos com nota maior ou igual à 6
}

console.log(`Os alunos com nota igual ou superior à 6 são: ${retornarAlunosAprovados(alunos)}`);