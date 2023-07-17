// Importa o React.
import React from "react";

// Importa os componentes criados.
import UseState from "./UseState";
import Modal from "./Modal/Modal";

// Criado um componente chamado App.
const App = () => {
  return (
    // O React.Fragment é utilizado para retornar mais de um elemento sem precisar colocar uma div.
    <React.Fragment>
      <h1>UseState</h1>
      <UseState />

      <h1>Modal</h1>
      <Modal />
    </React.Fragment>
  );
};

export default App; // Está exportando o componente App.
