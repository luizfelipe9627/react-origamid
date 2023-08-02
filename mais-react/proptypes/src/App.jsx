// Importa a biblioteca React.
import React from "react";

// Importa o componente.
import Button from "./Button";

// Criado um componente chamado App.
const App = () => {
  // Retorna uma div com o componente Button.
  return (
    <div>
      <Button width={150}>Clique aqui</Button>
    </div>
  );
};

export default App; // Está exportando o componente App.
