function App() {
  const nome = 'react';

  function retornaNome() {
    return nome;
  }

  const pessoa = {
    nome: 'Maria'
  }

  let estaDeDia = true;

  return (
    <>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtítulo</h2>
      {estaDeDia ? 'Bom dia' : 'Boa tarde'}
    </>
  )
}

export default App
