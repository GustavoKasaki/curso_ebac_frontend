// Declaração de objetos usando função construtora
// function Pokemon(nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon;
//     this.tipo = tipoDoPokemon;
// }
// const pikachu = new Pokemon('Pikachu', 'Eletrico');


class Pokemon {
    #hp = 100; // # = torna o recurso privado, podendo ser modificado e acessado apenas dentro da classe
    
    constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon;
        this.tipo = tipoDoPokemon;
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou usando ${nomeDoAtaque}`);
    }

    recebeuAtaque() {
        this.#hp -= 10;
    }

    exibeHp() {
        console.log(this.#hp);
    }
}

class Pikachu extends Pokemon { // 'extends' = para que a classe declarada herde informações de outra classe
    constructor() {
        super('Pikachu', 'Eletrico'); // 'super' = resgata parâmetros da classe mãe
    }

    atacar() {
        console.log(`${this.nome} atacou usando choque do trovão`);
    }
}

const pikachu = new Pokemon('Pikachu', 'Eletrico');
pikachu.atacar('choque do trovão');
console.log(pikachu);

const pikachuDoAsh = new Pikachu();
pikachuDoAsh.recebeuAtaque();
pikachuDoAsh.atacar();
pikachuDoAsh.exibeHp();
pikachuDoAsh.hp = 5000;
console.log(pikachuDoAsh);
console.log(pikachuDoAsh.hp);

console.log(pikachuDoAsh instanceof Pikachu);
console.log(pikachuDoAsh instanceof Pokemon);