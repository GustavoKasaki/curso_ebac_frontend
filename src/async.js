function funcaoMuitoPesada() { // Função normal
    let execucoes = 0;

    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => { // Função anterior como promise
    try {
        let execucoes = 0;

        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve(execucoes);
    }

    catch { // É executado caso a requisição falhe
        reject('Erro na iteração dos números!')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário ${login}`);
        }, 3000);
    });
}

async function funcaoPrincipal() { // torna a função assincrona
    console.log('inicio');

    promiseComParametros('gmkasaki@gmail.com', '123456').then(resultado => console.log(resultado))

    await funcaoMuitoPesadaPromise // 'await' = força à aguardar a execução desta função antes de seguir com o código
        .then(resultado => console.log(resultado)) // Exibe o erro caso a requisição ocorra normalmente
        .catch(erro => console.log(erro)); // Exibe o erro caso a requisição falhe
    
    console.log('fim');
}

funcaoPrincipal();