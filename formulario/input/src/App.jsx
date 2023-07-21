// Importa a biblioteca React.
import React from "react";

// Importa os componentes.
import Form1 from "./Form1";
import Form2 from "./Form2";

// Criado um componente chamado App.
const App = () => {
  // Retorna o formulário com dois inputs e um botão.
  return (
    <React.Fragment>
      <h1>Form com useState usando string</h1>
      <Form1 />
      <h1>Form com useState usando objeto</h1>
      <Form2 />
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
