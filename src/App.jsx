import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";

function App() {
  const [formularioVisivel, setFormularioVisivel] = useState(true);

  return (
    <>
      <Perfil nome='Gustavo' endereco='https://github.com/GustavoKasaki.png' />
      <button onClick={() => setFormularioVisivel(!formularioVisivel)} type="button">Toggle form</button>
      
      {formularioVisivel && (
        <Formulario />
      )}
      
    </>
  )
}

export default App
