// Importa o React.
import React from "react";

// Importa os componentes.
import Formulario from "./Formulario";
import Notificacao from "./Notificacao";

// Criado um componente chamado App.
const App = () => {
  return (
    <React.Fragment>
      <Formulario />
      <br/>
      <Notificacao />
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
