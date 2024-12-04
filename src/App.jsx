import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);

  return (
    <>
      <Perfil nome='Gustavo' endereco='https://github.com/GustavoKasaki.png' />
      <ReposList />

      {/* <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">Toggle form</button>
      {formularioVisivel && (
        <Formulario />
      )} */}
      
    </>
  )
}

export default App
