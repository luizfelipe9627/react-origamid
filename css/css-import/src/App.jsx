// Importa a biblioteca React.
import React from "react";

// Importa o arquivo CSS.
import "./App.css";

// Importa o componente.
import Title from "./Title";

// Criado um componente chamado App.
const App = () => {
  // Retorna uma div com o texto App React.
  return (
    <div className="container">
      <Title />
    </div>
  );
};

export default App; // Está exportando o componente App.
